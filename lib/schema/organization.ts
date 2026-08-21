export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'Corporation', 'ProfessionalService', 'LocalBusiness'],
    '@id': 'https://algorithyum.in/#organization',
    name: 'Algorithyum',
    legalName: 'Algorithyum Systems Group',
    url: 'https://algorithyum.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://algorithyum.in/logo.svg',
      width: 512,
      height: 512,
    },
    image: 'https://algorithyum.in/logo.svg',
    description: 'Enterprise software development, artificial intelligence solutions, cloud architecture, cybersecurity, and digital transformation consulting.',
    telephone: '+1-800-ALGORITHYUM',
    email: 'contact@algorithyum.in',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'CA',
      addressLocality: 'San Francisco',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-800-ALGORITHYUM',
        contactType: 'technical support',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        email: 'sales@algorithyum.in',
        contactType: 'sales',
        availableLanguage: ['English'],
      },
    ],
    sameAs: [
      'https://x.com',
      'https://linkedin.com',
      'https://github.com',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Engineering & AI Consulting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software Development',
            url: 'https://algorithyum.in/services/software-development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Artificial Intelligence & Machine Learning',
            url: 'https://algorithyum.in/services/ai',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Infrastructure & DevOps',
            url: 'https://algorithyum.in/services/cloud',
          },
        },
      ],
    },
  };
}
