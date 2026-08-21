import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { guideMap } from '@/data/guides';
import { DynamicPageTemplate } from '@/components/DynamicPageTemplate';
import { generateEntityMetadata } from '@/lib/metadata/generateEntityMetadata';
import { getTechArticleSchema } from '@/lib/schema/techArticle';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { extractFaqSchemaFromBlocks } from '@/lib/schema/faq';

export const revalidate = 3600; // ISR 1 hour revalidation policy

interface GuidePageProps {
  params: Promise<{ guideId: string }>;
}

export async function generateStaticParams() {
  return Object.keys(guideMap).map((guideId) => ({
    guideId,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { guideId } = await params;
  const data = guideMap[guideId];
  if (!data) return { title: 'Guide Not Found | Algorithyum' };
  return generateEntityMetadata(`/guides/${guideId}`, data, 'guide');
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { guideId } = await params;
  const data = guideMap[guideId];
  if (!data) notFound();

  const guideTitle = data.title.split('|')[0].trim();

  const techArticleSchema = getTechArticleSchema({
    title: guideTitle,
    description: data.description,
    url: `/guides/${guideId}`,
    datePublished: data.datePublished,
    dateModified: data.dateUpdated || data.datePublished,
    authorName: data.author || 'Algorithyum Systems Group',
    image: data.ogImage,
    keywords: data.keywords || data.tags,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Guides', url: '/guides' },
    { name: guideTitle, url: `/guides/${guideId}` },
  ]);

  const faqSchema = extractFaqSchemaFromBlocks(data.blocks);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <DynamicPageTemplate pageType="guide" slug={guideId} />
    </>
  );
}
