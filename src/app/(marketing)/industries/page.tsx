import type { Metadata } from 'next';
import { IndustriesPage as IndustriesComponent } from '@/src/views/IndustriesPage';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getWebPageSchema } from '@/lib/schema/website';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/industries');
}

export default function IndustriesPage() {
  const jsonLd = getWebPageSchema('Industries Directory', 'https://algorithyum.in/industries', 'Review software compliance, API constraints, and database setups for medical, banking, logistics, retail, education, and manufacturing sectors.');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustriesComponent />
    </>
  );
}
