import type { ServicePageData } from '../types';

export const softwareDevelopment: ServicePageData = {
  slug: 'software-development',
  title: 'Custom Software Development Company | Algorithyum',
  description: 'We build custom software tailored to your exact business needs — custom tools, management systems, SaaS products, and APIs.',
  category: 'engineering',
  ogImage: 'https://algorithyum.in/logo.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterImage: 'https://algorithyum.in/logo.svg',
  keywords: ['Custom Software Development', 'Software Development Company', 'Business Software', 'SaaS Development'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Custom Software Development',
      subtitle: 'Custom software built around your specific business needs — from internal tools to full SaaS products.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Software Built Specifically for Your Business',
      content: 'We design and build custom software tailored to your company\'s exact requirements. Instead of using rigid off-the-shelf software that forces you to change how you work, we build software that fits your existing workflows and helps your team operate more efficiently.',
    },
    {
      id: 'capabilities',
      type: 'capabilities',
      title: 'Core Capabilities',
      items: [
        { title: 'Custom Business Software', desc: 'Software built specifically for your business workflows, order handling, and operational needs.' },
        { title: 'SaaS Product Development', desc: 'Multi-user web software built so you can offer subscription services to your clients.' },
        { title: 'Business Management Software', desc: 'Centralized tools to organize operations, staff roles, and daily company tasks.' },
        { title: 'API & Database Systems', desc: 'Secure backend architectures and APIs to connect your tools and third-party services.' },
      ],
    },
    {
      id: 'process',
      type: 'process',
      title: 'How We Work',
      steps: [
        { title: 'Understand', desc: 'We learn about your business goals, workflows, and exact software requirements.' },
        { title: 'Plan', desc: 'We outline features, tech stack, milestones, and timelines.' },
        { title: 'Design', desc: 'We create clean UI mockups so you can visualize the app before building.' },
        { title: 'Develop', desc: 'Our engineers write clean, well-tested code in regular progress sprints.' },
        { title: 'Test', desc: 'We test functionality, security, and performance before launch.' },
        { title: 'Launch & Support', desc: 'We deploy your software and provide ongoing maintenance and support.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What is custom software development?', a: 'Custom software development means building software specifically for your business workflows instead of buying off-the-shelf software.' },
        { q: 'How long does custom software development take?', a: 'Simple applications take 4 to 8 weeks, while complex systems can take 3 to 6 months.' },
        { q: 'Do you provide ongoing support after launch?', a: 'Yes. We offer maintenance, bug fixes, and feature additions after your software is live.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Ready to Build Your Custom Software?',
      desc: 'Contact us to discuss your project requirements and get a free consultation.',
      buttonLabel: 'Get Free Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const erp: ServicePageData = {
  slug: 'erp',
  title: 'ERP System Development Company | Custom ERP Software | Algorithyum',
  description: 'We build custom ERP systems including Manufacturing ERP, Inventory Management Systems, CRM Software, HRMS Software, School ERP, Hospital ERP, and POS software.',
  category: 'engineering',
  ogImage: 'https://algorithyum.in/logo.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterImage: 'https://algorithyum.in/logo.svg',
  keywords: ['ERP Development Company', 'Custom ERP Software', 'Manufacturing ERP', 'Inventory Management Software', 'CRM Development', 'HRMS Software', 'Billing Software', 'POS Software'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'ERP System Development',
      subtitle: 'Custom ERP software, inventory management, CRM, HRMS, and business management software tailored for your operations.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Centralize Your Whole Business in One System',
      content: 'We build custom ERP software that connects your inventory, sales, billing, manufacturing, HR, and customer records into one clear dashboard. Say goodbye to scattered spreadsheets and disconnected tools.',
    },
    {
      id: 'capabilities',
      type: 'capabilities',
      title: 'ERP Solutions We Build',
      items: [
        { title: 'Manufacturing & Retail ERP', desc: 'Custom ERP for production tracking, raw material management, and store operations.' },
        { title: 'Inventory & Warehouse Management', desc: 'Real-time stock tracking, barcode/QR scanning, warehouse flow, and low-stock alerts.' },
        { title: 'CRM & Billing Software', desc: 'Customer tracking, automated invoicing, payment recording, and POS hardware sync.' },
        { title: 'School, Hospital & HRMS ERP', desc: 'Specialized management portals for educational institutions, medical clinics, and HR teams.' },
      ],
    },
    {
      id: 'process',
      type: 'process',
      title: 'How We Build Custom ERPs',
      steps: [
        { title: 'Understand', desc: 'We study your business operations, inventory flows, billing rules, and staff roles.' },
        { title: 'Plan', desc: 'We map out custom ERP modules, database structure, and integration needs.' },
        { title: 'Design', desc: 'We design easy-to-use screens for your managers, store staff, and field team.' },
        { title: 'Develop', desc: 'We write secure, fast code to connect all your business operations in real-time.' },
        { title: 'Test & Launch', desc: 'We verify data accuracy, train your staff, and deploy your custom ERP smoothly.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What types of ERP software do you build?', a: 'We build Manufacturing ERP, Inventory Management Systems, CRM, HRMS, School ERP, Hospital ERP, Warehouse Management, Retail ERP, Billing & POS software.' },
        { q: 'Why choose custom ERP over ready-made software?', a: 'Custom ERP fits your exact workflows without unnecessary recurring fees or rigid processes.' },
        { q: 'Can custom ERP sync with POS or billing systems?', a: 'Yes. We build custom API connectors to sync data between your ERP, payment gateways, and POS hardware.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build a Custom ERP for Your Business',
      desc: 'Contact us to discuss your inventory, CRM, billing, or ERP software requirements.',
      buttonLabel: 'Get Free Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const softwareRedesign: ServicePageData = {
  slug: 'software-redesign',
  title: 'Software Redesign & Modernization Company | Algorithyum',
  description: 'Update legacy, slow, or outdated software to make it faster, more secure, and easier to maintain.',
  category: 'engineering',
  ogImage: 'https://algorithyum.in/logo.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterImage: 'https://algorithyum.in/logo.svg',
  keywords: ['Software Redesign', 'Software Modernization', 'Legacy System Update', 'Code Refactoring'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Software Redesign & Modernization',
      subtitle: 'We update old, slow software — making it faster, more modern, and easier to maintain.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Give Your Software a Second Life',
      content: 'If your existing software is slow, hard to update, or looks outdated, we help you refactor code, redesign UI, and migrate data to modern web frameworks.',
    },
    {
      id: 'capabilities',
      type: 'capabilities',
      title: 'Core Capabilities',
      items: [
        { title: 'Legacy System Modernization', desc: 'Rebuilding older software with modern frameworks to improve speed and security.' },
        { title: 'Code Refactoring & Cleanup', desc: 'Fixing messy codebases so your software is easy to update and scale.' },
        { title: 'UI/UX Interface Redesign', desc: 'Modernizing screen layouts and user navigation.' },
        { title: 'Database Migration', desc: 'Safely moving data from legacy databases to modern PostgreSQL or MongoDB.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'When should software be modernized?', a: 'If your system is slow, difficult to update, or lacks security, modernization restores speed and usability.' },
        { q: 'Will existing data be preserved?', a: 'Yes. We run full backups and safe migration scripts without data loss.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Modernize Your Outdated Software',
      desc: 'Contact us for an honest code review and modernization estimate.',
      buttonLabel: 'Get Free Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const webDevelopment: ServicePageData = {
  slug: 'web-development',
  title: 'Web Development Company | Website Development Services | Algorithyum',
  description: 'We build fast, modern websites and web applications designed to perform on all devices and rank on Google.',
  category: 'engineering',
  ogImage: 'https://algorithyum.in/logo.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterImage: 'https://algorithyum.in/logo.svg',
  keywords: ['Web Development Company', 'Website Development', 'Next.js Development', 'Web Applications'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Web Development Services',
      subtitle: 'Fast, modern websites and web applications that look great and work on all devices.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Websites Built for Speed and Results',
      content: 'We build high-performance websites and web applications using Next.js and React. Every website is built with clean HTML, fast page load speeds, and responsive design for smartphones and desktops.',
    },
    {
      id: 'capabilities',
      type: 'capabilities',
      title: 'Core Capabilities',
      items: [
        { title: 'Business Websites', desc: 'Professional websites that represent your brand and convert visitors into leads.' },
        { title: 'Web Applications', desc: 'Interactive web portals, user dashboards, and admin platforms.' },
        { title: 'E-commerce Platforms', desc: 'Online stores with product catalogs, shopping carts, and payment checkouts.' },
        { title: 'Performance Optimization', desc: 'Fast page load speeds and clean code optimized for Google search.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What tech stack do you use for web development?', a: 'We build primarily with Next.js, React, Node.js, and TypeScript.' },
        { q: 'Will my website work on mobile phones?', a: 'Yes. Every website we build is fully responsive across all screen sizes.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Start Your Web Development Project',
      desc: 'Contact us to discuss your new website or web application.',
      buttonLabel: 'Get Free Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const androidAppDevelopment: ServicePageData = {
  slug: 'android-app-development',
  title: 'Android App Development Company | Algorithyum',
  description: 'Native and cross-platform Android mobile app development ready for Google Play Store launch.',
  category: 'engineering',
  ogImage: 'https://algorithyum.in/logo.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterImage: 'https://algorithyum.in/logo.svg',
  keywords: ['Android App Development', 'Android App Development Company', 'Mobile Apps', 'Play Store Publishing'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Android App Development',
      subtitle: 'Native and cross-platform Android apps built for performance and published on the Google Play Store.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Android Apps Built Right',
      content: 'We build Android apps that give your users a smooth experience on any phone or tablet. We handle design, development, testing, and Google Play Store publishing.',
    },
    {
      id: 'capabilities',
      type: 'capabilities',
      title: 'Core Capabilities',
      items: [
        { title: 'Android App Development', desc: 'Apps built specifically for Android with full access to device features.' },
        { title: 'Clean Mobile UI', desc: 'Modern interfaces designed following mobile usability guidelines.' },
        { title: 'Offline Support', desc: 'Apps that cache data locally so users can work offline.' },
        { title: 'Google Play Publishing', desc: 'Full assistance submitting and launching your app on Google Play.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['React Native', 'Flutter', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Do you handle Play Store publishing?', a: 'Yes. We handle the full process of publishing your app to the Google Play Store.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build Your Android App',
      desc: 'Contact us to get started with your Android mobile application.',
      buttonLabel: 'Get Free Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const iosAppDevelopment: ServicePageData = {
  slug: 'ios-app-development',
  title: 'iOS App Development Company | Algorithyum',
  description: 'Custom iOS mobile app development for iPhone and iPad, designed for smooth App Store approval.',
  category: 'engineering',
  ogImage: 'https://algorithyum.in/logo.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterImage: 'https://algorithyum.in/logo.svg',
  keywords: ['iOS App Development', 'iOS App Development Company', 'iPhone Apps', 'App Store Publishing'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'iOS App Development',
      subtitle: 'iOS apps for iPhone and iPad — smooth, secure, and ready for the Apple App Store.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'iPhone & iPad Apps Crafted for Excellence',
      content: 'We build iOS apps that look great, run smoothly, and adhere to Apple\'s strict Human Interface Guidelines for easy App Store approval.',
    },
    {
      id: 'capabilities',
      type: 'capabilities',
      title: 'Core Capabilities',
      items: [
        { title: 'Custom iOS Apps', desc: 'Apps built for iPhone and iPad with clean code and high performance.' },
        { title: 'Apple Guidelines UI', desc: 'Interfaces that feel natural on Apple hardware.' },
        { title: 'Push Notifications', desc: 'Automated notification systems to engage app users.' },
        { title: 'App Store Submission', desc: 'Complete setup and submission for Apple App Store approval.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['React Native', 'Flutter', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How long does App Store approval take?', a: 'Apple usually reviews apps within 24 to 48 hours.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build Your iOS App',
      desc: 'Contact us to discuss your iOS mobile application requirements.',
      buttonLabel: 'Get Free Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const crossPlatformAppDevelopment: ServicePageData = {
  slug: 'cross-platform-app-development',
  title: 'Cross Platform App Development Company | Algorithyum',
  description: 'Build one mobile app that runs on both Android and iOS using Flutter or React Native to save time and budget.',
  category: 'engineering',
  ogImage: 'https://algorithyum.in/logo.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterImage: 'https://algorithyum.in/logo.svg',
  keywords: ['Cross Platform App Development', 'Flutter Apps', 'React Native Apps', 'Mobile App Development'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Cross Platform App Development',
      subtitle: 'One codebase that runs on both Android and iOS — saving you development time and money.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Build Once, Launch on Both Android & iOS',
      content: 'Using Flutter or React Native, we build high-performance mobile apps that run seamlessly on both Android and iOS devices from a single codebase.',
    },
    {
      id: 'capabilities',
      type: 'capabilities',
      title: 'Core Capabilities',
      items: [
        { title: 'Flutter App Development', desc: 'Beautiful, fast mobile apps built with Google Flutter.' },
        { title: 'React Native Apps', desc: 'Cross-platform mobile apps built with React Native.' },
        { title: 'Shared Backend API', desc: 'One backend server powering both Android and iOS apps.' },
        { title: 'Both App Stores', desc: 'Publishing to Google Play Store and Apple App Store.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['Flutter', 'React Native', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What is cross-platform app development?', a: 'Instead of writing two separate apps, we write one codebase that works on both Android and iOS.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build Your Cross-Platform Mobile App',
      desc: 'Contact us for a cost estimate and timeline for your mobile app.',
      buttonLabel: 'Get Free Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const gameDevelopment: ServicePageData = {
  slug: 'game-development',
  title: 'Game Development Company | Mobile Games | Algorithyum',
  description: 'Casual and 2D mobile game development for Android and iOS devices.',
  category: 'engineering',
  ogImage: 'https://algorithyum.in/logo.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterImage: 'https://algorithyum.in/logo.svg',
  keywords: ['Game Development Company', 'Mobile Game Development', '2D Games', 'Casual Games'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Game Development Services',
      subtitle: 'Mobile games and casual games for Android and iOS — fun, engaging, and ready for launch.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Fun Mobile Games for iOS & Android',
      content: 'We build 2D mobile games, puzzle games, arcade games, and casual games designed to entertain players and launch on app stores.',
    },
    {
      id: 'capabilities',
      type: 'capabilities',
      title: 'Core Capabilities',
      items: [
        { title: 'Mobile Game Development', desc: 'Fun mobile games for Android and iOS devices.' },
        { title: '2D & Casual Games', desc: 'Side-scrollers, card games, puzzle games, and arcade formats.' },
        { title: 'Monetization Features', desc: 'In-app purchases, reward ads, and score leaderboards.' },
        { title: 'Store Publishing', desc: 'Publishing support for Google Play Store and Apple App Store.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['React Native', 'Flutter', 'Node.js', 'MongoDB', 'Redis'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What games do you build?', a: 'We build mobile games — casual, puzzle, card, arcade, and 2D games.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build Your Mobile Game',
      desc: 'Contact us to discuss your game idea.',
      buttonLabel: 'Get Free Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const aiIntegration: ServicePageData = {
  slug: 'ai-integration',
  title: 'AI Integration Services | OpenAI Integration | Algorithyum',
  description: 'Add AI features to your software: AI Chatbot Development, OpenAI API integration, smart search, and data processing.',
  category: 'intelligent',
  ogImage: 'https://algorithyum.in/logo.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterImage: 'https://algorithyum.in/logo.svg',
  keywords: ['AI Integration Services', 'AI Chatbot Development', 'OpenAI Integration', 'LangChain'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'AI Integration Services',
      subtitle: 'We add AI features to your existing software — chatbots, smart search, content generation, and OpenAI tools.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Enhance Your Software With Artificial Intelligence',
      content: 'We integrate modern AI capabilities directly into your existing web apps or software products. Add AI chatbots, smart data lookup, or OpenAI content generation.',
    },
    {
      id: 'capabilities',
      type: 'capabilities',
      title: 'Core Capabilities',
      items: [
        { title: 'AI Chatbot Development', desc: 'Smart chatbots that answer customer questions using your business data.' },
        { title: 'OpenAI Integration', desc: 'Connecting OpenAI API models for text, summarization, and content assistance.' },
        { title: 'Smart Search', desc: 'Search features that understand intent to deliver better results.' },
        { title: 'Data Analysis AI', desc: 'AI tools to analyze customer inquiries and generate quick summaries.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['OpenAI', 'LangChain', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Is my business data safe with AI integration?', a: 'Yes. Private OpenAI API integration ensures your data is not shared publicly.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Integrate AI Into Your Software',
      desc: 'Contact us to explore AI integration options for your app.',
      buttonLabel: 'Get Free Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const aiAutomation: ServicePageData = {
  slug: 'ai-automation',
  title: 'AI Automation Services | Workflow Automation | Algorithyum',
  description: 'AI-powered workflow automation to handle repetitive business tasks, document extraction, and customer ticket sorting.',
  category: 'intelligent',
  ogImage: 'https://algorithyum.in/logo.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterImage: 'https://algorithyum.in/logo.svg',
  keywords: ['AI Automation Services', 'Workflow Automation', 'Business Process Automation', 'AI Chatbot Automation'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'AI Automation Services',
      subtitle: 'AI-powered tools that automate repetitive tasks so your team can focus on important work.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Automate Manual Repetitive Work',
      content: 'We build custom AI automation scripts that read documents, sort emails, update CRM records, and automate repetitive tasks across your software tools.',
    },
    {
      id: 'capabilities',
      type: 'capabilities',
      title: 'Core Capabilities',
      items: [
        { title: 'Workflow Automation', desc: 'Automated scripts for data entry, status updates, and notification routing.' },
        { title: 'Email & Ticket Sorting', desc: 'AI tools that read and categorize incoming customer inquiries.' },
        { title: 'Document Data Extraction', desc: 'Extracting key text from invoices, receipts, and forms.' },
        { title: 'Business Process Automation', desc: 'Connecting tools to eliminate manual administrative steps.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['OpenAI', 'LangChain', 'Node.js', 'Python', 'PostgreSQL', 'Redis'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How much time can AI automation save?', a: 'Most automated business processes save teams 10 to 30 manual hours per week.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Automate Your Workflows With AI',
      desc: 'Contact us to see how AI automation can streamline your operations.',
      buttonLabel: 'Get Free Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const seo: ServicePageData = {
  slug: 'seo',
  title: 'SEO Company | SEO Services | Technical SEO & Local SEO | Algorithyum',
  description: 'Help your website rank higher on Google with Technical SEO, On-Page SEO, Local SEO, and speed optimization.',
  category: 'growth',
  ogImage: 'https://algorithyum.in/logo.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterImage: 'https://algorithyum.in/logo.svg',
  keywords: ['SEO Company', 'SEO Services', 'Technical SEO', 'Local SEO'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'SEO Services',
      subtitle: 'We help your website rank higher on Google so more people find your business online.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Search Optimization Built on Clean Code',
      content: 'We fix technical site issues, optimize page speed, structure meta tags, and build clean HTML so search engines crawl and rank your website properly.',
    },
    {
      id: 'capabilities',
      type: 'capabilities',
      title: 'Core Capabilities',
      items: [
        { title: 'Technical SEO', desc: 'Fixing site speed, mobile-friendliness, indexing errors, and code structure.' },
        { title: 'On-Page SEO', desc: 'Optimizing titles, headings, content, and targeted keywords.' },
        { title: 'Local SEO Company', desc: 'Improving Google Maps visibility and local search presence.' },
        { title: 'SEO Audits & Strategy', desc: 'Analyzing current rankings and creating a step-by-step optimization plan.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['Next.js', 'HTML5', 'Google Search Console', 'Schema.org JSON-LD', 'Google Analytics'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What is Technical SEO?', a: 'Technical SEO makes your website fast, mobile-friendly, and easy for Google to crawl.' },
        { q: 'How soon do SEO results show?', a: 'Improvements typically begin showing in 4 to 8 weeks.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Improve Your Google Rankings',
      desc: 'Contact us for a free SEO audit and recommendation.',
      buttonLabel: 'Get Free Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const serviceMap: Record<string, ServicePageData> = {
  'software-development': softwareDevelopment,
  'erp': erp,
  'software-redesign': softwareRedesign,
  'web-development': webDevelopment,
  'android-app-development': androidAppDevelopment,
  'ios-app-development': iosAppDevelopment,
  'cross-platform-app-development': crossPlatformAppDevelopment,
  'game-development': gameDevelopment,
  'ai-integration': aiIntegration,
  'ai-automation': aiAutomation,
  'seo': seo,
};
