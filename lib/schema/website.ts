export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://algorithyum.in/#website',
    name: 'Algorithyum',
    url: 'https://algorithyum.in',
    description: 'Enterprise software architecture, AI engineering, and technical digital growth platform.',
    publisher: {
      '@id': 'https://algorithyum.in/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://algorithyum.in/blog?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getWebPageSchema(name: string, url: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    url,
    description,
    isPartOf: {
      '@id': 'https://algorithyum.in/#website',
    },
  };
}
