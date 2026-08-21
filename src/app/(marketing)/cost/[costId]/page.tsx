import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { costPageMap } from '@/src/data/cost-pages';
import { DynamicPageTemplate } from '@/src/components/DynamicPageTemplate';
import { generateEntityMetadata } from '@/lib/metadata/generateEntityMetadata';
import { getWebPageSchema } from '@/lib/schema/website';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { extractFaqSchemaFromBlocks } from '@/lib/schema/faq';

interface CostPageProps {
  params: Promise<{ costId: string }>;
}

export async function generateStaticParams() {
  return Object.keys(costPageMap).map((costId) => ({
    costId,
  }));
}

export async function generateMetadata({ params }: CostPageProps): Promise<Metadata> {
  const { costId } = await params;
  const data = costPageMap[costId];
  if (!data) return { title: 'Cost Guide Not Found | Algorithyum' };
  return generateEntityMetadata(`/cost/${costId}`, data, 'cost');
}

export default async function CostGuideDetailPage({ params }: CostPageProps) {
  const { costId } = await params;
  const data = costPageMap[costId];
  if (!data) notFound();

  const costTitle = data.title.split('|')[0].trim();

  const webPageSchema = getWebPageSchema(
    costTitle,
    `https://algorithyum.in/cost/${costId}`,
    data.description
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Cost Guides', url: '/cost' },
    { name: costTitle, url: `/cost/${costId}` },
  ]);

  const faqSchema = extractFaqSchemaFromBlocks(data.blocks);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
      <DynamicPageTemplate pageType="cost" slug={costId} />
    </>
  );
}
