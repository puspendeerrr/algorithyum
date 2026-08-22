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
    telephone: '+91 9485769108',
    email: 'info@algorithyum.in',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'Chandigarh',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91 9485769108',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        email: 'info@algorithyum.in',
        contactType: 'sales',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Engineering, Mobile Apps & AI Services',
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
            name: 'ERP System Development',
            url: 'https://algorithyum.in/services/erp',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            url: 'https://algorithyum.in/services/web-development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            url: 'https://algorithyum.in/services/mobile-app-development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Integration Services',
            url: 'https://algorithyum.in/services/ai-integration',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Services',
            url: 'https://algorithyum.in/services/seo',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Services',
            url: 'https://algorithyum.in/services/cloud',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cybersecurity Services',
            url: 'https://algorithyum.in/services/cybersecurity',
          },
        },
      ],
    },
  };
}
