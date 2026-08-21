export interface Capability {
  title: string;
  desc: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ServicePageData {
  title: string;
  subtitle: string;
  category: 'engineering' | 'intelligent' | 'growth';
  capabilities: Capability[];
  technologies: string[];
  faqs: FAQ[];
}

export const serviceMap: Record<string, ServicePageData> = {
  'software-development': {
    title: 'Custom Software Development',
    subtitle: 'We build custom software tailored to your business needs — from custom workflow tools to full SaaS applications.',
    category: 'engineering',
    capabilities: [
      { title: 'Custom Business Software', desc: 'Software built specifically for your operational workflows, order processing, and team management.' },
      { title: 'SaaS Product Development', desc: 'Multi-tenant web software built so you can offer subscription-based products to your clients.' },
      { title: 'Business Management Software', desc: 'Centralized tools to organize operations, staff roles, and daily company tasks.' },
      { title: 'API & Database Systems', desc: 'Secure backend architectures and APIs to connect your tools and third-party services.' }
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    faqs: [
      { q: 'What is custom software development?', a: 'Custom software development means creating software designed specifically for your company instead of relying on generic off-the-shelf templates.' },
      { q: 'How long does custom software development take?', a: 'Depending on complexity, project timelines range from 4 to 12 weeks for initial versions.' },
      { q: 'Do you provide ongoing support after launch?', a: 'Yes. We offer maintenance, bug fixing, and continuous feature development.' }
    ]
  },
  'erp': {
    title: 'ERP System Development',
    subtitle: 'We build custom ERP software, inventory systems, CRM, HRMS, and business management tools for growing companies.',
    category: 'engineering',
    capabilities: [
      { title: 'Manufacturing & Retail ERP', desc: 'Custom ERP solutions for factory production tracking, supply flow, and retail store management.' },
      { title: 'Inventory & Warehouse Management', desc: 'Real-time stock tracking, warehouse organization, stock alerts, and supplier management tools.' },
      { title: 'CRM & Billing Software', desc: 'Customer management portals, automated invoicing, POS integrations, and transaction history.' },
      { title: 'School, Hospital & HRMS ERP', desc: 'Specialized management software for educational institutions, medical clinics, and HR staff tracking.' }
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis'],
    faqs: [
      { q: 'What types of ERP software do you build?', a: 'We build Manufacturing ERP, Inventory Management Systems, CRM, HRMS, School ERP, Hospital ERP, Warehouse Management, Retail ERP, Billing & POS software.' },
      { q: 'Why choose custom ERP over ready-made software?', a: 'Custom ERP fits your exact workflows without unnecessary subscription fees or rigid processes that force you to change how you work.' },
      { q: 'Can custom ERP connect with existing billing or POS systems?', a: 'Yes. We build custom API connectors to sync data between your ERP, payment gateways, and POS hardware.' }
    ]
  },
  'software-redesign': {
    title: 'Software Redesign & Modernization',
    subtitle: 'We help you update legacy, slow, or outdated software so it runs faster, looks modern, and is easy to maintain.',
    category: 'engineering',
    capabilities: [
      { title: 'Legacy System Modernization', desc: 'Rebuilding older software with modern frameworks to improve speed, security, and reliability.' },
      { title: 'Code Refactoring & Cleanup', desc: 'Fixing messy codebases and structural bugs to make software easy to update.' },
      { title: 'UI/UX Interface Redesign', desc: 'Updating screen layouts and user flows so your software looks modern and intuitive.' },
      { title: 'Database Migration', desc: 'Safely transferring data from legacy systems to modern database architecture.' }
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    faqs: [
      { q: 'When should software be modernized?', a: 'If your current system is slow, hard to update, or lacking security, modernization restores performance.' },
      { q: 'Will existing data be preserved during modernization?', a: 'Yes. We execute data backups and safe migration scripts without loss.' }
    ]
  },
  'web-development': {
    title: 'Web Development',
    subtitle: 'We build fast, modern websites and web applications designed to perform well on desktop and mobile devices.',
    category: 'engineering',
    capabilities: [
      { title: 'Business Websites', desc: 'Fast, responsive corporate websites built to represent your brand and convert visitors.' },
      { title: 'Web Applications', desc: 'Interactive portals, customer dashboards, and admin web systems.' },
      { title: 'E-commerce Platforms', desc: 'Online stores with product catalogs, shopping carts, checkout, and order tracking.' },
      { title: 'PageSpeed & Performance', desc: 'Clean HTML and Next.js optimization for fast loading times.' }
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    faqs: [
      { q: 'What web development frameworks do you use?', a: 'We build primarily with Next.js, React, Node.js, and TypeScript.' },
      { q: 'Are all websites responsive on mobile?', a: 'Yes. All websites adapt seamlessly to smartphone, tablet, and desktop screens.' }
    ]
  },
  'android-app-development': {
    title: 'Android App Development',
    subtitle: 'We build fast, reliable Android mobile apps ready for launch on the Google Play Store.',
    category: 'engineering',
    capabilities: [
      { title: 'Native Android Apps', desc: 'Android applications engineered for performance and full hardware compatibility.' },
      { title: 'Clean User Interface', desc: 'Intuitive screen design adhering to mobile usability standards.' },
      { title: 'Offline Functionality', desc: 'Local storage caching to keep apps functional without network connectivity.' },
      { title: 'Play Store Publishing', desc: 'Complete deployment setup for publishing to Google Play.' }
    ],
    technologies: ['React Native', 'Flutter', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    faqs: [
      { q: 'Do you help publish the app to Google Play Store?', a: 'Yes. We manage the submission process through Google Play Console.' }
    ]
  },
  'ios-app-development': {
    title: 'iOS App Development',
    subtitle: 'We build iPhone and iPad apps designed for high performance and smooth App Store approval.',
    category: 'engineering',
    capabilities: [
      { title: 'Native iOS Apps', desc: 'Custom iOS applications optimized for speed and device security.' },
      { title: 'Apple Interface Design', desc: 'Clean navigation tailored specifically for Apple device users.' },
      { title: 'Push Notifications', desc: 'Automated messaging and notification alerts for user retention.' },
      { title: 'App Store Publishing', desc: 'Complete management of the Apple App Store approval process.' }
    ],
    technologies: ['React Native', 'Flutter', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    faqs: [
      { q: 'How long does App Store submission take?', a: 'Apple review typically takes between 24 and 48 hours once submitted.' }
    ]
  },
  'cross-platform-app-development': {
    title: 'Cross Platform App Development',
    subtitle: 'We build mobile apps that run on both Android and iOS using a single shared codebase.',
    category: 'engineering',
    capabilities: [
      { title: 'Flutter App Development', desc: 'High-speed cross-platform apps built with Google Flutter.' },
      { title: 'React Native Apps', desc: 'Cross-platform mobile applications using React Native.' },
      { title: 'Shared Backend API', desc: 'Single server infrastructure powering both mobile apps.' },
      { title: 'Unified UI Experience', desc: 'Consistent layout and functionality across Android and iOS.' }
    ],
    technologies: ['Flutter', 'React Native', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    faqs: [
      { q: 'Why choose cross-platform mobile development?', a: 'Cross-platform reduces cost and time by maintaining one codebase for both platforms.' }
    ]
  },
  'game-development': {
    title: 'Game Development',
    subtitle: 'We develop casual and 2D mobile games for Android and iOS devices.',
    category: 'engineering',
    capabilities: [
      { title: 'Mobile Game Development', desc: 'Engaging mobile games with smooth touch controls and graphics.' },
      { title: '2D & Casual Games', desc: 'Puzzle, arcade, and card games designed for quick play sessions.' },
      { title: 'Game Monetization', desc: 'Integration of reward ads, in-app purchases, and store setups.' },
      { title: 'App Store Deployment', desc: 'Full publishing support for Android and iOS gaming stores.' }
    ],
    technologies: ['React Native', 'Flutter', 'Node.js', 'MongoDB', 'Redis'],
    faqs: [
      { q: 'Can you publish games on both Android and iOS?', a: 'Yes. We prepare game builds for both platforms.' }
    ]
  },
  'ai-integration': {
    title: 'AI Integration',
    subtitle: 'We integrate AI features like chatbots, OpenAI APIs, and smart search into your software.',
    category: 'intelligent',
    capabilities: [
      { title: 'AI Chatbot Development', desc: 'Customer support chatbots powered by OpenAI that answer questions using your data.' },
      { title: 'OpenAI API Integration', desc: 'Connecting GPT models to assist with content creation, summarization, and task drafting.' },
      { title: 'Smart Search', desc: 'Search tools that understand user intent and deliver accurate results.' },
      { title: 'Data Summarization', desc: 'Automated extraction of key information from customer records and documents.' }
    ],
    technologies: ['OpenAI', 'LangChain', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    faqs: [
      { q: 'Can AI be added to our existing website or software?', a: 'Yes. We integrate AI features directly via modern API connectors.' },
      { q: 'Is company data kept private?', a: 'Yes. Data used in private OpenAI API integrations is protected and not used for public model training.' }
    ]
  },
  'ai-automation': {
    title: 'AI Automation',
    subtitle: 'We build automated workflows powered by AI to eliminate repetitive tasks and save manual hours.',
    category: 'intelligent',
    capabilities: [
      { title: 'Workflow Automation', desc: 'Scripts that automate data entry, record updates, and task routing.' },
      { title: 'Email & Ticket Processing', desc: 'AI filters that categorize incoming client support requests automatically.' },
      { title: 'Document Reading', desc: 'Extracting invoice, receipt, and contract data into your software.' },
      { title: 'Process Optimization', desc: 'Connecting internal business tools to reduce manual steps.' }
    ],
    technologies: ['OpenAI', 'LangChain', 'Node.js', 'Python', 'PostgreSQL', 'Redis'],
    faqs: [
      { q: 'What tasks can AI automation handle?', a: 'Common uses include document processing, email sorting, invoice data extraction, and CRM record syncing.' }
    ]
  },
  'seo': {
    title: 'SEO Services',
    subtitle: 'We help your business rank higher on Google through Technical SEO, Local SEO, and content optimization.',
    category: 'growth',
    capabilities: [
      { title: 'Technical SEO', desc: 'Fixing site speed, mobile usability, HTML semantics, and indexing issues.' },
      { title: 'On-Page SEO', desc: 'Optimizing titles, meta tags, heading structures, and targeted business keywords.' },
      { title: 'Local SEO Company', desc: 'Optimizing local search presence and business directory listings.' },
      { title: 'SEO Audits & Strategy', desc: 'Detailed technical reporting and step-by-step keyword growth planning.' }
    ],
    technologies: ['Next.js', 'HTML5', 'Google Search Console', 'Schema.org JSON-LD', 'Google Analytics'],
    faqs: [
      { q: 'What is Technical SEO?', a: 'Technical SEO ensures Google can easily crawl, index, and render your website pages fast.' },
      { q: 'How long before SEO results appear?', a: 'Initial technical improvements take effect in 4 to 8 weeks, with steady growth over 3 to 6 months.' }
    ]
  }
};
