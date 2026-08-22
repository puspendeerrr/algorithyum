import type { Metadata } from 'next';
import { Home } from '@/views/Home';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getOrganizationSchema } from '@/lib/schema/organization';
import { getFaqSchema } from '@/lib/schema/faq';
import { homeFaqs } from '@/data/homeFaqs';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/');
}

export default function HomePage() {
  const orgSchema = getOrganizationSchema();
  const faqSchema = getFaqSchema(homeFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Home />
    </>
  );
}
