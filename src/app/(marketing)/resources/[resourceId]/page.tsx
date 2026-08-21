import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { resourceMap } from '@/data/resources';
import { DynamicPageTemplate } from '@/components/DynamicPageTemplate';
import { generateEntityMetadata } from '@/lib/metadata/generateEntityMetadata';
import { getWebPageSchema } from '@/lib/schema/website';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { extractFaqSchemaFromBlocks } from '@/lib/schema/faq';

interface ResourcePageProps {
  params: Promise<{ resourceId: string }>;
}

export async function generateStaticParams() {
  return Object.keys(resourceMap).map((resourceId) => ({
    resourceId,
  }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { resourceId } = await params;
  const data = resourceMap[resourceId];
  if (!data) return { title: 'Resource Not Found | Algorithyum' };
  return generateEntityMetadata(`/resources/${resourceId}`, data, 'resource');
}

export default async function ResourceDetailPage({ params }: ResourcePageProps) {
  const { resourceId } = await params;
  const data = resourceMap[resourceId];
  if (!data) notFound();

  const resourceTitle = data.title.split('|')[0].trim();

  const webPageSchema = getWebPageSchema(
    resourceTitle,
    `https://algorithyum.in/resources/${resourceId}`,
    data.description
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Resources', url: '/resources' },
    { name: resourceTitle, url: `/resources/${resourceId}` },
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
      <DynamicPageTemplate pageType="resource" slug={resourceId} />
    </>
  );
}
