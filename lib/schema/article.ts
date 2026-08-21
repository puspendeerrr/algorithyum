export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
  keywords?: string[];
}

export function getArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = 'Algorithyum Engineering Team',
  image = 'https://algorithyum.in/logo.svg',
  keywords = [],
}: ArticleSchemaProps) {
  const fullUrl = url.startsWith('http') ? url : `https://algorithyum.in${url}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${fullUrl}#article`,
    headline: title,
    description,
    url: fullUrl,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://algorithyum.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Algorithyum',
      logo: {
        '@type': 'ImageObject',
        url: 'https://algorithyum.in/logo.svg',
      },
    },
    image: image.startsWith('http') ? image : `https://algorithyum.in${image}`,
    keywords: keywords.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
  };
}
