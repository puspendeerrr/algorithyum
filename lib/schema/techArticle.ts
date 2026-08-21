export interface TechArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
  keywords?: string[];
  dependencies?: string;
  proficiencyLevel?: string;
}

export function getTechArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = 'Algorithyum Engineering Team',
  image = 'https://algorithyum.in/logo.svg',
  keywords = [],
  dependencies = 'Node.js, TypeScript, Next.js, Cloud Architectures',
  proficiencyLevel = 'Expert',
}: TechArticleSchemaProps) {
  const fullUrl = url.startsWith('http') ? url : `https://algorithyum.in${url}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${fullUrl}#tech-article`,
    headline: title,
    description,
    url: fullUrl,
    datePublished: datePublished || new Date().toISOString().split('T')[0],
    dateModified: dateModified || datePublished || new Date().toISOString().split('T')[0],
    proficiencyLevel,
    dependencies,
    author: {
      '@type': 'Person',
      name: authorName,
      worksFor: {
        '@type': 'Organization',
        name: 'Algorithyum',
        url: 'https://algorithyum.in',
      },
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
