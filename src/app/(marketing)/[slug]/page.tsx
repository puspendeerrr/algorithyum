import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { technologyMap } from '@/data/technologies';
import { comparisonMap } from '@/data/comparisons';
import { DynamicPageTemplate } from '@/components/DynamicPageTemplate';
import { generateEntityMetadata } from '@/lib/metadata/generateEntityMetadata';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getWebPageSchema } from '@/lib/schema/website';
import { getServiceSchema } from '@/lib/schema/service';
import { extractFaqSchemaFromBlocks } from '@/lib/schema/faq';

interface TopLevelSlugProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const techSlugs = Object.keys(technologyMap).map((slug) => ({ slug }));
  const compSlugs = Object.keys(comparisonMap).map((slug) => ({ slug }));
  return [...techSlugs, ...compSlugs];
}

export async function generateMetadata({ params }: TopLevelSlugProps): Promise<Metadata> {
  const { slug } = await params;

  if (comparisonMap[slug]) {
    const data = comparisonMap[slug];
    return generateEntityMetadata(`/${slug}`, data, 'comparison');
  }

  if (technologyMap[slug]) {
    const data = technologyMap[slug];
    // Canonical link points to /technologies/:slug for tech alias top-level routes
    const metadata = generateEntityMetadata(`/technologies/${slug}`, data, 'technology');
    metadata.alternates = { canonical: `https://algorithyum.in/technologies/${slug}` };
    return metadata;
  }

  return {
    title: 'Page Not Found | Algorithyum',
  };
}

export default async function TopLevelCatchAllPage({ params }: TopLevelSlugProps) {
  const { slug } = await params;

  if (comparisonMap[slug]) {
    const data = comparisonMap[slug];
    const pageTitle = data.title.split('|')[0].trim();

    const breadcrumbSchema = getBreadcrumbSchema([
      { name: pageTitle, url: `/${slug}` },
    ]);

    const webPageSchema = getWebPageSchema(
      pageTitle,
      `https://algorithyum.in/${slug}`,
      data.description
    );

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
        <DynamicPageTemplate pageType="comparison" slug={slug} />
      </>
    );
  }

  if (technologyMap[slug]) {
    const data = technologyMap[slug];
    const techTitle = data.title.split('|')[0].trim();

    const serviceSchema = getServiceSchema({
      name: techTitle,
      description: data.description,
      url: `/technologies/${slug}`,
    });

    const breadcrumbSchema = getBreadcrumbSchema([
      { name: 'Technologies', url: '/technologies' },
      { name: techTitle, url: `/technologies/${slug}` },
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
        <DynamicPageTemplate pageType="technology" slug={slug} />
      </>
    );
  }

  notFound();
}
