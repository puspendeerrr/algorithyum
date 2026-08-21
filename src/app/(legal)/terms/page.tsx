import type { Metadata } from 'next';
import { LegalPage } from '@/src/views/LegalPage';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getWebPageSchema } from '@/lib/schema/website';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/terms');
}

export default function TermsPage() {
  const jsonLd = getWebPageSchema('Terms of Service', 'https://algorithyum.in/terms', 'Project delivery scope terms and system usage rules.');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalPage type="terms" />
    </>
  );
}
