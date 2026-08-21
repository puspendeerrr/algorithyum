import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { faqHubMap } from '@/data/faq-hub';
import { DynamicPageTemplate } from '@/components/DynamicPageTemplate';
import { generateEntityMetadata } from '@/lib/metadata/generateEntityMetadata';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { extractFaqSchemaFromBlocks } from '@/lib/schema/faq';

interface FaqPageProps {
  params: Promise<{ faqId: string }>;
}

export async function generateStaticParams() {
  return Object.keys(faqHubMap).map((faqId) => ({
    faqId,
  }));
}

export async function generateMetadata({ params }: FaqPageProps): Promise<Metadata> {
  const { faqId } = await params;
  const data = faqHubMap[faqId];
  if (!data) return { title: 'FAQ Not Found | Algorithyum' };
  return generateEntityMetadata(`/faq/${faqId}`, data, 'faq');
}

export default async function FaqHubDetailPage({ params }: FaqPageProps) {
  const { faqId } = await params;
  const data = faqHubMap[faqId];
  if (!data) notFound();

  const faqTitle = data.title.split('|')[0].trim();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'FAQ', url: '/faq' },
    { name: faqTitle, url: `/faq/${faqId}` },
  ]);

  const faqSchema = extractFaqSchemaFromBlocks(data.blocks);

  return (
    <>
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
      <DynamicPageTemplate pageType="faq" slug={faqId} />
    </>
  );
}
