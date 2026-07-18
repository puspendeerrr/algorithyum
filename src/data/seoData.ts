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
    title: 'Algorithyum | Enterprise Software Engineering, Generative AI & Cloud Solutions',
    description: 'Algorithyum builds custom software, AI agent pipelines, cloud systems, cybersecurity topologies, performance marketing, and digital transformation strategy for enterprises globally.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Algorithyum',
      'url': 'https://algorithyum.in',
      'description': 'A professional technology solutions company delivering software, artificial intelligence, cloud, cybersecurity, and digital growth services.',
      'logo': 'https://algorithyum.in/logo.svg',
      'sameAs': [
        'https://x.com',
        'https://linkedin.com',
        'https://github.com'
      ]
    }
  },
  '/about': {
    title: 'About Us | Engineering Standards & Principles | Algorithyum',
    description: 'Read about Algorithyum\'s engineering methodology, codebase integrity, and virtual operational framework. We focus on qualitative layouts and factual scopes.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'About Algorithyum',
      'url': 'https://algorithyum.in/about',
      'description': 'Our developer alignment values, secure codebase principles, and remote operational details.'
    }
  },
  '/services': {
    title: 'Our Technical Capabilities & Services Directory | Algorithyum',
    description: 'Browse our 14 engineering pillars and service capacities, spanning software development, artificial intelligence, cloud, cybersecurity, automation, and search engineering.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Services Directory',
      'url': 'https://algorithyum.in/services',
      'description': 'Corporate technology directory listing software development, AI, DevOps, cybersecurity, automation, and search engineering services.'
    }
  },
  '/solutions': {
    title: 'Solutions Blueprint & Integration Frameworks | Algorithyum',
    description: 'Discover how we structure multi-layer integrations, legacy data migrations, unified dashboard portals, and real-time operational monitors.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Solutions Directory',
      'url': 'https://algorithyum.in/solutions',
      'description': 'Technical descriptions concerning database integrations, legacy migrations, dashboard portals, and metrics monitors.'
    }
  },
  '/industries': {
    title: 'Industries We Serve & Sector Specifications | Algorithyum',
    description: 'Explore our technology integrations tailored for healthcare patient registries, fintech accounting transactions, supply chain logistics tracing, and industrial IoT monitoring.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Industries Directory',
      'url': 'https://algorithyum.in/industries',
      'description': 'Review software compliance, API constraints, and database setups for medical, banking, logistics, retail, education, and manufacturing sectors.'
    }
  },
  '/technologies': {
    title: 'Our Complete Technology Stack & Developer Tooling | Algorithyum',
    description: 'Inspect our engineering stacks, including React, Next.js, Node.js, Go, Python, PostgreSQL, Redis, Docker, Kubernetes, AWS, Azure, and Google Cloud systems.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Technologies Directory',
      'url': 'https://algorithyum.in/technologies',
      'description': 'Developer toolsets spanning cloud providers, database servers, frontend libraries, and container managers.'
    }
  },
  '/blog': {
    title: 'Technical Insights, Engineering Audits & Reports | Algorithyum',
    description: 'Read technical writeups on Zero-Trust security, LLM agent configurations, Kubernetes autoscaling limits, and performance styling setups.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'Algorithyum Blog',
      'url': 'https://algorithyum.in/blog',
      'description': 'Quarterly engineering audits and architecture reviews.'
    }
  },
  '/guides': {
    title: 'Engineering Guides, Handbooks & Tutorials | Algorithyum',
    description: 'Browse our comprehensive guides and developer handbooks on specifying custom software systems, prompt orchestration, and Kubernetes scaling structures.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Guides Directory',
      'url': 'https://algorithyum.in/guides',
      'description': 'Developer guides and architecture specification handbooks.'
    }
  },
  '/careers': {
    title: 'Careers | Joint Our Architectural Teams | Algorithyum',
    description: 'Explore senior engineering roles, remote team guidelines, open-source contribution opportunities, and our factual project management models.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Careers at Algorithyum',
      'url': 'https://algorithyum.in/careers',
      'description': 'Engineering roles and workspace principles.'
    }
  },
  '/contact': {
    title: 'Contact Our Offices & Strategy Advisers | Algorithyum',
    description: 'Book strategy briefings, submit project blueprints, or connect with our directors. We provide virtual consultations and clear operational scopes.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Contact Algorithyum',
      'url': 'https://algorithyum.in/contact',
      'description': 'Direct paths to coordinate virtual briefings or transmit design scopes.'
    }
  },
  '/privacy': {
    title: 'Privacy Policy | Data Practices & PHI Handling | Algorithyum',
    description: 'Review our policies concerning database query logging, encryption practices, GDPR rights, and strict user data privacy compliance.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Privacy Policy',
      'url': 'https://algorithyum.in/privacy',
      'description': 'Encryption boundaries and compliance details.'
    }
  },
  '/terms': {
    title: 'Terms of Service | Consulting & Project Boundaries | Algorithyum',
    description: 'Read the legal and operational agreements regulating project discovery briefs, delivery milestones, software warranties, and support scopes.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Terms of Service',
      'url': 'https://algorithyum.in/terms',
      'description': 'Project delivery scope terms and system usage rules.'
    }
  },
  '/cookies': {
    title: 'Cookie Preferences & Consent Policy | Algorithyum',
    description: 'Control tracking settings and learn about how we use lightweight local storage tokens to persist dashboard session parameters.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Cookie Policy',
      'url': 'https://algorithyum.in/cookies',
      'description': 'Details on local storage variables used across browser clients.'
    }
  },
  '/sitemap': {
    title: 'HTML Sitemap | Navigation Directory Index | Algorithyum',
    description: 'Browse the complete index of indexed URLs, core pages, capability pillars, technology directories, and comparisons.',
    ogImage: 'https://algorithyum.in/logo.svg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterImage: 'https://algorithyum.in/logo.svg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'HTML Sitemap Directory',
      'url': 'https://algorithyum.in/sitemap',
      'description': 'Complete path directory indexing.'
    }
  }
};
