import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudyMap } from '@/data/case-studies';
import { DynamicPageTemplate } from '@/components/DynamicPageTemplate';
import { generateEntityMetadata } from '@/lib/metadata/generateEntityMetadata';
import { getArticleSchema } from '@/lib/schema/article';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { extractFaqSchemaFromBlocks } from '@/lib/schema/faq';

interface CaseStudyPageProps {
  params: Promise<{ caseStudyId: string }>;
}

export async function generateStaticParams() {
  return Object.keys(caseStudyMap).map((caseStudyId) => ({
    caseStudyId,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { caseStudyId } = await params;
  const data = caseStudyMap[caseStudyId];
  if (!data) return { title: 'Case Study Not Found | Algorithyum' };
  return generateEntityMetadata(`/case-studies/${caseStudyId}`, data, 'case-study');
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { caseStudyId } = await params;
  const data = caseStudyMap[caseStudyId];
  if (!data) notFound();

  const caseStudyTitle = data.title.split('|')[0].trim();

  const articleSchema = getArticleSchema({
    title: caseStudyTitle,
    description: data.description,
    url: `/case-studies/${caseStudyId}`,
    datePublished: data.datePublished || '2026-01-01',
    dateModified: data.dateUpdated || data.datePublished || '2026-01-01',
    authorName: data.author || 'Algorithyum Engineering Team',
    image: data.ogImage,
    keywords: data.keywords,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Case Studies', url: '/case-studies' },
    { name: caseStudyTitle, url: `/case-studies/${caseStudyId}` },
  ]);

  const faqSchema = extractFaqSchemaFromBlocks(data.blocks);

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <DynamicPageTemplate pageType="case-study" slug={caseStudyId} />
    </>
  );
}
