import { NextResponse } from 'next/server';
import { blogMap } from '@/data/blogs';
import type { BlogPageData } from '@/data/types';

export async function GET() {
  const baseUrl = 'https://algorithyum.in';
  const blogs: BlogPageData[] = Object.values(blogMap);

  const rssItemsXml = blogs
    .map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.datePublished || '2026-07-01').toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
      <category><![CDATA[${post.category || 'Technology'}]]></category>
    </item>`)
    .join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Algorithyum R&amp;D Insights &amp; Engineering Reports</title>
    <link>${baseUrl}</link>
    <description>Quarterly technical analysis, architectural breakdowns, and AI engineering insights from Algorithyum Systems Group.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
