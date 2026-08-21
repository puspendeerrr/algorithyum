import type { Metadata } from 'next';
import { About } from '@/src/views/About';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getWebPageSchema } from '@/lib/schema/website';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/about');
}

export default function AboutPage() {
  const jsonLd = getWebPageSchema('About Algorithyum', 'https://algorithyum.in/about', 'Engineering team mission, principles, and technology standards.');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <About />
    </>
  );
}
