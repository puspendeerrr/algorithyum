import type { Metadata } from 'next';
import { Home } from '@/src/views/Home';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getOrganizationSchema } from '@/lib/schema/organization';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/');
}

export default function HomePage() {
  const jsonLd = getOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
