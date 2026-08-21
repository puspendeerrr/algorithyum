import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serviceMap } from '@/src/data/services';
import { DynamicPageTemplate } from '@/src/components/DynamicPageTemplate';
import { generateEntityMetadata } from '@/lib/metadata/generateEntityMetadata';
import { getServiceSchema } from '@/lib/schema/service';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { extractFaqSchemaFromBlocks } from '@/lib/schema/faq';

interface ServicePageProps {
  params: Promise<{ serviceId: string }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceMap).map((serviceId) => ({
    serviceId,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { serviceId } = await params;
  const data = serviceMap[serviceId];
  if (!data) return { title: 'Service Not Found | Algorithyum' };
  return generateEntityMetadata(`/services/${serviceId}`, data, 'service');
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const data = serviceMap[serviceId];
  if (!data) notFound();

  const serviceTitle = data.title.split('|')[0].trim();

  const serviceSchema = getServiceSchema({
    name: serviceTitle,
    description: data.description,
    url: `/services/${serviceId}`,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Services', url: '/services' },
    { name: serviceTitle, url: `/services/${serviceId}` },
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
      <DynamicPageTemplate pageType="service" slug={serviceId} />
    </>
  );
}
