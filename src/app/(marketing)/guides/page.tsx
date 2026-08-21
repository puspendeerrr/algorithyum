import type { Metadata } from 'next';
import { GuidesArchive } from '@/src/views/GuidesArchive';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getWebPageSchema } from '@/lib/schema/website';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/guides');
}

export default function GuidesPage() {
  const jsonLd = getWebPageSchema('Guides Directory', 'https://algorithyum.in/guides', 'Developer guides and architecture specification handbooks.');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuidesArchive />
    </>
  );
}
