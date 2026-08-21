import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { technologyMap } from '@/data/technologies';
import { comparisonMap } from '@/data/comparisons';
import { DynamicPageTemplate } from '@/components/DynamicPageTemplate';
import { generateEntityMetadata } from '@/lib/metadata/generateEntityMetadata';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getWebPageSchema } from '@/lib/schema/website';
import { extractFaqSchemaFromBlocks } from '@/lib/schema/faq';

interface TopLevelSlugProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(comparisonMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TopLevelSlugProps): Promise<Metadata> {
  const { slug } = await params;

  if (comparisonMap[slug]) {
    const data = comparisonMap[slug];
    return generateEntityMetadata(`/${slug}`, data, 'comparison');
  }

  if (technologyMap[slug]) {
    redirect(`/technologies/${slug}`);
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
    redirect(`/technologies/${slug}`);
  }

  notFound();
}
