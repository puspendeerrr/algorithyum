import type { Metadata } from 'next';

export function generateEntityMetadata(
  urlOrTitleOrData: any,
  dataOrDescOrUrl?: any,
  typeArg?: string
): Metadata {
  let title = 'Algorithyum';
  let description = '';
  let url = '';
  let rawData: any = null;

  if (typeof urlOrTitleOrData === 'string' && urlOrTitleOrData.startsWith('/') && typeof dataOrDescOrUrl === 'object' && dataOrDescOrUrl !== null) {
    url = urlOrTitleOrData;
    rawData = dataOrDescOrUrl;
    title = dataOrDescOrUrl.title || dataOrDescOrUrl.name || 'Algorithyum';
    description = dataOrDescOrUrl.description || '';
  } else if (typeof urlOrTitleOrData === 'object' && urlOrTitleOrData !== null) {
    rawData = urlOrTitleOrData;
    title = urlOrTitleOrData.title || urlOrTitleOrData.name || 'Algorithyum';
    description = urlOrTitleOrData.description || '';
    if (typeof dataOrDescOrUrl === 'string') {
      url = dataOrDescOrUrl;
    }
  } else {
    title = String(urlOrTitleOrData || '');
    description = typeof dataOrDescOrUrl === 'string' ? dataOrDescOrUrl : '';
    url = typeArg || '';
  }

  const cleanPath = url ? (url === '/' ? '' : url.replace(/\/$/, '')) : '';
  const canonicalUrl = `https://algorithyum.in${cleanPath}`;

  // Image resolution
  const ogImageUrl = (rawData?.ogImage && rawData.ogImage !== 'https://algorithyum.in/logo.svg')
    ? rawData.ogImage
    : (rawData?.twitterImage && rawData.twitterImage !== 'https://algorithyum.in/logo.svg')
    ? rawData.twitterImage
    : 'https://algorithyum.in/og-image.png';
  const ogImageWidth = Number(rawData?.ogImageWidth) || 1200;
  const ogImageHeight = Number(rawData?.ogImageHeight) || 630;
  const ogImageAlt = title.split('|')[0].trim() || 'Algorithyum Engineering & AI Solutions';

  // Content type resolution
  const isArticle = typeArg === 'blog' || typeArg === 'guide' || rawData?.datePublished;
  const ogType = isArticle ? 'article' : 'website';

  // Keywords extraction
  let keywordsList: string[] | undefined = undefined;
  if (Array.isArray(rawData?.keywords)) {
    keywordsList = rawData.keywords;
  } else if (Array.isArray(rawData?.tags)) {
    keywordsList = rawData.tags;
  } else if (typeof rawData?.keywords === 'string') {
    keywordsList = rawData.keywords.split(',').map((k: string) => k.trim());
  }

  const metadata: Metadata = {
    title,
    description,
    keywords: keywordsList,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Algorithyum',
      locale: 'en_US',
      type: ogType,
      images: [
        {
          url: ogImageUrl,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: ogImageAlt,
        },
      ],
      ...(isArticle && {
        publishedTime: rawData?.datePublished,
        modifiedTime: rawData?.dateUpdated || rawData?.datePublished,
        authors: rawData?.author ? [rawData.author] : ['Algorithyum Systems Group'],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@algorithyum',
      creator: '@algorithyum',
      title,
      description,
      images: [ogImageUrl],
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

  return metadata;
}
