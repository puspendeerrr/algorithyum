import type { ServicePageData } from '../types';

export const softwareDevelopment: ServicePageData = {
  slug: 'software-development',
  title: 'Custom Software Engineering & Enterprise Applications | Algorithyum',
  description: 'Construct bespoke database frameworks, ERP systems, and cloud platforms engineered for stability and growth. Contact us to discuss your requirements and schedule a consultation.',
  category: 'engineering',
  ogImage: 'https://algorithyum.in/src/assets/logo.svg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterImage: 'https://algorithyum.in/src/assets/logo.svg',
  keywords: ['Custom Software', 'Enterprise Software', 'SaaS Platforms', 'ERP CRM Development'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Custom Software Engineering & Enterprise Applications',
      subtitle: 'Construct bespoke database frameworks, ERP systems, and cloud platforms engineered for stability and growth.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'What We Build',
      content: 'We design and engineer bespoke software systems tailored to your operational needs. From multi-tenant SaaS platforms to enterprise ERP portals, our architectures prioritize performance, scalability, and long-term maintainability. Every system is built with clean API boundaries, strict type safety, and cloud-native deployment pipelines.',
    },
    {
      id: 'capabilities',
      type: 'capabilities',
      title: 'Core Capabilities',
      items: [
        { title: 'Custom Software Systems', desc: 'Bespoke backend and frontend architectures tailored to solve business bottlenecks.' },
        { title: 'Enterprise Software', desc: 'High-availability CRM registries, inventory directories, and transactional billing portals.' },
        { title: 'SaaS Platforms', desc: 'Secure, multi-tenant software models with isolated storage spaces and API token routes.' },
        { title: 'CRM & ERP Development', desc: 'Connecting client files, operational schedules, and corporate databases under uniform dashboards.' },
      ],
    },
    {
      id: 'business-problems',
      type: 'business-problems',
      title: 'Problems We Solve',
      items: [
        'Legacy systems slowing down operations with manual data entry and brittle integrations.',
        'Off-the-shelf software that cannot accommodate unique business workflows.',
        'Disconnected tools causing data silos and inconsistent reporting.',
        'Scaling bottlenecks as team size and data volumes grow.',
      ],
    },
    {
      id: 'process',
      type: 'process',
      title: 'Our Engineering Process',
      steps: [
        { title: 'Discovery & Scoping', desc: 'We run structured discovery sprints to map your workflows, define database schemas, and agree on realistic milestones before writing a line of code.' },
        { title: 'Architecture Design', desc: 'Our architects produce system diagrams, API contracts, and data models reviewed with your team before development begins.' },
        { title: 'Iterative Development', desc: 'We develop in structured sprints, shipping functional increments every 2 weeks so you can validate direction continuously.' },
        { title: 'QA & Security Review', desc: 'Automated test suites, code review gates, and security scanning run on every pull request.' },
        { title: 'Deployment & Handover', desc: 'CI/CD pipelines, infrastructure-as-code, and full technical documentation are delivered with the final codebase.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['React', 'Node.js', 'Go', '.NET', 'PostgreSQL', 'TypeScript'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What is custom software development?', a: 'Custom software development involves building tailormade systems designed to meet your specific operational needs and integrate cleanly with your existing database structures.' },
        { q: 'Do you help modernize legacy codebases?', a: 'Yes. We run legacy audits, refactor monolithic code into decoupled microservices, and migrate databases to modern structures without disrupting current operations.' },
        { q: 'What frameworks do you use for mobile applications?', a: 'We construct cross-platform applications using Flutter and React Native to minimize development costs, while maintaining native Swift and Kotlin support for specialized hardware integrations.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Ready to Build Your System?',
      desc: 'Arrange a technical discovery session with our engineering leads. We will scope your requirements and provide a realistic delivery estimate.',
      buttonLabel: 'Book a Discovery Session',
      buttonAction: 'consultation',
    },
  ],
};
