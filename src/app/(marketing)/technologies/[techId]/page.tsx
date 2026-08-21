import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { technologyMap } from '@/src/data/technologies';
import { DynamicPageTemplate } from '@/src/components/DynamicPageTemplate';
import { generateEntityMetadata } from '@/lib/metadata/generateEntityMetadata';
import { getServiceSchema } from '@/lib/schema/service';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { extractFaqSchemaFromBlocks } from '@/lib/schema/faq';

interface TechPageProps {
  params: Promise<{ techId: string }>;
}

export async function generateStaticParams() {
  return Object.keys(technologyMap).map((techId) => ({
    techId,
  }));
}

export async function generateMetadata({ params }: TechPageProps): Promise<Metadata> {
  const { techId } = await params;
  const data = technologyMap[techId];
  if (!data) return { title: 'Technology Not Found | Algorithyum' };
  return generateEntityMetadata(`/technologies/${techId}`, data, 'technology');
}

export default async function TechnologyDetailPage({ params }: TechPageProps) {
  const { techId } = await params;
  const data = technologyMap[techId];
  if (!data) notFound();

  const techTitle = data.title.split('|')[0].trim();

  const serviceSchema = getServiceSchema({
    name: techTitle,
    description: data.description,
    url: `/technologies/${techId}`,
    category: 'Software Architecture & Tooling',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Technologies', url: '/technologies' },
    { name: techTitle, url: `/technologies/${techId}` },
  ]);

  const faqSchema = extractFaqSchemaFromBlocks(data.blocks);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
      <DynamicPageTemplate pageType="technology" slug={techId} />
    </>
  );
}
