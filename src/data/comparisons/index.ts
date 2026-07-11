import type { ComparisonPageData } from '../types';

export const reactVsNextjs: ComparisonPageData = {
  slug: 'react-vs-nextjs',
  title: 'React vs Next.js: Strategic Framework Comparison | Algorithyum',
  description: 'Evaluate rendering models, search engine visibility, initial page load speeds, and setup differences between React and Next.js. Contact us to discuss your requirements and schedule a consultation.',
  category: 'framework',
  keywords: ['React vs Next.js', 'CSR vs SSR', 'Framework Comparison', 'Rendering Model'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'React vs Next.js: Framework Comparison',
      subtitle: 'A technical evaluation of rendering models, SEO indexing, and framework architecture to help you choose the right tool.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Library vs Framework: What Is the Difference?',
      content: 'React is a developer library for building user interfaces, whereas Next.js is a full-featured framework built on top of React. React handles the UI rendering layer only — you choose your own router, data fetching strategy, and build tooling. Next.js provides opinionated defaults for all of these, plus adds server-side rendering capabilities that React alone cannot provide.',
    },
    {
      id: 'comparison-table',
      type: 'comparison-table',
      title: 'Feature Comparison',
      columns: [
        { key: 'feature', label: 'Feature' },
        { key: 'val1', label: 'React' },
        { key: 'val2', label: 'Next.js' },
      ],
      rows: [
        { feature: 'Primary Category', val1: 'UI Component Library', val2: 'Full-Stack Web Framework' },
        { feature: 'Rendering Model', val1: 'Client-Side Rendering (CSR)', val2: 'SSR, SSG, ISR, and CSR' },
        { feature: 'SEO Crawl Visibility', val1: 'Requires optimization — index delay', val2: 'Perfect out-of-the-box' },
        { feature: 'Router Setup', val1: 'Requires library (React Router)', val2: 'Built-in file-based router' },
        { feature: 'API Server Routes', val1: 'Requires separate backend service', val2: 'Built-in Serverless routes' },
      ],
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'When to Use Each',
      items: [
        { title: 'Choose React when...', desc: 'Your app lives behind a login screen (dashboard, admin panel, SPA) where SEO is irrelevant and you want maximum architectural flexibility.' },
        { title: 'Choose Next.js when...', desc: 'Your pages need to rank in Google (marketing site, e-commerce, blog) or you want a unified frontend and backend in one framework.' },
      ],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Is Next.js superior to React?', a: 'Next.js is built on top of React. It provides additional server-side structures. Next.js is generally superior for public pages requiring search indexing, while React alone is excellent for private client dashboards.' },
        { q: 'Can I use React inside a Next.js project?', a: 'Yes — Next.js IS React. Every component you write in Next.js is a React component. Next.js simply adds the server-rendering layer, file-based routing, and build optimizations on top.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Not Sure Which to Choose?',
      desc: 'Our frontend architects can evaluate your specific use case and recommend the right rendering strategy for your project.',
      buttonLabel: 'Book a Framework Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const awsVsAzure: ComparisonPageData = {
  slug: 'aws-vs-azure',
  title: 'AWS vs Microsoft Azure: Cloud Hosting Comparison | Algorithyum',
  description: 'Compare service portfolios, Active Directory integrations, developer ecosystems, and enterprise pricing models. Contact us to discuss your requirements and schedule a consultation.',
  category: 'cloud',
  keywords: ['AWS vs Azure', 'Cloud Comparison', 'Amazon vs Microsoft Cloud', 'Cloud Platform Selection'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'AWS vs Microsoft Azure: Cloud Platform Comparison',
      subtitle: 'Compare service portfolios, Active Directory integrations, and developer ecosystems to choose the right cloud.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Two Cloud Giants, Different Strengths',
      content: 'AWS dominates public cloud market share with the broadest catalog of granular developer services. Microsoft Azure is the primary choice for enterprise organizations leveraging existing Active Directory infrastructure, SQL Server databases, and .NET development stacks. Choosing between them depends on your technology stack, compliance obligations, and organizational context.',
    },
    {
      id: 'comparison-table',
      type: 'comparison-table',
      title: 'Feature Comparison',
      columns: [
        { key: 'feature', label: 'Feature' },
        { key: 'val1', label: 'AWS' },
        { key: 'val2', label: 'Microsoft Azure' },
      ],
      rows: [
        { feature: 'Market Share', val1: 'Market Leader (~32%)', val2: 'Strong Enterprise Challenger (~23%)' },
        { feature: 'Windows Integration', val1: 'Supported via virtual instances', val2: 'Native, seamless Active Directory integration' },
        { feature: 'Kubernetes Engine', val1: 'Elastic Kubernetes Service (EKS)', val2: 'Azure Kubernetes Service (AKS)' },
        { feature: 'IAM Framework', val1: 'AWS IAM Roles and Policies', val2: 'Azure Active Directory (AAD)' },
        { feature: 'Serverless Functions', val1: 'AWS Lambda', val2: 'Azure Functions' },
      ],
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'When to Choose Each',
      items: [
        { title: 'Choose AWS when...', desc: 'You are building cloud-native applications with serverless functions, need the broadest service catalog, or require mature global CDN and edge infrastructure.' },
        { title: 'Choose Azure when...', desc: 'Your organization runs Microsoft workloads (Active Directory, SQL Server, .NET) or holds existing Microsoft Enterprise Agreements that include Azure credits.' },
      ],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Which cloud provider is cheaper?', a: 'Both providers offer comparable pricing for standard compute instances. Azure can be cost-effective for organizations with existing SQL Server licenses through Azure Hybrid Benefit. AWS can be cheaper for pure cloud-native workloads.' },
        { q: 'Can we use both AWS and Azure simultaneously?', a: 'Yes. A multi-cloud strategy distributes services across providers to eliminate vendor lock-in and leverage the best service from each platform for specific workloads.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Choose the Right Cloud Platform',
      desc: 'Our cloud architects can evaluate your workloads and recommend the optimal cloud strategy for your organization.',
      buttonLabel: 'Book a Cloud Architecture Review',
      buttonAction: 'consultation',
    },
  ],
};

export const mongodbVsPostgresql: ComparisonPageData = {
  slug: 'mongodb-vs-postgresql',
  title: 'MongoDB vs PostgreSQL: Database Selection Comparison | Algorithyum',
  description: 'Analyze document NoSQL models against relational SQL schemas, ACID transaction safeties, and data scalability. Contact us to discuss your requirements and schedule a consultation.',
  category: 'database',
  keywords: ['MongoDB vs PostgreSQL', 'NoSQL vs SQL', 'Database Comparison', 'Document vs Relational'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'MongoDB vs PostgreSQL: Database Selection Guide',
      subtitle: 'Analyze document NoSQL models against relational SQL schemas, ACID transaction safety, and horizontal scalability.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Documents vs Tables: The Core Trade-Off',
      content: 'MongoDB is a document database built on flexible JSON structures — schema-free, horizontally scalable, and optimized for read-heavy workloads with variable data shapes. PostgreSQL is an advanced relational database with strict typing, foreign key constraints, and 100% ACID transaction guarantees. The right choice depends entirely on your data model and transactional requirements.',
    },
    {
      id: 'comparison-table',
      type: 'comparison-table',
      title: 'Feature Comparison',
      columns: [
        { key: 'feature', label: 'Feature' },
        { key: 'val1', label: 'MongoDB' },
        { key: 'val2', label: 'PostgreSQL' },
      ],
      rows: [
        { feature: 'Data Model', val1: 'NoSQL JSON Document', val2: 'Relational SQL Tables' },
        { feature: 'Schema Constraint', val1: 'Polymorphic / Dynamic schema', val2: 'Rigid / Typed constraints' },
        { feature: 'ACID Compliance', val1: 'Supported (multi-document)', val2: '100% strict ACID out-of-the-box' },
        { feature: 'Horizontal Scaling', val1: 'Native sharding configuration', val2: 'Requires third-party wrappers' },
        { feature: 'JOIN Operations', val1: 'Limited — via aggregation pipelines', val2: 'First-class, highly optimized' },
      ],
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'When to Choose Each',
      items: [
        { title: 'Choose MongoDB when...', desc: 'Your records are highly polymorphic (variable fields per document), you need horizontal scaling, or your team works heavily in JavaScript object patterns.' },
        { title: 'Choose PostgreSQL when...', desc: 'Your data has strict relational integrity requirements, you need absolute ACID transaction guarantees, or you are building financial, healthcare, or compliance-sensitive systems.' },
      ],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Can we store JSON in PostgreSQL?', a: 'Yes. PostgreSQL supports a native JSONB column type that combines relational table structure with flexible document storage — and can even be indexed for fast queries.' },
        { q: 'Can MongoDB handle transactions?', a: 'Yes. MongoDB supports multi-document ACID transactions since version 4.0. However, for transaction-heavy workloads like financial ledgers, PostgreSQL remains the more performant and battle-tested choice.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Choose the Right Database',
      desc: 'Our database architects can evaluate your data model and recommend the optimal database technology for your use case.',
      buttonLabel: 'Book a Database Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const flutterVsReactNative: ComparisonPageData = {
  slug: 'flutter-vs-react-native',
  title: 'Flutter vs React Native: Mobile App Comparison | Algorithyum',
  description: 'Evaluate execution performance, widget customization, developer languages (Dart vs JavaScript), and native bridges. Contact us to discuss your requirements and schedule a consultation.',
  category: 'mobile',
  keywords: ['Flutter vs React Native', 'Mobile Framework Comparison', 'Dart vs JavaScript', 'Cross-Platform Mobile'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Flutter vs React Native: Mobile Framework Comparison',
      subtitle: 'Evaluate performance, rendering model, developer language, and platform feel for cross-platform mobile development.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Two Approaches to Cross-Platform Mobile',
      content: 'Flutter uses Dart to compile apps into machine binaries with a self-contained rendering engine that draws every pixel — ensuring consistent, high-performance interfaces on all devices. React Native uses JavaScript to bridge your business logic to native iOS and Android UI components — allowing web developers to share code patterns but accepting a performance overhead at the bridge layer.',
    },
    {
      id: 'comparison-table',
      type: 'comparison-table',
      title: 'Feature Comparison',
      columns: [
        { key: 'feature', label: 'Feature' },
        { key: 'val1', label: 'Flutter' },
        { key: 'val2', label: 'React Native' },
      ],
      rows: [
        { feature: 'Language', val1: 'Dart (compiled static)', val2: 'JavaScript (dynamic interpreted)' },
        { feature: 'Rendering Engine', val1: 'Skia / Impeller (renders pixels)', val2: 'Native UI bridge components' },
        { feature: 'Compilation', val1: 'Natively compiled machine code', val2: 'JIT JavaScript bundle' },
        { feature: 'Platform Feel', val1: 'Identical design across all viewports', val2: 'Adapts to platform native styling' },
        { feature: 'Web Dev Transition', val1: 'Requires learning Dart', val2: 'Familiar for React web developers' },
      ],
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'When to Choose Each',
      items: [
        { title: 'Choose Flutter when...', desc: 'You require pixel-perfect custom animations, a consistent visual identity across both platforms, or maximum runtime performance without JavaScript bridge overhead.' },
        { title: 'Choose React Native when...', desc: 'Your team already writes React web code, you want to share business logic and API clients between web and mobile, or you prefer platform-native navigation patterns.' },
      ],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Which is better for startup MVPs?', a: 'React Native is ideal if your team already knows JavaScript and React. Flutter is better if you want pixel-perfect custom brand layouts with consistent behavior across platforms.' },
        { q: 'Do Flutter apps look like native apps?', a: 'Flutter renders its own widgets using the Skia/Impeller engine rather than native components. This means apps look identical on iOS and Android — which is a feature for brand consistency, but means they do not automatically adopt platform UI patterns.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Choose the Right Mobile Framework',
      desc: 'Our mobile engineers can evaluate your team\'s background, design requirements, and target platforms to recommend the best framework.',
      buttonLabel: 'Book a Mobile Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const comparisonMap: Record<string, ComparisonPageData> = {
  'react-vs-nextjs': reactVsNextjs,
  'aws-vs-azure': awsVsAzure,
  'mongodb-vs-postgresql': mongodbVsPostgresql,
  'flutter-vs-react-native': flutterVsReactNative
};
