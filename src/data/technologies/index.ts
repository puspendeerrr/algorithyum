import type { TechnologyPageData } from '../types';

export const react: TechnologyPageData = {
  slug: 'react',
  name: 'React',
  title: 'React Development & High-Performance UI | Algorithyum',
  description: 'Build fast, interactive user interfaces using reusable component architectures and standard rendering states. Contact us to discuss your requirements and schedule a consultation.',
  category: 'frontend',
  keywords: ['React', 'React UI', 'Component Architecture', 'SPA'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'React Development & High-Performance UI',
      subtitle: 'High-performance interactive interface components built with the React ecosystem.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Why We Build With React',
      content: 'React is a declarative, component-based library used to build responsive browser user interfaces. We design complex corporate dashboard grids and customer-facing portals leveraging React\'s component model, state management ecosystem, and rendering optimizations. Our React codebases are written in TypeScript with strict lint rules and comprehensive test coverage. React\'s virtual DOM diffing algorithm minimizes costly DOM operations, keeping interfaces fast even with thousands of frequently updated data cells. We pair every React project with a design token system in Figma, ensuring the component library stays in sync across design and engineering. If you need a scalable, maintainable UI platform that your entire team can contribute to, React is our default recommendation for interactive browser applications.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'Enterprise Dashboards', desc: 'Interactive data panels with real-time chart updates and complex table filtering.' },
        { title: 'Customer Portals', desc: 'Dynamic search templates, form funnels, and self-service account management interfaces.' },
        { title: 'Single Page Applications', desc: 'SPAs requiring rapid user interface updates without full page reloads.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'React Ecosystem We Use',
      technologies: ['React 18', 'TypeScript', 'Redux Toolkit', 'React Query', 'Vite', 'Vitest', 'React Router'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Why do you recommend React?', a: 'React enables our teams to build standardized interface libraries in Figma and translate them into reusable UI elements, keeping code consistent and load speeds fast.' },
        { q: 'Is React SEO friendly?', a: 'Yes. While client-rendered React can face search indexing delays, we optimize crawler visibility using server-side configurations or Next.js frameworks.' },
        { q: 'How do you manage state in large React applications?', a: 'We use React Query for remote server state and Redux Toolkit or Zustand for complex local UI state — choosing the lightest tool that matches the project\'s data requirements.' },
        { q: 'What testing framework do you use for React?', a: 'We write unit and integration tests with Vitest and React Testing Library, ensuring component behavior is verified before every deployment.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build Your React Interface',
      desc: 'Talk to our frontend engineers about architecting a scalable, high-performance React application. Contact us to discuss your project requirements.',
      buttonLabel: 'Start a React Project',
      buttonAction: 'consultation',
    },
  ],
};

export const nextjs: TechnologyPageData = {
  slug: 'nextjs',
  name: 'Next.js',
  title: 'Next.js Server-Side React Engineering | Algorithyum',
  description: 'Deploy lightning-fast portal architectures using server-side rendering, static site generation, and optimized routes. Contact us to discuss your requirements and schedule a consultation.',
  category: 'frontend',
  keywords: ['Next.js', 'SSR', 'Static Site Generation', 'ISR'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Next.js Server-Side React Engineering',
      subtitle: 'Deploy lightning-fast portal architectures using server-rendered React with optimized SEO and Core Web Vitals.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'React That Search Engines Can Actually Read',
      content: 'Next.js is a powerful React framework that integrates server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR) to optimize performance, Core Web Vitals, and search crawl visibility. We use Next.js as our primary framework for marketing sites, e-commerce platforms, and any React application where search indexing matters. The App Router introduced in Next.js 13 enables granular control over which components render on the server versus the client, dramatically reducing JavaScript bundle sizes sent to the browser. We configure ISR revalidation intervals per route, ensuring high-traffic catalog pages always serve from a CDN edge cache while freshness windows stay appropriate for your content update cadence. Every Next.js project we deliver includes Core Web Vitals monitoring, structured JSON-LD data, and a sitemap generation pipeline from day one.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'E-commerce Catalogs', desc: 'Product catalog pages with ISR ensuring fast loads and fresh content at scale.' },
        { title: 'Corporate Marketing Sites', desc: 'Websites demanding perfect Lighthouse SEO scores and rapid initial page loads.' },
        { title: 'Dynamic Dashboard Clients', desc: 'Dashboard clients with SSR for authenticated views and client-side interactivity.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Next.js Stack We Use',
      technologies: ['Next.js 14', 'TypeScript', 'App Router', 'Server Components', 'Vercel', 'Edge Middleware'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What is the main advantage of Next.js over vanilla React?', a: 'Next.js automatically generates HTML on the server. This ensures that search engine crawlers receive fully structured content instantly, rather than waiting for client-side JavaScript to execute.' },
        { q: 'When should I use SSG versus SSR in Next.js?', a: 'Use SSG for pages with content that changes infrequently (blogs, marketing pages) — it produces static HTML at build time for the fastest possible delivery. Use SSR for pages that must display personalized or real-time data on every request.' },
        { q: 'Can Next.js serve as a full-stack backend?', a: 'Yes. Next.js API routes and Server Actions allow you to write backend logic alongside frontend code, making it a practical full-stack solution for many projects without a separate server.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build a Faster Web Platform',
      desc: 'Let our Next.js engineers evaluate your current architecture and recommend the right rendering strategy for your use case.',
      buttonLabel: 'Book Next.js Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const nodejs: TechnologyPageData = {
  slug: 'nodejs',
  name: 'Node.js',
  title: 'Node.js Backend & API Development Services | Algorithyum',
  description: 'Scale transactional database pipelines and real-time backend controllers using event-driven Javascript runtimes. Contact us to discuss your requirements and schedule a consultation.',
  category: 'backend',
  keywords: ['Node.js', 'API Backend', 'Express', 'NestJS'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Node.js Backend & API Development',
      subtitle: 'Scale transactional database pipelines and real-time API servers using Node.js event-driven architecture.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Event-Driven Backends That Scale',
      content: 'Node.js is an open-source, cross-platform JavaScript runtime designed for scaling data-intensive, event-driven network applications. We write fast Express and NestJS backends on Node.js — with full TypeScript typing, structured error handling, OpenAPI documentation, and comprehensive integration test suites. Node\'s non-blocking I/O model means that a single server thread can efficiently handle thousands of concurrent connections without spawning a new thread per request, keeping memory consumption predictable under load. We use NestJS for larger enterprise APIs that benefit from its dependency injection container and modular architecture, and lightweight Express for microservices where minimal overhead is the priority. Every API we ship includes rate-limiting middleware, structured JSON logging, and health-check endpoints for container orchestration readiness probes.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'Real-Time Services', desc: 'Messaging microservices and WebSocket notification loops requiring low-latency connections.' },
        { title: 'REST & GraphQL APIs', desc: 'Backend gateway controllers with authentication, rate-limiting, and structured logging.' },
        { title: 'Data Processing Utilities', desc: 'File processing utilities, scheduled data jobs, and dashboard database APIs.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Node.js Stack We Use',
      technologies: ['Node.js', 'TypeScript', 'Express', 'NestJS', 'Prisma', 'PostgreSQL', 'Jest'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How does Node.js handle high request volumes?', a: 'Node.js utilizes a single-threaded event loop that handles connections asynchronously, preventing the server from blocking resources for active user database reads.' },
        { q: 'Do you use Express or NestJS?', a: 'We select based on project complexity. Express is our choice for lightweight microservices with minimal boilerplate. NestJS is preferred for large enterprise APIs requiring structured dependency injection and modular domain separation.' },
        { q: 'Can Node.js handle CPU-intensive work?', a: 'Node.js is optimized for I/O-bound tasks. For CPU-heavy processing (image transforms, ML inference), we offload work to dedicated worker threads or separate Python/Go services and communicate via message queues.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build Your API Backend',
      desc: 'Discuss your backend requirements with our Node.js engineers and get a technical proposal within the week.',
      buttonLabel: 'Book Backend Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const typescript: TechnologyPageData = {
  slug: 'typescript',
  name: 'TypeScript',
  title: 'Strict-Type TypeScript Codebase Optimizations | Algorithyum',
  description: 'Protect database entries and eliminate runtime software exceptions using compile-time static type checkers. Contact us to discuss your requirements and schedule a consultation.',
  category: 'language',
  keywords: ['TypeScript', 'Static Types', 'Type Safety', 'Compile-time Checks'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'TypeScript — Strict-Type Codebase Engineering',
      subtitle: 'Eliminate runtime software exceptions and protect data contracts using compile-time static type checking.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Every Codebase We Write is TypeScript',
      content: 'TypeScript is a strongly typed programming language that builds on JavaScript. We write 100% of our frontend and backend codebases in TypeScript — not as a preference, but as a non-negotiable engineering standard. Strict typing catches parameter mismatches, API contract violations, and null reference errors at build time, before they reach your users. TypeScript\'s type inference system also serves as living documentation: when you hover over a function in your IDE, you immediately see its expected inputs and outputs, eliminating the need to read source code or maintain separate API documentation for internal libraries. We enforce the strictest TypeScript compiler settings on every project — no implicit any, no unchecked nulls — and use Zod for runtime validation of external API payloads to bridge the gap between compile-time and runtime safety.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Where TypeScript Has the Most Impact',
      items: [
        { title: 'Multi-Developer Codebases', desc: 'Type contracts prevent integration errors when multiple engineers work on shared APIs.' },
        { title: 'Financial Calculations', desc: 'Strict variable types prevent silent data coercion errors in billing and accounting logic.' },
        { title: 'Design System Components', desc: 'Component prop types enforce correct usage and eliminate rendering errors.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'TypeScript Tooling We Use',
      technologies: ['TypeScript 5+', 'ESLint', 'Prettier', 'tsc --strict', 'Zod Runtime Validation', 'ts-node'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What are the main advantages of TypeScript?', a: 'TypeScript prevents common developer spelling mistakes and parameter errors from reaching production servers, reducing system exceptions and making code easier to refactor safely.' },
        { q: 'How difficult is it to migrate a JavaScript codebase to TypeScript?', a: 'We perform phased migrations — enabling TypeScript incrementally file by file with an allow-js option, adding types gradually so the codebase remains functional throughout the process. Most projects complete a full migration in two to four weeks.' },
        { q: 'Does TypeScript add overhead to production builds?', a: 'No. TypeScript is stripped entirely during compilation. The production JavaScript bundle is identical in size and performance to a JavaScript-only codebase.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Migrate to TypeScript',
      desc: 'We can audit your existing JavaScript codebase and deliver a phased TypeScript migration plan with zero downtime. Contact us to discuss your codebase.',
      buttonLabel: 'Book a TypeScript Audit',
      buttonAction: 'consultation',
    },
  ],
};

export const docker: TechnologyPageData = {
  slug: 'docker',
  name: 'Docker',
  title: 'Docker Containerization & Environments Sync | Algorithyum',
  description: 'Standardize system setups and eliminate deployment discrepancies using isolated software container structures. Contact us to discuss your requirements and schedule a consultation.',
  category: 'devops',
  keywords: ['Docker', 'Containers', 'Containerization', 'Docker Compose'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Docker Containerization & Environment Sync',
      subtitle: 'Standardize software environments and eliminate deployment discrepancies using isolated Docker containers.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Consistent Environments From Laptop to Production',
      content: 'Docker is a platform for developing, shipping, and running applications inside isolated environments called containers. We bundle software binaries, runtimes, and configs into Docker images, ensuring that code running on a developer laptop behaves identically on staging and production servers. Every project we deliver includes Docker configurations and compose files. We use multi-stage Docker builds to produce the smallest possible production images — build dependencies are discarded, keeping final images lean and reducing attack surface. Docker Compose orchestrates multi-service local development environments (app server, database, Redis cache, message broker) with a single command, eliminating hours of onboarding setup time for new team members. All our images are scanned with Docker Scout in CI pipelines to catch known CVE vulnerabilities before they ship.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'Microservices Architecture', desc: 'Separate containers per service allow independent scaling and version management.' },
        { title: 'CI/CD Deployment Pipelines', desc: 'Container registries ensure every deployment runs the exact build that passed testing.' },
        { title: 'Legacy Application Isolation', desc: 'Containerize legacy applications to run on modern cloud infrastructure without code changes.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Docker Tooling We Use',
      technologies: ['Docker', 'Docker Compose', 'Container Registries', 'Multi-stage Builds', 'Docker Scout', 'BuildKit'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What is a container?', a: 'A container is a lightweight package containing your code, libraries, and runtime dependencies, allowing it to execute independently on any host operating system.' },
        { q: 'How do you reduce Docker image sizes?', a: 'We use multi-stage builds that separate compilation and runtime stages, choosing minimal base images (distroless or Alpine) and removing unnecessary build tools from the final production image.' },
        { q: 'Do you use Docker in local development?', a: 'Yes. Docker Compose spins up your entire service mesh (API, database, cache) on any developer machine with a single command, eliminating environment discrepancies and onboarding delays.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Containerize Your Applications',
      desc: 'Our DevOps engineers will audit your current deployment process and implement a Docker-based system that eliminates environment inconsistencies.',
      buttonLabel: 'Book DevOps Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const kubernetes: TechnologyPageData = {
  slug: 'kubernetes',
  name: 'Kubernetes',
  title: 'Kubernetes Orchestration & Auto-Scaling Grids | Algorithyum',
  description: 'Balance high traffic flows and manage microservices containers using automated cloud orchestration clusters. Contact us to discuss your requirements and schedule a consultation.',
  category: 'devops',
  keywords: ['Kubernetes', 'K8s', 'Container Orchestration', 'Auto-Scaling'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Kubernetes Orchestration & Auto-Scaling',
      subtitle: 'Automate container routing, pod auto-scaling, and health monitoring for high-availability infrastructure.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Self-Healing Infrastructure at Scale',
      content: 'Kubernetes (K8s) is the industry standard for container orchestration. We engineer multi-node clusters that automatically load balance traffic across application instances, scale pod counts in response to demand, and restart failed containers without manual intervention. Our K8s configurations are version-controlled as Helm charts and deployed via GitOps pipelines. We implement Horizontal Pod Autoscaling (HPA) tied to CPU, memory, and custom Prometheus metrics so your cluster responds to real application load rather than scheduled capacity guesses. ArgoCD syncs Helm chart state from Git repositories, creating an auditable, reversible deployment history. Cert-Manager automates SSL certificate issuance and renewal across all cluster ingress endpoints, eliminating expired certificate incidents.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'Global Microservices', desc: 'Load-balanced microservice architectures spanning multiple availability zones.' },
        { title: 'High-Availability Data Pipelines', desc: 'Data processing workloads requiring zero-downtime and automatic failure recovery.' },
        { title: 'Cloud-Agnostic Deployments', desc: 'Portable cluster configurations running identically on AWS EKS, Azure AKS, and GCP GKE.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Kubernetes Tooling We Use',
      technologies: ['Kubernetes', 'Helm', 'ArgoCD', 'Prometheus', 'Grafana', 'KEDA', 'Cert-Manager'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How does auto-scaling work in Kubernetes?', a: 'Kubernetes monitors CPU and memory utilization across your pods and automatically scales the number of running instances up or down to match current demand without downtime.' },
        { q: 'What is GitOps and how do you use it?', a: 'GitOps uses Git as the single source of truth for cluster state. ArgoCD continuously compares the live cluster state against the Helm charts in your repository and automatically applies any drift corrections.' },
        { q: 'Can Kubernetes run on all major cloud providers?', a: 'Yes. Kubernetes is cloud-agnostic. We deploy on AWS EKS, Azure AKS, and GCP GKE, and our Helm chart configurations are portable across all three without modification.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Scale With Kubernetes',
      desc: 'Let our platform engineers design a Kubernetes cluster architecture tailored to your traffic patterns and availability requirements. Contact us to discuss your infrastructure needs.',
      buttonLabel: 'Book K8s Architecture Review',
      buttonAction: 'consultation',
    },
  ],
};

export const aws: TechnologyPageData = {
  slug: 'aws',
  name: 'AWS',
  title: 'Amazon Web Services (AWS) Infrastructure | Algorithyum',
  description: 'Deploy secure, global, and highly scalable cloud platforms utilizing AWS core cloud services. Contact us to discuss your requirements and schedule a consultation.',
  category: 'cloud',
  keywords: ['AWS', 'Amazon Web Services', 'EC2', 'Lambda', 'S3'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Amazon Web Services (AWS) Infrastructure',
      subtitle: 'Global, secure, and highly scalable cloud platforms built on AWS core services.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'The World\'s Most Comprehensive Cloud Platform',
      content: 'Amazon Web Services (AWS) offers over 200 fully featured cloud services from globally distributed data centers. We design and operate AWS environments covering compute, storage, database, networking, security, and AI services. Our AWS architectures are built with well-architected framework principles, IAM least-privilege policies, and full infrastructure-as-code with Terraform. We apply the six pillars of the AWS Well-Architected Framework — operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability — to every architecture we deliver. VPC networking is configured with public, private, and isolated subnet tiers, and security group rules enforce least-privilege network access between services. CloudTrail and AWS Config are enabled by default to provide immutable audit logs of all API activity across your account.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'Data Warehouse Clusters', desc: 'Multi-region Redshift clusters for business intelligence and analytics workloads.' },
        { title: 'Serverless Compute', desc: 'Lambda functions handling event-driven API requests with zero infrastructure management.' },
        { title: 'Secure Storage', desc: 'S3 object storage with granular access policies, lifecycle rules, and encryption at rest.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'AWS Services We Configure',
      technologies: ['EC2', 'RDS', 'S3', 'Lambda', 'ECS/EKS', 'VPC', 'IAM', 'CloudFront', 'Route 53'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Which AWS services do you configure?', a: 'We configure EC2, RDS, S3, Lambda, ECS/EKS, VPC networks, and IAM security profiles — as well as advanced services like CloudFront, Route 53, and SQS for event-driven architectures.' },
        { q: 'How do you manage AWS costs?', a: 'We right-size EC2 instances, configure S3 lifecycle policies, use Reserved Instances for predictable workloads, and set billing alerts — typically reducing over-provisioned AWS bills by 20–40%.' },
        { q: 'Do you manage AWS security and IAM?', a: 'Yes. We configure IAM roles with least-privilege policies, enforce MFA for console access, enable CloudTrail audit logging, and run AWS Security Hub checks on a scheduled basis.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Architect Your AWS Infrastructure',
      desc: 'Get an AWS well-architected review covering compute, storage, security, and cost optimization for your current environment. Contact us to discuss your AWS requirements.',
      buttonLabel: 'Book AWS Architecture Review',
      buttonAction: 'consultation',
    },
  ],
};

export const azure: TechnologyPageData = {
  slug: 'azure',
  name: 'Microsoft Azure',
  title: 'Microsoft Azure Cloud Systems & Solutions | Algorithyum',
  description: 'Integrate active directory policies, secure corporate databases, and host enterprise architectures on Azure. Contact us to discuss your requirements and schedule a consultation.',
  category: 'cloud',
  keywords: ['Microsoft Azure', 'Active Directory', 'Azure Migration', 'Hybrid Cloud'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Microsoft Azure Cloud Systems',
      subtitle: 'Secure enterprise cloud systems, active directory policies, and hybrid architectures on Microsoft Azure.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Enterprise Cloud for Microsoft-Centric Organizations',
      content: 'Microsoft Azure is the preferred cloud for organizations running Microsoft workloads — Active Directory, SQL Server, .NET applications, and SharePoint. We specialize in Azure migration planning, hybrid cloud connectivity between on-premise infrastructure and Azure resources, and enterprise-grade security configurations using Azure Security Center and Defender. Azure Active Directory (Entra ID) provides centralized identity governance with conditional access policies, single sign-on, and multi-factor authentication enforcement across all cloud and hybrid resources. Azure DevOps integrates natively with Azure deployments, enabling CI/CD pipelines that gate releases through automated testing, security scanning, and compliance approval workflows. We use Azure Policy to enforce governance guardrails across subscriptions, ensuring resource configurations comply with your security baseline automatically.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'Hybrid Enterprise Servers', desc: 'Connecting on-premise Active Directory and SQL Server instances to Azure cloud resources.' },
        { title: 'SQL Server Configurations', desc: 'Azure SQL Database with read replicas, automated backups, and geo-redundancy.' },
        { title: 'Virtual Desktop Infrastructure', desc: 'Secure virtual desktop portals for distributed remote teams.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Azure Services We Configure',
      technologies: ['Azure VMs', 'Azure SQL', 'Active Directory', 'Azure Arc', 'Azure DevOps', 'AKS', 'Azure Monitor'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Do you support hybrid Azure migration?', a: 'Yes. We configure Azure Arc and hybrid VPC structures to link on-premise servers with Azure cloud resources securely, enabling gradual migration without a big-bang cutover.' },
        { q: 'Can Azure integrate with our on-premise Active Directory?', a: 'Yes. Azure AD Connect synchronizes your on-premise AD identities to Azure Active Directory, enabling single sign-on and unified access policies across both environments.' },
        { q: 'How do you monitor Azure environments?', a: 'We configure Azure Monitor, Log Analytics Workspaces, and Defender for Cloud to provide real-time visibility into performance, security alerts, and resource health across your subscriptions.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Plan Your Azure Migration',
      desc: 'Book an Azure architecture session to map your migration path from on-premise infrastructure to a secure Azure cloud environment. Contact us to discuss your migration plan.',
      buttonLabel: 'Book Azure Migration Session',
      buttonAction: 'consultation',
    },
  ],
};

export const googleCloud: TechnologyPageData = {
  slug: 'google-cloud',
  name: 'Google Cloud',
  title: 'Google Cloud Platform (GCP) Solutions | Algorithyum',
  description: 'Scale big data pipelines, launch Kubernetes clusters, and train machine learning models on GCP. Contact us to discuss your requirements and schedule a consultation.',
  category: 'cloud',
  keywords: ['Google Cloud', 'GCP', 'BigQuery', 'Vertex AI', 'GKE'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Google Cloud Platform (GCP) Solutions',
      subtitle: 'Scale big data analytics, Kubernetes workloads, and AI model pipelines on Google Cloud.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Google\'s Data and AI Cloud',
      content: 'Google Cloud Platform (GCP) provides industry-leading infrastructure for big data processing, container orchestration, and AI/ML workloads. We implement GCP for analytics-heavy environments where BigQuery\'s speed on large datasets and GKE\'s managed Kubernetes clusters deliver the best cost-performance ratio. BigQuery\'s serverless columnar architecture allows it to scan terabytes of data in seconds without managing any database infrastructure — you pay only for bytes scanned rather than provisioned instance hours. Vertex AI provides a managed ML platform covering dataset management, model training, evaluation, and online/batch prediction serving, all integrated with GCP\'s security and IAM model. Cloud Run enables fully managed serverless container deployments that scale from zero to thousands of instances without any cluster configuration, making it our preferred compute tier for API microservices that require burst scalability.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'Big Data Analytics', desc: 'Real-time analytics engines using BigQuery on multi-terabyte datasets with sub-second query times.' },
        { title: 'Kubernetes Clusters', desc: 'GKE managed clusters with automated node auto-scaling and integrated monitoring.' },
        { title: 'AI Model Training', desc: 'Vertex AI pipeline orchestration for training and deploying ML models at scale.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'GCP Services We Configure',
      technologies: ['BigQuery', 'GKE', 'Cloud Run', 'Vertex AI', 'Cloud Storage', 'Pub/Sub', 'Cloud SQL'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Why choose GCP for data pipelines?', a: 'Google Cloud BigQuery offers exceptionally fast queries over multi-terabyte datasets at low cost, making it our primary recommendation for analytics workloads that outgrow traditional SQL databases.' },
        { q: 'What is Cloud Run and when do you use it?', a: 'Cloud Run is a fully managed serverless platform that runs containerized APIs and scales automatically from zero. We use it for microservices that receive variable traffic and do not justify a dedicated Kubernetes cluster.' },
        { q: 'Do you use Vertex AI for machine learning?', a: 'Yes. Vertex AI is our preferred managed ML platform on GCP — it handles dataset versioning, distributed training, model evaluation, and online prediction endpoints with minimal infrastructure management.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Scale Your Data on GCP',
      desc: 'Book a GCP architecture session to evaluate BigQuery, GKE, or Vertex AI for your data and AI workloads. Contact us to discuss your GCP requirements.',
      buttonLabel: 'Book GCP Session',
      buttonAction: 'consultation',
    },
  ],
};

export const openai: TechnologyPageData = {
  slug: 'openai',
  name: 'OpenAI',
  title: 'OpenAI API Integration & Custom Models | Algorithyum',
  description: 'Incorporate intelligent text categorization, semantic indexing, and private LLMs using OpenAI. Contact us to discuss your requirements and schedule a consultation.',
  category: 'ai',
  keywords: ['OpenAI', 'GPT-4', 'LLM Integration', 'RAG', 'Embeddings'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'OpenAI API Integration & Custom LLM Systems',
      subtitle: 'Incorporate semantic intelligence and large language models using OpenAI APIs within secure, private environments.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Production AI Powered by OpenAI',
      content: 'OpenAI provides state-of-the-art AI models (GPT-4o, o1, embeddings) for language processing, code generation, and semantic analysis. We build production RAG systems using OpenAI API endpoints, with custom system prompts, retrieval pipelines, output validation guards, and enterprise API contracts that ensure your data never trains public models. Retrieval-Augmented Generation grounds LLM responses in your specific document corpus rather than relying on general training knowledge, significantly reducing hallucination risk for domain-specific applications. We design system prompt architectures with clear role boundaries, output format constraints, and fallback behaviors so your AI feature behaves consistently across edge cases. All OpenAI API calls are routed through a backend proxy that enforces authentication, rate limiting, and usage logging — keeping API keys off client devices and costs under control.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'Customer Support Automation', desc: 'Ticket classification, routing, and draft response generation grounded in your knowledge base.' },
        { title: 'Semantic Search', desc: 'Vector embedding search bars that match query intent rather than exact keyword matches.' },
        { title: 'Document Summarization', desc: 'Structured extraction and summarization of contracts, reports, and technical documents.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'OpenAI Integration Stack',
      technologies: ['OpenAI API', 'GPT-4o', 'Embeddings API', 'LangChain', 'Pinecone', 'pgvector', 'Zod Output Validation'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How do you secure OpenAI data streams?', a: 'We restrict OpenAI integrations by using their enterprise API contracts, which ensure your data is never used to train public models. All API calls are routed through our backend, never directly from the browser.' },
        { q: 'What is RAG and why does it matter?', a: 'Retrieval-Augmented Generation fetches relevant documents from your knowledge base and provides them as context to the LLM before generating a response. This dramatically reduces hallucinations and grounds the AI\'s answers in your verified content.' },
        { q: 'How do you prevent excessive API costs?', a: 'We implement token-efficient prompt templates, response caching for repeated queries, and per-user rate limiting — ensuring OpenAI API spend scales predictably with actual business usage.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Integrate AI Into Your Product',
      desc: 'Talk to our AI engineers about building a secure, production-ready OpenAI integration with RAG and output validation. Contact us to discuss your AI integration requirements.',
      buttonLabel: 'Book AI Integration Session',
      buttonAction: 'consultation',
    },
  ],
};

export const langchain: TechnologyPageData = {
  slug: 'langchain',
  name: 'LangChain',
  title: 'LangChain AI Agent & Prompt Orchestration | Algorithyum',
  description: 'Construct multi-step AI agent workflows that interact with databases, select APIs, and execute code. Contact us to discuss your requirements and schedule a consultation.',
  category: 'ai',
  keywords: ['LangChain', 'AI Agents', 'RAG', 'Prompt Orchestration'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'LangChain AI Agent & Prompt Orchestration',
      subtitle: 'Build multi-step AI agent workflows and RAG knowledge systems using LangChain.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'The Framework for Production AI Agents',
      content: 'LangChain is the leading developer framework for building applications with large language models. We use LangChain to orchestrate multi-step agent workflows — connecting LLMs to vector databases, SQL query engines, external APIs, and custom tools. Our LangChain implementations include structured output parsers, retry logic, and telemetry tracing via LangSmith. LangGraph extends LangChain\'s capabilities by introducing stateful graph architectures where agent nodes can branch, loop, and hand off to specialized sub-agents based on decision outputs — enabling complex multi-agent collaboration workflows. We instrument every LangChain deployment with LangSmith tracing, giving you visibility into exactly which prompts fired, what retrieval results were injected, and where latency occurs in each agent chain run. This observability is essential for diagnosing quality issues and optimizing prompt performance in production environments.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'RAG Knowledge Bases', desc: 'Autonomous search engines referencing local documents with source attribution.' },
        { title: 'Intent-Based Routing', desc: 'Prompt chain routers that trigger specific backend scripts based on user intent classification.' },
        { title: 'Multi-Agent Systems', desc: 'Cooperative agent networks where specialized agents collaborate to complete complex tasks.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'LangChain Stack We Use',
      technologies: ['LangChain', 'LangGraph', 'LangSmith', 'OpenAI', 'Pinecone', 'pgvector', 'FastAPI'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What is an AI Agent chain?', a: 'A chain is a sequence of processing steps where the model parses an input, fetches database records, runs a validation check, and formats a final structured response — all orchestrated automatically.' },
        { q: 'What is LangGraph and how does it differ from LangChain?', a: 'LangGraph introduces stateful graph execution on top of LangChain, allowing agents to loop, branch, and maintain memory across multi-turn interactions — enabling far more complex agentic workflows than a linear chain.' },
        { q: 'How do you trace LangChain agent behavior in production?', a: 'We connect every deployment to LangSmith, which logs every prompt, retrieval result, and model output in real time so we can diagnose quality issues, measure latency, and compare prompt versions systematically.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build Your AI Agent System',
      desc: 'Our AI engineers can design and deploy a LangChain-powered agent workflow tailored to your business data and processes.',
      buttonLabel: 'Book AI Agent Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const mongodb: TechnologyPageData = {
  slug: 'mongodb',
  name: 'MongoDB',
  title: 'MongoDB Document Database Solutions | Algorithyum',
  description: 'Store and retrieve polymorphic JSON datasets rapidly using NoSQL document databases. Contact us to discuss your requirements and schedule a consultation.',
  category: 'database',
  keywords: ['MongoDB', 'NoSQL', 'Document Database', 'Atlas'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'MongoDB Document Database Solutions',
      subtitle: 'Fast, flexible NoSQL document database schemas for polymorphic, schema-free data at scale.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Flexible Schemas for Evolving Data',
      content: 'MongoDB is a document-oriented NoSQL database designed to store large volumes of JSON-like data with flexible schemas. We utilize MongoDB for catalogs, user profiles, content management systems, and any data model that does not fit neatly into rigid relational tables. We configure MongoDB Atlas clusters with proper indexing strategies, aggregation pipelines, and connection pooling. MongoDB Atlas Search provides full-text and semantic search capabilities natively on your cluster, eliminating the need to maintain a separate Elasticsearch deployment for text search features. We define compound and partial indexes to ensure frequently queried fields are covered without inflating index storage overhead. Atlas Change Streams enable event-driven architectures where downstream services react to specific document mutations without polling the database.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'User Profile Directories', desc: 'Polymorphic user data with flexible field sets that vary between user types.' },
        { title: 'Log & Telemetry Stores', desc: 'High-frequency event log tracking with TTL indexes for automatic expiry.' },
        { title: 'E-Commerce Catalogs', desc: 'Product catalogs with variable attributes across different product categories.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'MongoDB Stack We Use',
      technologies: ['MongoDB Atlas', 'Mongoose', 'Aggregation Pipelines', 'Change Streams', 'Atlas Search', 'Node.js Driver'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'When should we use MongoDB instead of SQL?', a: 'We recommend MongoDB when your database records are highly polymorphic or lack rigid relationships, allowing your application to query them without complex table joins.' },
        { q: 'How do you handle full-text search in MongoDB?', a: 'MongoDB Atlas Search provides Lucene-powered full-text indexing directly on your cluster. We configure relevance-ranked text indexes with fuzzy matching and synonym support, eliminating the need for a separate Elasticsearch deployment.' },
        { q: 'Does MongoDB support transactions?', a: 'Yes. MongoDB supports multi-document ACID transactions since version 4.0. For simple single-document writes, MongoDB\'s atomic document operations are sufficient and more performant.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Design Your MongoDB Architecture',
      desc: 'Talk to our database engineers about schema design, indexing strategy, and Atlas cluster configuration for your use case.',
      buttonLabel: 'Book Database Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const postgresql: TechnologyPageData = {
  slug: 'postgresql',
  name: 'PostgreSQL',
  title: 'PostgreSQL Relational Database Engineering | Algorithyum',
  description: 'Secure transactional records and query complex tables using enterprise-grade SQL databases. Contact us to discuss your requirements and schedule a consultation.',
  category: 'database',
  keywords: ['PostgreSQL', 'SQL', 'Relational Database', 'ACID Compliance'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'PostgreSQL Relational Database Engineering',
      subtitle: 'Secure, ACID-compliant SQL database schemas with relational integrity for transactional business data.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'The Gold Standard for Relational Data',
      content: 'PostgreSQL is the world\'s most advanced open-source relational database. We write highly optimized SQL schemas, query execution plans, and secure connection pool configurations for PostgreSQL. Our database engineering covers everything from initial schema design to production tuning — including index optimization, partitioning strategies, and read replica configurations. We analyze slow query logs and EXPLAIN ANALYZE output to identify missing indexes, sequential scan hotspots, and N+1 query patterns that degrade application performance under load. Connection pooling with pgBouncer ensures your application maintains efficient database connection limits even under high concurrency. For applications requiring vector similarity search (AI embeddings), we configure the pgvector extension to run embedding lookups natively inside PostgreSQL without a separate vector database.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'Financial Systems', desc: 'Accounting tables requiring absolute transaction integrity and audit trail completeness.' },
        { title: 'Complex Relational Platforms', desc: 'Multi-entity systems with strict foreign key constraints and complex JOIN queries.' },
        { title: 'Geographic Data', desc: 'Location-based applications using the PostGIS extension for spatial queries.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'PostgreSQL Stack We Use',
      technologies: ['PostgreSQL 16', 'Prisma', 'pgvector', 'PostGIS', 'pg_partman', 'pgBouncer', 'Flyway Migrations'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Why is ACID compliance critical?', a: 'ACID compliance guarantees that database transactions are processed reliably and atomically, protecting your data from corruption during server crashes or network failures.' },
        { q: 'How do you optimize slow PostgreSQL queries?', a: 'We analyze EXPLAIN ANALYZE output to identify sequential scans and missing indexes, create partial and composite indexes for high-cardinality query patterns, and partition large tables to reduce per-query scan volume.' },
        { q: 'Can PostgreSQL handle AI embedding search?', a: 'Yes. The pgvector extension adds vector similarity search capabilities to PostgreSQL, allowing your application to query embedding vectors with cosine or L2 distance functions alongside regular SQL queries.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Optimize Your Database',
      desc: 'Our database engineers will audit your PostgreSQL schema design, query performance, and indexing strategy to identify bottlenecks. Contact us to discuss your database requirements.',
      buttonLabel: 'Book Database Audit',
      buttonAction: 'consultation',
    },
  ],
};

export const redis: TechnologyPageData = {
  slug: 'redis',
  name: 'Redis',
  title: 'Redis In-Memory Database Caching | Algorithyum',
  description: 'Lower page load speeds and throttle API usage using fast in-memory key-value databases. Contact us to discuss your requirements and schedule a consultation.',
  category: 'database',
  keywords: ['Redis', 'In-Memory Cache', 'Session Store', 'Rate Limiting'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Redis In-Memory Caching & Session Management',
      subtitle: 'Ultra-fast in-memory key-value databases for caching, session storage, and API rate-limiting.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Sub-Millisecond Data Access',
      content: 'Redis is an open-source, in-memory data structure store used as a database, cache, and message broker. We configure Redis to eliminate redundant database queries, manage user sessions across distributed server clusters, implement rate-limiting to protect APIs, and power pub/sub messaging channels between services. BullMQ, built on Redis, provides a robust job queue system for deferring expensive background tasks — email delivery, PDF generation, image processing — without blocking API response cycles. Redis Streams offer a persistent, ordered message log structure suitable for event sourcing and microservice communication without the operational overhead of Apache Kafka for moderate throughput requirements. We configure Redis with persistence (AOF and RDB snapshots) and replication for staging and production environments to ensure data is not lost during pod restarts or node failures.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'Query Result Caching', desc: 'Cache expensive database queries in Redis to serve repeat requests instantly from memory.' },
        { title: 'Session Management', desc: 'Centralized user session state across horizontally scaled server clusters.' },
        { title: 'API Rate Limiting', desc: 'Atomic Redis counters enforce per-user and per-IP request rate limits.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Redis Stack We Use',
      technologies: ['Redis 7', 'ioredis', 'Upstash', 'Redis Pub/Sub', 'Redis Streams', 'BullMQ Job Queues'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How does Redis speed up page loads?', a: 'By storing frequently accessed records directly in system memory, Redis returns data in under a millisecond, bypassing slower disk-based databases that require query execution time.' },
        { q: 'How do you use Redis for background job queues?', a: 'We implement BullMQ on top of Redis to queue background tasks (emails, reports, exports). Workers process jobs asynchronously, keeping API response times fast and decoupling heavy processing from request cycles.' },
        { q: 'Is Redis data persistent?', a: 'Yes. Redis supports AOF (Append-Only File) persistence and RDB snapshots. We configure both for production environments, providing durability guarantees while maintaining read and write performance.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Add a Caching Layer',
      desc: 'Our engineers will identify the highest-impact caching opportunities in your application and implement a Redis strategy.',
      buttonLabel: 'Book Performance Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const firebase: TechnologyPageData = {
  slug: 'firebase',
  name: 'Firebase',
  title: 'Firebase Serverless App Backends | Algorithyum',
  description: 'Deploy real-time mobile app databases and client user authentication networks using Firebase. Contact us to discuss your requirements and schedule a consultation.',
  category: 'backend',
  keywords: ['Firebase', 'Firestore', 'Firebase Auth', 'Real-Time Database'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Firebase Serverless App Backends',
      subtitle: 'Real-time data synchronization, authentication, and serverless hosting on Google Firebase.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Rapid Backend for Mobile and Web Apps',
      content: 'Firebase is Google\'s mobile and web application platform, offering Firestore (real-time NoSQL database), Authentication, Cloud Functions, and Hosting. We use Firebase for rapid MVP development, collaborative tools, and applications requiring real-time data sync across client devices — and design clear migration paths to custom PostgreSQL backends as data complexity grows. Firestore\'s real-time listeners push document updates to connected clients automatically without polling, making it ideal for chat applications, live dashboards, and collaborative editing tools. Firebase Authentication supports email/password, Google, Apple, and social OAuth providers out-of-the-box, reducing weeks of authentication implementation to hours. Firebase Security Rules provide granular, declarative access control at the document level, ensuring users can only read and write the data they are authorized to access.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'Collaborative Tools', desc: 'Real-time data synchronization for shared document editing and live dashboard updates.' },
        { title: 'MVP Applications', desc: 'Rapid backend setup for product validation requiring authentication and data storage in days.' },
        { title: 'Push Notifications', desc: 'Firebase Cloud Messaging delivers targeted push notifications to mobile and web clients.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Firebase Stack We Use',
      technologies: ['Firestore', 'Firebase Auth', 'Cloud Functions', 'Firebase Hosting', 'FCM', 'Firebase Storage'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Is Firebase suitable for large enterprises?', a: 'Firebase is excellent for app-focused backends with flexible data models. However, we often recommend shifting to custom PostgreSQL backends when datasets require complex relational queries or strict audit trails.' },
        { q: 'How do Firebase Security Rules work?', a: 'Security Rules evaluate read and write requests against declarative policy expressions before allowing database access. They can validate document fields, check authenticated user IDs, and enforce ownership patterns without server-side code.' },
        { q: 'Can we send push notifications with Firebase?', a: 'Yes. Firebase Cloud Messaging (FCM) delivers push notifications to Android, iOS, and web browsers from a unified API, supporting targeted, topic-based, and device group delivery patterns.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build on Firebase',
      desc: 'Our engineers can set up a production Firebase project with proper security rules, data modeling, and scalability planning.',
      buttonLabel: 'Book Firebase Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const flutter: TechnologyPageData = {
  slug: 'flutter',
  name: 'Flutter',
  title: 'Flutter Cross-Platform Mobile Apps | Algorithyum',
  description: 'Deploy compiled cross-platform mobile apps for iOS and Android using Flutter. Contact us to discuss your requirements and schedule a consultation.',
  category: 'mobile',
  keywords: ['Flutter', 'Dart', 'Cross-Platform Mobile', 'iOS Android'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Flutter Cross-Platform Mobile Development',
      subtitle: 'High-performance natively compiled apps for iOS and Android from a single Dart codebase.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'One Codebase. Two Platforms. No Compromises.',
      content: 'Flutter is Google\'s portable UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. We write Flutter apps in Dart with clean architecture patterns (BLoC or Riverpod), full widget test coverage, and CI/CD pipelines that automate App Store and Play Store submissions. Flutter\'s self-contained rendering engine draws every pixel directly — meaning your UI is identical on iOS and Android without conditional styling or platform bridge overhead. We use Riverpod for reactive state management, Hive for local offline storage, and Dio for typed HTTP networking. Fastlane CI automates code signing, version bumping, and submission to both the Apple App Store and Google Play Store on every tagged release, ensuring fast and consistent release delivery.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'Retail & Logistics Apps', desc: 'Cross-platform field apps with barcode scanning, offline data sync, and location services.' },
        { title: 'Enterprise Client Portals', desc: 'Corporate apps requiring identical design and functionality across iOS and Android.' },
        { title: 'MVP Applications', desc: 'Rapid product launches where a single codebase halves development cost and timeline.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Flutter Stack We Use',
      technologies: ['Flutter 3', 'Dart', 'Riverpod', 'BLoC', 'Hive', 'Dio', 'Firebase', 'Fastlane CI'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Do Flutter apps feel native?', a: 'Yes. Flutter compiles your Dart code directly into machine binaries, ensuring animations and interactions execute at 60fps and feel indistinguishable from native apps.' },
        { q: 'How do you handle offline data in Flutter apps?', a: 'We configure Hive or SQLite local databases to cache data on-device, allowing the app to function without an internet connection and sync changes to the backend when connectivity is restored.' },
        { q: 'What state management pattern do you use in Flutter?', a: 'We use Riverpod as our default state management solution for its compile-safe dependency injection, reactive state providers, and testability — and BLoC for projects requiring stricter event-driven separation of concerns.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build Your Flutter App',
      desc: 'Get a scoping session with our Flutter engineers to estimate timeline and architecture for your mobile application.',
      buttonLabel: 'Book Flutter Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const reactNative: TechnologyPageData = {
  slug: 'react-native',
  name: 'React Native',
  title: 'React Native Mobile App Engineering | Algorithyum',
  description: 'Develop iOS and Android apps using native Javascript components and React architectures. Contact us to discuss your requirements and schedule a consultation.',
  category: 'mobile',
  keywords: ['React Native', 'JavaScript Mobile', 'Expo', 'iOS Android'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'React Native Mobile App Engineering',
      subtitle: 'iOS and Android applications using native React component architectures and JavaScript business logic.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Mobile Apps Built With React Principles',
      content: 'React Native is an open-source mobile framework created by Meta, allowing developers to build native mobile applications using JavaScript and React patterns. We choose React Native when teams already maintain React web codebases and want to share business logic, API clients, and state management patterns across web and mobile platforms. The New Architecture introduced in React Native 0.71 replaces the asynchronous JavaScript bridge with JSI (JavaScript Interface), enabling synchronous native module communication and significantly improving animation and gesture performance. Expo simplifies the React Native development workflow by managing native build configurations, providing a curated set of well-maintained native modules, and offering Expo Application Services (EAS) for cloud-based builds and over-the-air update distribution. We use React Navigation for screen routing, Zustand for lightweight state management, and MMKV for fast synchronous local storage.',
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'Common Use Cases',
      items: [
        { title: 'Web-to-Mobile Extensions', desc: 'Apps that share API clients and state managers with an existing React web application.' },
        { title: 'Hardware-Integrated Apps', desc: 'Applications requiring native camera, biometrics, and Bluetooth device access via JS wrappers.' },
        { title: 'Dynamic Dashboards', desc: 'Data-rich dashboard layouts using native performance-optimized list components.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'React Native Stack We Use',
      technologies: ['React Native', 'Expo', 'TypeScript', 'React Navigation', 'Zustand', 'MMKV Storage', 'Detox E2E'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Can you convert our React web app to React Native?', a: 'We can reuse your core API logic, state managers, and business rules, but we write custom mobile UI components to properly match phone viewport constraints and platform conventions.' },
        { q: 'What is the difference between Expo and bare React Native?', a: 'Expo provides a managed workflow with pre-configured native modules and EAS cloud builds — ideal for most applications. Bare React Native gives full control over native code for projects requiring highly specialized hardware integrations.' },
        { q: 'How do you distribute app updates without App Store reviews?', a: 'We configure Expo EAS Update to push over-the-air JavaScript bundle updates directly to users\' installed apps, bypassing the review process for non-native code changes. This enables same-day bug fixes and minor feature releases.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Take Your App Mobile',
      desc: 'Our React Native engineers will scope your mobile app requirements and recommend whether React Native or Flutter is the right fit.',
      buttonLabel: 'Book Mobile Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const technologyMap: Record<string, TechnologyPageData> = {
  'react': react,
  'nextjs': nextjs,
  'nodejs': nodejs,
  'typescript': typescript,
  'docker': docker,
  'kubernetes': kubernetes,
  'aws': aws,
  'azure': azure,
  'google-cloud': googleCloud,
  'openai': openai,
  'langchain': langchain,
  'mongodb': mongodb,
  'postgresql': postgresql,
  'redis': redis,
  'firebase': firebase,
  'flutter': flutter,
  'react-native': reactNative
};
