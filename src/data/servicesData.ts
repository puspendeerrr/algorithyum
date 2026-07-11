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
  category: 'engineering' | 'intelligent' | 'growth' | 'infrastructure' | 'design' | 'consulting';
  capabilities: Capability[];
  technologies: string[];
  faqs: FAQ[];
}

export const serviceMap: Record<string, ServicePageData> = {
  'software-development': {
    title: 'Software Development',
    subtitle: 'Construct bespoke database frameworks, ERP systems, and cloud platforms engineered for stability and growth.',
    category: 'engineering',
    capabilities: [
      { title: 'Custom Software Systems', desc: 'Bespoke backend and frontend architectures tailored to solve business bottlenecks.' },
      { title: 'Enterprise Software', desc: 'High-availability CRM registries, inventory directories, and transactional billing portals.' },
      { title: 'SaaS Platforms', desc: 'Secure, multi-tenant software models with isolated storage spaces and API token routes.' },
      { title: 'CRM & ERP Development', desc: 'Connecting client files, operational schedules, and corporate databases under uniform dashboards.' }
    ],
    technologies: ['React', 'Node.js', 'Go', '.NET', 'PostgreSQL', 'TypeScript'],
    faqs: [
      { q: 'What is custom software development?', a: 'Custom software development involves building tailormade systems designed to meet your specific operational needs and integrate cleanly with your existing database structures.' },
      { q: 'Do you help modernize legacy codebases?', a: 'Yes. We run legacy audits, refactor monolithic code into decoupled microservices, and migrate databases to modern structures without disrupting current operations.' },
      { q: 'What frameworks do you use for mobile applications?', a: 'We construct cross-platform applications using Flutter and React Native to minimize development costs, while maintaining native Swift and Kotlin support for specialized hardware integrations.' }
    ]
  },
  'ai': {
    title: 'Artificial Intelligence',
    subtitle: 'Deploy generative AI pipelines and autonomous cognitive workflow agents built on proven mathematical models.',
    category: 'intelligent',
    capabilities: [
      { title: 'Generative AI Tools', desc: 'Configuring private large language models locked to local corporate files.' },
      { title: 'AI Workflow Agents', desc: 'Autonomous program threads that run database queries, select APIs, and route updates.' },
      { title: 'Machine Learning Pipelines', desc: 'Training classification and regression scripts on cleaned historical data.' },
      { title: 'Natural Language Processing (NLP)', desc: 'Developing automated sentiment analyzers and script text categorization tools.' }
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'OpenAI APIs', 'Vector Databases'],
    faqs: [
      { q: 'What are AI Agents?', a: 'AI Agents are autonomous software nodes capable of processing inputs, referencing databases, selecting tools, and triggering downstream APIs to complete business tasks without manual intervention.' },
      { q: 'How do you prevent model hallucinations?', a: 'We restrict the model\'s environment using strict Retrieval-Augmented Generation (RAG) models, feeding the LLM only validated documents and using custom guards to audit outputs.' },
      { q: 'Do you support model fine-tuning?', a: 'Yes. When pre-trained models are insufficient, we configure fine-tuning pipelines on secure, isolated clusters using your proprietary dataset.' }
    ]
  },
  'seo': {
    title: 'SEO Services',
    subtitle: 'Build sustainable visibility and capture high-intent organic visitors using robust search engineering structures.',
    category: 'growth',
    capabilities: [
      { title: 'Technical SEO Audits', desc: 'Code optimization, speed tune-ups, responsive tag configs, and crawler routing schemas.' },
      { title: 'Enterprise Search Scaling', desc: 'Mapping search patterns for global catalogs housing thousands of product directories.' },
      { title: 'Programmatic SEO Grids', desc: 'Creating script-driven template pages that safely index highly specific search terms.' },
      { title: 'Local Search Visibility', desc: 'Aligning maps metadata, business listings, and region-specific index nodes.' }
    ],
    technologies: ['HTML5 Semantics', 'Next.js', 'Google Search Console', 'Schema.org JSON-LD', 'PageSpeed Insights', 'Google Analytics'],
    faqs: [
      { q: 'What is Technical SEO?', a: 'Technical SEO focuses on server-side configurations, page load speeds, semantic HTML structures, and responsive layouts to help search spiders crawl and index your pages efficiently.' },
      { q: 'How do you scale SEO for large websites?', a: 'We implement programmatic frameworks that dynamically build semantic, SEO-optimized page nodes, utilizing structured JSON-LD schemas to communicate entity connections to search crawlers.' },
      { q: 'Do you support conversion rate optimization (CRO)?', a: 'Yes. Attracting organic traffic is only half the process. We evaluate user scroll depths, click heatmaps, and form funnel completions to optimize layouts, components, and calls to action.' }
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Optimize search presence and organic conversion pathways using crawlable site blueprints.',
    category: 'growth',
    capabilities: [
      { title: 'PPC Campaign Optimization', desc: 'Structuring pay-per-click accounts (Google Ads, Meta Ads) to target qualified leads and lower customer acquisition costs.' },
      { title: 'Technical & Local Search', desc: 'Optimizing site index speed, localized directories, maps visibility, and corporate schema alignments.' },
      { title: 'Content & Email Strategy', desc: 'Writing technical, value-focused product guides and constructing automated newsletter pipelines that retain clients.' },
      { title: 'Conversion Rate Optimization (CRO)', desc: 'Auditing page funnels, running interface tests, and adjusting form designs to convert visitors into business leads.' }
    ],
    technologies: ['Google Ads Coordinate', 'Meta Ads Manager', 'Google Tag Manager', 'Hotjar user telemetry', 'A/B Testing engines', 'Mailchimp automation'],
    faqs: [
      { q: 'What is performance marketing?', a: 'Performance marketing focuses on digital campaigns where budgets are optimized directly against measurable actions, such as form submissions, product sign-ups, or demo downloads.' },
      { q: 'How do you coordinate performance PPC ad accounts?', a: 'We structure campaigns based on search-intent indexing, tracking landing page conversion rates and adjusting bids dynamically to prioritize search queries that yield real sales leads.' },
      { q: 'Do you focus on conversion rate optimization (CRO)?', a: 'Yes. We run usability diagnostics and button configuration checks to eliminate customer friction points, optimizing forms to maximize registration rates.' }
    ]
  },
  'cloud': {
    title: 'Cloud Computing',
    subtitle: 'Design, optimize, and migrate to scalable, redundant cloud environments with guaranteed system security.',
    category: 'infrastructure',
    capabilities: [
      { title: 'Multi-Cloud Architecture', desc: 'Designing hybrid AWS, Azure, and Google Cloud environments that support global scale and automatic failover.' },
      { title: 'Cloud Infrastructure Audits', desc: 'Auditing existing virtual environments to locate security weaknesses, eliminate duplicate costs, and optimize bandwidth.' },
      { title: 'Cloud Migration', desc: 'Safe transfer of databases, servers, and applications from on-premise hardware to secure container systems.' },
      { title: 'Serverless Configurations', desc: 'Deploying serverless compute scripts that scale up dynamically during traffic surges and drop costs to zero when idle.' }
    ],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Terraform', 'Serverless Framework', 'Prometheus', 'Grafana'],
    faqs: [
      { q: 'What is a multi-cloud strategy?', a: 'Multi-cloud computing distributes services across AWS, Azure, or GCP to prevent vendor lock-in, optimize regional latency, and ensure near-zero downtime in the event of provider outages.' },
      { q: 'How do you minimize cloud migration downtime?', a: 'We establish staging instances, synchronizing database transactions in real-time, and run gradual DNS transfers to switch traffic safely without service interruptions.' },
      { q: 'Do you support serverless hosting setups?', a: 'Yes. We configure serverless functions (like AWS Lambda) to handle transactional endpoints, dramatically reducing infrastructure costs for irregular traffic loads.' }
    ]
  },
  'cybersecurity': {
    title: 'Cybersecurity',
    subtitle: 'Secure digital assets, protect codebases, and maintain strict data privacy compliance.',
    category: 'infrastructure',
    capabilities: [
      { title: 'Penetration Testing', desc: 'Simulating active network attacks to locate security exploits, system vulnerabilities, and access control issues.' },
      { title: 'Security Audits', desc: 'Detailed analysis of code bases, employee access rules, server setups, and network firewalls.' },
      { title: 'Vulnerability Assessment', desc: 'Running continuous scanner suites to catch new security leaks, library version exploits, and package vulnerabilities.' },
      { title: 'Compliance Counseling', desc: 'Aligning enterprise network setups and data processes with strict GDPR, SOC2, HIPAA, and ISO certifications.' }
    ],
    technologies: ['OWASP Top 10 Standards', 'Kali Linux diagnostic tools', 'Zero-Trust Access tools', 'SOC2 Compliance audits', 'Static Code Analysis tools'],
    faqs: [
      { q: 'What is a vulnerability assessment?', a: 'A vulnerability assessment uses automated scans and code analyzers to catalog security gaps, software version exploits, and network configuration errors in your ecosystem.' },
      { q: 'Do you help align with SOC2 compliance?', a: 'Yes. We audit your access logs, configure data encryption policies, set up network rules, and prepare the engineering documentation required to pass formal SOC2 audits.' },
      { q: 'How often should an enterprise run penetration testing?', a: 'We recommend scheduling penetration tests annually, or immediately after launching major software updates, to intercept new security vulnerabilities.' }
    ]
  },
  'devops': {
    title: 'DevOps',
    subtitle: 'Accelerate your software release cycles safely using GitOps container automation and IaC frameworks.',
    category: 'infrastructure',
    capabilities: [
      { title: 'CI/CD Pipeline Automation', desc: 'Configuring Git workflows that automatically run tests, build Docker containers, and deploy to staging or production.' },
      { title: 'Container Orchestration', desc: 'Deploying Kubernetes clusters to coordinate containers, scale pods automatically, and balance server traffic.' },
      { title: 'Infrastructure as Code (IaC)', desc: 'Writing Terraform scripts to define and provision database networks and server instances programmatically.' },
      { title: 'Continuous System Monitoring', desc: 'Setting up automated system checks, error trackers, and load alerts that warn technicians before servers crash.' }
    ],
    technologies: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'GitLab CI', 'Prometheus & Grafana', 'Helm charts'],
    faqs: [
      { q: 'What is GitOps CI/CD?', a: 'GitOps CI/CD automates software deployments by using Git repositories as the single source of truth for infrastructure configurations, triggering builds and testing routines on code commits.' },
      { q: 'How does Kubernetes assist operational scaling?', a: 'Kubernetes monitors application traffic and resource consumption, scaling pod instances up or down to ensure stable performance during traffic spikes while reducing costs during idle periods.' },
      { q: 'What is Infrastructure as Code (IaC)?', a: 'Infrastructure as Code lets engineers define cloud resources (databases, servers, network routes) using readable configurations (like Terraform) to deploy identical environments reliably.' }
    ]
  },
  'data-engineering': {
    title: 'Data Engineering',
    subtitle: 'Aggregate, clean, and structure raw business datasets into secure warehouse pipelines.',
    category: 'engineering',
    capabilities: [
      { title: 'ETL Pipeline Design', desc: 'Automating scripts that extract, clean, and load large dataset batches.' },
      { title: 'Data Warehousing', desc: 'Constructing optimized schema directories on Snowflake or Redshift.' },
      { title: 'Big Data Processing', desc: 'Deploying stream processing tools like Apache Spark to analyze high-frequency traffic.' },
      { title: 'Business Intelligence', desc: 'Exposing pipeline directories to visualization dashboards like PowerBI.' }
    ],
    technologies: ['Python', 'PostgreSQL', 'Snowflake', 'Apache Spark', 'Airflow', 'Kafka'],
    faqs: [
      { q: 'What is data engineering?', a: 'Data engineering is the practice of designing and building systems that aggregate, clean, and organize raw transactional data so that business intelligence systems can run queries.' },
      { q: 'Do you configure data pipelines in real-time?', a: 'Yes. We configure telemetry pipelines using Kafka and Apache Spark to capture and route transactions as they occur.' },
      { q: 'Which data warehouses do you support?', a: 'We build schemas and coordinate transfers for Snowflake, Amazon Redshift, and Google BigQuery based on your cloud framework.' }
    ]
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    subtitle: 'Build responsive, secure cross-platform and native mobile applications.',
    category: 'engineering',
    capabilities: [
      { title: 'Cross-Platform Applications', desc: 'Deploying Flutter and React Native setups to sync layouts across platforms.' },
      { title: 'Native iOS & Android', desc: 'Writing Swift and Kotlin configurations for specialized mobile hardware.' },
      { title: 'Offline-First Telemetry', desc: 'Setting up SQLite databases inside clients to process inputs offline.' },
      { title: 'Biometric Identifications', desc: 'Integrating face and touch validation scripts to secure data assets.' }
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'SQLite', 'Firebase'],
    faqs: [
      { q: 'Do you write native mobile applications?', a: 'Yes. We program native applications in Swift and Kotlin when access to complex device hardware or low-level threading is required.' },
      { q: 'What is your cross-platform strategy?', a: 'We build hybrid mobile apps in Flutter or React Native, utilizing a single code base to reduce development timelines while ensuring responsive interface animations.' },
      { q: 'Can mobile apps store data offline?', a: 'Yes. We configure secure SQLite data layers that cache inputs locally, syncing records to cloud backends once network connections are restored.' }
    ]
  },
  'web-development': {
    title: 'Web Development',
    subtitle: 'Deploy high-performance frontend designs and secure server integrations.',
    category: 'engineering',
    capabilities: [
      { title: 'Next.js & React Apps', desc: 'Building responsive web pages, admin screens, and client dashboard panels.' },
      { title: 'Secure API Backends', desc: 'Writing robust backend controllers in Node.js, Go, or Python.' },
      { title: 'Performance Engineering', desc: 'Optimizing web vitals, image loading, and caching patterns to ensure fast indexing.' },
      { title: 'Corporate Sync Portals', desc: 'Creating directory pages and client portal databases.' }
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'Vite', 'PostgreSQL'],
    faqs: [
      { q: 'Do you specialize in React or Next.js?', a: 'We configure both. We use Next.js for portal setups that benefit from server-side rendering, and React with Vite for fast client dashboards.' },
      { q: 'How do you optimize web load speeds?', a: 'We enforce modular script splitting, image resizing, and cache routing to minimize load assets, maintaining fast Core Web Vitals.' },
      { q: 'Are your web portals responsive?', a: 'Yes. All layouts are designed using responsive styling grids to ensure usability across mobile, tablet, and widescreen layouts.' }
    ]
  },
  'ui-ux': {
    title: 'UI/UX Design',
    subtitle: 'Design clean user interfaces and interactive prototypes using system components.',
    category: 'design',
    capabilities: [
      { title: 'User Journey Mapping', desc: 'Researching page click flows and identifying layout bottlenecks.' },
      { title: 'Wireframe Blueprints', desc: 'Drafting structural page grids in Figma before coding.' },
      { title: 'Figma Design Systems', desc: 'Organizing standardized color values, buttons, inputs, and layouts.' },
      { title: 'Responsive Prototypes', desc: 'Providing interactive mockups to test layout usability.' }
    ],
    technologies: ['Figma', 'Interactive Prototyping tools', 'Responsive CSS Grids', 'Design Spec Guidelines'],
    faqs: [
      { q: 'Why is a design system important?', a: 'A global Figma design system establishes unified buttons, colors, and layout metrics, ensuring visual consistency while accelerating development.' },
      { q: 'Do you run usability testing?', a: 'Yes. We draft interactive journey prototypes to test user navigation and form completions before coding begins.' },
      { q: 'Can you work with our existing brand guidelines?', a: 'Yes. We ingest your color assets and branding symbols to build custom, compliant interface components.' }
    ]
  },
  'it-consulting': {
    title: 'IT Strategy Consulting',
    subtitle: 'Align your technology investments with your commercial goals. We counsel leadership through digital transformation.',
    category: 'consulting',
    capabilities: [
      { title: 'Digital Transformation', desc: 'Analyzing legacy processes, scoping modern software replacements, and mapping structural change guides.' },
      { title: 'Fractional CTO Advisory', desc: 'Providing executive engineering leadership on tap to structure team roles, review designs, and audit vendors.' },
      { title: 'Product Architecture Discovery', desc: 'Conducting discovery sprints, mapping scopes, drafting database schemas, and calculating realistic milestones.' },
      { title: 'Startup Consulting', desc: 'Advising founders on database scaling, cloud cost minimizations, and technical MVP scope boundaries.' }
    ],
    technologies: ['Enterprise Architecture Mapping', 'Discovery Sprints', 'Framer / Figma wireframing', 'Agile scrum setups', 'Compliance roadmapping'],
    faqs: [
      { q: 'What is digital transformation consulting?', a: 'Digital transformation consulting evaluates a company\'s manual or legacy procedures and outlines how to deploy modern cloud software to increase efficiency and data accuracy.' },
      { q: 'What is CTO as a Service?', a: 'CTO as a Service provides fractional access to a senior technology leader to guide system choices, interview developers, and represent technical needs in executive meetings.' },
      { q: 'Do you work with early-stage startups?', a: 'Yes. We guide startup founders through MVP definitions, database selections, and cost-effective cloud setups to launch digital products rapidly.' }
    ]
  },
  'automation': {
    title: 'Automation',
    subtitle: 'Eliminate manual bottlenecks. We develop automated scripts, robotic bots, and database triggers.',
    category: 'intelligent',
    capabilities: [
      { title: 'Workflow Automation', desc: 'Building custom scripts that connect distinct APIs, transfer data, and trigger notifications on specific actions.' },
      { title: 'CRM & ERP Synchronization', desc: 'Automating calculations and syncing record updates between client registries, accounting ledgers, and CRM directories.' },
      { title: 'Robotic Process Automation', desc: 'Creating RPA bots that automate repetitive, legacy manual operations that lack native API interfaces.' },
      { title: 'AI-Driven Automatons', desc: 'Combining LLM classification nodes with automated workflows to categorize, summarize, and route user tickets.' }
    ],
    technologies: ['Python scripts', 'Node.js actions', 'Zapier developer APIs', 'Make enterprise integrations', 'RPA engines', 'OpenAI APIs'],
    faqs: [
      { q: 'What is Business Process Automation?', a: 'Business Process Automation uses software scripts to automate repetitive operational tasks, such as importing data, generating status sheets, or updating user records, without human error.' },
      { q: 'How do you integrate AI into workflow automation?', a: 'We embed AI classification nodes in your pipelines, allowing automated scripts to evaluate email text, classify incoming inquiries, and route them to corresponding departments.' },
      { q: 'Can you automate legacy systems?', a: 'Yes. We build Robotic Process Automation (RPA) bots that interact with user interfaces to transfer data safely.' }
    ]
  },
  'branding': {
    title: 'Branding',
    subtitle: 'Shape professional brand identities, corporate logos, and graphic layouts.',
    category: 'design',
    capabilities: [
      { title: 'Brand Guidelines', desc: 'Establishing corporate color assets, font scales, and spacing standards.' },
      { title: 'Logo Vector Layouts', desc: 'Designing responsive vector logos that scale cleanly across print and browser headers.' },
      { title: 'Product Interface Styling', desc: 'Coordinating visual brand guidelines with software design systems.' },
      { title: 'Visual Graphic layouts', desc: 'Constructing clean vectors, diagrams, and operational charts.' }
    ],
    technologies: ['Figma style guides', 'SVG vector templates', 'Typography scales', 'Corporate brand guidelines'],
    faqs: [
      { q: 'What is included in brand guidelines?', a: 'Brand guidelines define your typography systems, color assets, spacing parameters, and logo configurations to maintain visual consistency across all media.' },
      { q: 'Do you deliver vector SVG files?', a: 'Yes. All logo designs, charts, and icons are delivered in vector SVG format to ensure they scale crisply on high-resolution displays.' },
      { q: 'How do you align branding with software interface designs?', a: 'We translate your brand guidelines into usable design variables (CSS variables and Figma components) to style your application menus and layouts.' }
    ]
  }
};
