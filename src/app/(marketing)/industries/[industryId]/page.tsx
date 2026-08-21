import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industryMap } from '@/src/data/industries';
import { DynamicPageTemplate } from '@/src/components/DynamicPageTemplate';
import { generateEntityMetadata } from '@/lib/metadata/generateEntityMetadata';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getWebPageSchema } from '@/lib/schema/website';
import { extractFaqSchemaFromBlocks } from '@/lib/schema/faq';

interface IndustryPageProps {
  params: Promise<{ industryId: string }>;
}

export async function generateStaticParams() {
  return Object.keys(industryMap).map((industryId) => ({
    industryId,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { industryId } = await params;
  const data = industryMap[industryId];
  if (!data) return { title: 'Industry Not Found | Algorithyum' };
  return generateEntityMetadata(`/industries/${industryId}`, data, 'industry');
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { industryId } = await params;
  const data = industryMap[industryId];
  if (!data) notFound();

  const industryTitle = data.title.split('|')[0].trim();

  const webPageSchema = getWebPageSchema(
    industryTitle,
    `https://algorithyum.in/industries/${industryId}`,
    data.description
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Industries', url: '/industries' },
    { name: industryTitle, url: `/industries/${industryId}` },
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
      <DynamicPageTemplate pageType="industry" slug={industryId} />
    </>
  );
}
