import type { Metadata } from 'next';
import { Solutions } from '@/views/Solutions';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getWebPageSchema } from '@/lib/schema/website';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/solutions');
}

export default function SolutionsPage() {
  const jsonLd = getWebPageSchema('Solutions Directory', 'https://algorithyum.in/solutions', 'Technical descriptions concerning database integrations, legacy migrations, dashboard portals, and metrics monitors.');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Solutions />
    </>
  );
}
