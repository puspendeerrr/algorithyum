import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogMap } from '@/src/data/blogs';
import { BlogPage as BlogPageComponent } from '@/src/views/BlogPage';
import { generateEntityMetadata } from '@/lib/metadata/generateEntityMetadata';
import { getArticleSchema } from '@/lib/schema/article';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';

export const revalidate = 3600; // ISR 1 hour revalidation policy

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(blogMap).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const data = blogMap[slug];
  return generateEntityMetadata(`/blog/${slug}`, data, 'blog');
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const data = blogMap[slug];
  if (!data) notFound();

  const articleSchema = getArticleSchema({
    title: data.title,
    description: data.description,
    url: `/blog/${slug}`,
    datePublished: data.datePublished || '',
    authorName: data.author,
    image: data.ogImage,
    keywords: data.keywords,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Blog', url: '/blog' },
    { name: data.title.split('|')[0].trim(), url: `/blog/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPageComponent slugProp={slug} />
    </>
  );
}
