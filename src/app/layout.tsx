import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { getOrganizationSchema } from '@/lib/schema/organization';
import { getWebSiteSchema } from '@/lib/schema/website';
import { Analytics } from '@/components/Analytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://algorithyum.in'),
  title: {
    default: 'Algorithyum | Enterprise Software Engineering, Generative AI & Cloud Solutions',
    template: '%s | Algorithyum',
  },
  description: 'Algorithyum builds custom software, AI agent pipelines, cloud systems, cybersecurity topologies, performance marketing, and digital transformation strategy for enterprises globally.',
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'Algorithyum',
    title: 'Algorithyum | Enterprise Software Engineering, Generative AI & Cloud Solutions',
    description: 'Algorithyum builds custom software, AI agent pipelines, cloud systems, cybersecurity topologies, performance marketing, and digital transformation strategy for enterprises globally.',
    images: [
      {
        url: 'https://algorithyum.in/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Algorithyum Corporate Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@algorithyum',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#040407',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
