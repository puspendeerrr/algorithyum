export interface SEOData {
  title: string;
  description: string;
  ogImage?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  twitterImage?: string;
  schema: any;
}

export const seoMap: Record<string, SEOData> = {
  '/': {
    title: 'Algorithyum | Custom Software, ERP, Mobile Apps & AI Solutions',
    description: 'Algorithyum is a custom software development company. We build custom software, ERP systems, websites, mobile apps, games, AI solutions and help businesses grow with SEO.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Algorithyum',
      'url': 'https://algorithyum.in',
      'description': 'Software development company specializing in custom software development, ERP system development, web development, mobile app development, AI integration, and SEO services.',
      'logo': 'https://algorithyum.in/logo.svg',
      'sameAs': [
        'https://x.com',
        'https://linkedin.com',
        'https://github.com'
      ]
    }
  },
  '/about': {
    title: 'About Us | Software Development & ERP Company | Algorithyum',
    description: 'Learn about Algorithyum — a dedicated software development company building custom software, ERP software, mobile apps, AI integrations, and providing SEO services.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'About Algorithyum',
      'url': 'https://algorithyum.in/about',
      'description': 'About Algorithyum — software development team, core values, and honest approach.'
    }
  },
  '/services': {
    title: 'Our Services | Software, ERP, Mobile Apps, AI & SEO | Algorithyum',
    description: 'Explore our services: Custom Software Development, ERP System Development, Software Redesign, Web Development, Android, iOS, Cross Platform Apps, Game Development, AI Integration, AI Automation, and SEO Services.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Our Services',
      'url': 'https://algorithyum.in/services',
      'description': 'Custom software, ERP development, web apps, mobile app development, game development, AI chatbot integration, and SEO services.'
    }
  },
  '/solutions': {
    title: 'Solutions | Business Software, ERP & App Solutions | Algorithyum',
    description: 'Discover software solutions for business challenges — custom ERP systems, inventory management software, CRM software, mobile apps, AI automation, and technical SEO.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Our Solutions',
      'url': 'https://algorithyum.in/solutions',
      'description': 'Software development solutions: Custom ERP software, mobile app development, legacy modernization, AI automation, and SEO.'
    }
  },
  '/industries': {
    title: 'Industries We Serve | ERP & Software Solutions | Algorithyum',
    description: 'We build custom software and ERP systems for manufacturing, retail, healthcare, education, logistics, finance, and real estate.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Industries We Serve',
      'url': 'https://algorithyum.in/industries',
      'description': 'Custom software and ERP solutions built for manufacturing, healthcare, retail, education, and logistics.'
    }
  },
  '/technologies': {
    title: 'Technologies We Use | Modern Tech Stack | Algorithyum',
    description: 'Our software technology stack: React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Redis, OpenAI, LangChain, Flutter, and React Native.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Technologies We Use',
      'url': 'https://algorithyum.in/technologies',
      'description': 'Our tech stack: React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, OpenAI, Flutter, React Native.'
    }
  },
  '/blog': {
    title: 'Blog | Software Development, ERP & AI Insights | Algorithyum',
    description: 'Read technical articles and practical guides on custom software development, ERP systems, mobile app development, OpenAI integration, and SEO strategies.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'Algorithyum Blog',
      'url': 'https://algorithyum.in/blog',
      'description': 'Articles on custom software development, ERP software, mobile apps, AI, and SEO.'
    }
  },
  '/guides': {
    title: 'Guides | Software, ERP & App Development Tutorials | Algorithyum',
    description: 'Detailed guides on building custom ERP software, inventory systems, CRM development, mobile app launches, AI automation, and technical SEO.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Guides & Resources',
      'url': 'https://algorithyum.in/guides',
      'description': 'Guides on custom software development, ERP systems, mobile apps, and SEO.'
    }
  },
  '/careers': {
    title: 'Careers | Software Engineering & Tech Roles | Algorithyum',
    description: 'Explore career opportunities at Algorithyum for software developers, mobile app engineers, and tech specialists.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Careers at Algorithyum',
      'url': 'https://algorithyum.in/careers',
      'description': 'Careers at Algorithyum.'
    }
  },
  '/contact': {
    title: 'Contact Us | Custom Software & ERP Development | Algorithyum',
    description: 'Need custom software, ERP software, mobile app, AI, or SEO services? Email us at info@algorithyum.in for a prompt project response.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Contact Algorithyum',
      'url': 'https://algorithyum.in/contact',
      'description': 'Contact Algorithyum for custom software, ERP, mobile app, AI, or SEO projects.'
    }
  },
  '/privacy': {
    title: 'Privacy Policy | Algorithyum',
    description: 'Read our privacy policy regarding client data and website privacy.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Privacy Policy',
      'url': 'https://algorithyum.in/privacy',
      'description': 'Algorithyum privacy policy.'
    }
  },
  '/terms': {
    title: 'Terms of Service | Algorithyum',
    description: 'Read the terms of service governing software development projects and site usage.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Terms of Service',
      'url': 'https://algorithyum.in/terms',
      'description': 'Algorithyum terms of service.'
    }
  },
  '/cookies': {
    title: 'Cookie Policy | Algorithyum',
    description: 'Cookie policy and consent information for Algorithyum website.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Cookie Policy',
      'url': 'https://algorithyum.in/cookies',
      'description': 'Algorithyum cookie policy.'
    }
  },
  '/sitemap': {
    title: 'Sitemap | Algorithyum Navigation Index',
    description: 'Complete page directory of Algorithyum software services, technologies, solutions, and guides.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Sitemap',
      'url': 'https://algorithyum.in/sitemap',
      'description': 'Website sitemap index.'
    }
  },
  '/editorial-policy': {
    title: 'Editorial Policy | Algorithyum',
    description: 'Learn about Algorithyum\'s technical peer review process, EEAT benchmarks, and AI ethics policy.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Editorial Policy',
      'url': 'https://algorithyum.in/editorial-policy',
      'description': 'Algorithyum editorial and technical verification policy.'
    }
  },
  '/accessibility': {
    title: 'Accessibility Statement | Algorithyum',
    description: 'Algorithyum is committed to digital accessibility and WCAG 2.1 AA compliance across all digital assets.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Accessibility Statement',
      'url': 'https://algorithyum.in/accessibility',
      'description': 'Algorithyum accessibility statement.'
    }
  },
  '/security-policy': {
    title: 'Security Policy & Compliance | Algorithyum',
    description: 'Overview of Algorithyum\'s Zero Trust architecture, AES-256 encryption, and vulnerability disclosure policies.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Security Policy',
      'url': 'https://algorithyum.in/security-policy',
      'description': 'Algorithyum security policy and compliance.'
    }
  }
};
