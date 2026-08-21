import type { Metadata } from 'next';
import { LegalPage } from '@/src/views/LegalPage';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getWebPageSchema } from '@/lib/schema/website';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/privacy');
}

export default function PrivacyPage() {
  const jsonLd = getWebPageSchema('Privacy Policy', 'https://algorithyum.in/privacy', 'Encryption boundaries and compliance details.');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalPage type="privacy" />
    </>
  );
}
