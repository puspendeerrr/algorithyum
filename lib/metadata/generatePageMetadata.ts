import type { Metadata } from 'next';
import { seoMap } from '../../src/data/seoData';

export function generatePageMetadata(path: string): Metadata {
  const data = seoMap[path] || seoMap['/'];
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.ogImage || 'https://algorithyum.in/logo.svg',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [data.twitterImage || 'https://algorithyum.in/logo.svg'],
    },
  };
}
