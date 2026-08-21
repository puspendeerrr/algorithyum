import type { Metadata } from 'next';
import { LegalPage } from '@/views/LegalPage';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getWebPageSchema } from '@/lib/schema/website';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/cookies');
}

export default function CookiesPage() {
  const jsonLd = getWebPageSchema('Cookie Policy', 'https://algorithyum.in/cookies', 'Details on local storage variables used across browser clients.');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalPage type="cookies" />
    </>
  );
}
