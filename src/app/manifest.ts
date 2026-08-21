import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Algorithyum Digital Platform',
    short_name: 'Algorithyum',
    description: 'Enterprise software architecture, AI engineering, and technical digital growth platform.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07090e',
    theme_color: '#0052ff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
