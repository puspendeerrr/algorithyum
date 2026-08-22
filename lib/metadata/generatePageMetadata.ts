import type { Metadata } from 'next';
import { seoMap } from '../../src/data/seoData';

export function generatePageMetadata(path: string): Metadata {
  const data = seoMap[path] || seoMap['/'];
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  const canonicalUrl = `https://algorithyum.in${cleanPath}`;

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: canonicalUrl,
      images: [
        {
          url: (data.ogImage && data.ogImage !== 'https://algorithyum.in/logo.svg') ? data.ogImage : 'https://algorithyum.in/og-image.png',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [(data.twitterImage && data.twitterImage !== 'https://algorithyum.in/logo.svg') ? data.twitterImage : 'https://algorithyum.in/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
