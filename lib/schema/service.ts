export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  providerName?: string;
  areaServed?: string;
  category?: string;
}

export function getServiceSchema({
  name,
  description,
  url,
  providerName = 'Algorithyum',
  areaServed = 'Worldwide',
  category = 'Software Engineering',
}: ServiceSchemaProps) {
  const fullUrl = url.startsWith('http') ? url : `https://algorithyum.in${url}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${fullUrl}#service`,
    name,
    description,
    url: fullUrl,
    category,
    provider: {
      '@type': 'Organization',
      name: providerName,
      url: 'https://algorithyum.in',
      logo: 'https://algorithyum.in/logo.svg',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: areaServed,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${name} Offerings`,
    },
  };
}
