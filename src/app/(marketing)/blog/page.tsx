import type { Metadata } from 'next';
import { BlogListing } from '@/src/views/BlogListing';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/blog');
}

export default function BlogListingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Algorithyum Blog',
    'url': 'https://algorithyum.in/blog',
    'description': 'Quarterly engineering audits and architecture reviews.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogListing />
    </>
  );
}
