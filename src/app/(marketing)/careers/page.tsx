import type { Metadata } from 'next';
import { CareersPage as CareersComponent } from '@/src/views/CareersPage';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getWebPageSchema } from '@/lib/schema/website';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/careers');
}

export default function CareersPage() {
  const jsonLd = getWebPageSchema('Careers at Algorithyum', 'https://algorithyum.in/careers', 'Engineering roles and workspace principles.');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CareersComponent />
    </>
  );
}
