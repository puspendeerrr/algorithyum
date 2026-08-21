import type { Metadata } from 'next';
import { TechnologiesPage as TechnologiesComponent } from '@/src/views/TechnologiesPage';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getWebPageSchema } from '@/lib/schema/website';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/technologies');
}

export default function TechnologiesPage() {
  const jsonLd = getWebPageSchema('Technologies Directory', 'https://algorithyum.in/technologies', 'Developer toolsets spanning cloud providers, database servers, frontend libraries, and container managers.');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TechnologiesComponent />
    </>
  );
}
