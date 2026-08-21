import type { Metadata } from 'next';
import { ServicesOverview } from '@/src/views/ServicesOverview';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getWebPageSchema } from '@/lib/schema/website';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/services');
}

export default function ServicesPage() {
  const jsonLd = getWebPageSchema('Services Directory', 'https://algorithyum.in/services', 'Corporate technology directory listing software development, AI, DevOps, cybersecurity, automation, and search engineering services.');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesOverview />
    </>
  );
}
