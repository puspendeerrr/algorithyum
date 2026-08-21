import type { Metadata } from 'next';
import { ContactPage as ContactComponent } from '@/src/views/ContactPage';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';
import { getWebPageSchema } from '@/lib/schema/website';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/contact');
}

export default function ContactPage() {
  const jsonLd = getWebPageSchema('Contact Algorithyum', 'https://algorithyum.in/contact', 'Direct paths to coordinate virtual briefings or transmit design scopes.');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactComponent />
    </>
  );
}
