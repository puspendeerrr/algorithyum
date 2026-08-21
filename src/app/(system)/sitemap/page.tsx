import type { Metadata } from 'next';
import { SitemapPage as SitemapComponent } from '@/views/SitemapPage';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getWebPageSchema } from '@/lib/schema/website';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/sitemap');
}

export default function SitemapDirectoryPage() {
  const jsonLd = getWebPageSchema('HTML Sitemap Directory', 'https://algorithyum.in/sitemap', 'Complete path directory indexing.');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SitemapComponent />
    </>
  );
}
