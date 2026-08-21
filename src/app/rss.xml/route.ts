import { NextResponse } from 'next/server';
import { blogMap } from '@/data/blogs';
import type { BlogPageData } from '@/data/types';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  const baseUrl = 'https://algorithyum.in';
  const blogs: BlogPageData[] = Object.values(blogMap).sort((a, b) => {
    const dA = new Date(a.datePublished || '2026-01-01').getTime();
    const dB = new Date(b.datePublished || '2026-01-01').getTime();
    return dB - dA;
  });

  const lastBuildDate = blogs[0]?.datePublished
    ? new Date(blogs[0].datePublished).toUTCString()
    : new Date('2026-08-21T00:00:00Z').toUTCString();

  const rssItemsXml = blogs
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.datePublished || '2026-01-01').toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
      <category><![CDATA[${post.category || 'Technology'}]]></category>
    </item>`
    )
    .join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Algorithyum R&amp;D Insights &amp; Engineering Reports</title>
    <link>${baseUrl}</link>
    <description>Technical analysis, architectural breakdowns, and AI engineering insights from Algorithyum.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
