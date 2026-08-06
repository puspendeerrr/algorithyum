import type { IndustryPageData } from '../types';

export const healthcare: IndustryPageData = {
  slug: 'healthcare',
  name: 'Healthcare',
  title: 'Healthcare Software Development & HIPAA Systems | Algorithyum',
  description: 'Deploy secure medical records databases, patient portals, and compliant clinical software architectures. Contact us to discuss your requirements and schedule a consultation.',
  category: 'regulated',
  keywords: ['Healthcare Software', 'HIPAA Compliance', 'Patient Portal', 'Medical Records'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Healthcare Software & HIPAA-Compliant Systems',
      subtitle: 'Patient portals, clinic databases, and compliant clinical software built for the modern healthcare environment.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Technology Built for Clinical Environments',
      content: 'Healthcare organizations face a unique challenge: balancing operational efficiency with strict data privacy obligations. We design and build clinical software systems — patient portals, scheduling platforms, electronic health record integrations, and billing modules — with HIPAA compliance, PHI encryption, and audit-trail requirements built into every layer. Our healthcare engagements begin with a compliance architecture review, mapping where protected health information flows through your system and identifying every access point that requires encryption, access logging, and role-based permission controls. We integrate with major EHR vendors using HL7 FHIR R4 API standards, allowing clinical staff to retrieve and update patient records from your portal without duplicate data entry across systems. Automated appointment reminders, digital intake forms, and patient-facing test result portals reduce administrative burden on clinical staff while improving patient engagement scores.',
    },
    {
      id: 'business-problems',
      type: 'business-problems',
      title: 'Industry Challenges',
      items: [
        'Protecting confidential patient health information (PHI) from database leaks.',
        'Integrating clinical scheduling databases with older legacy hospital systems.',
        'Maintaining strict compliance with HIPAA, GDPR, and ISO data standards.',
        'Reducing administrative burden on clinical staff through manual data entry.',
      ],
    },
    {
      id: 'solutions',
      type: 'solutions',
      title: 'How We Solve Them',
      items: [
        'Deploying end-to-end database encryption and zero-knowledge storage configurations.',
        'Building compliant patient portals with multi-factor biometric authentications.',
        'Writing custom database triggers to log PHI access history for compliance audits.',
        'Automating patient onboarding checklists and appointment reminder workflows.',
      ],
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'What We Build for Healthcare',
      items: [
        { title: 'Patient Portals', desc: 'Secure web portals for appointment booking, test result access, and direct clinical messaging.' },
        { title: 'EHR Integrations', desc: 'HL7 FHIR-compliant integrations connecting your platform to major EHR systems.' },
        { title: 'Billing & Claims Systems', desc: 'Automated medical billing pipelines with insurance claim submission and reconciliation.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['HIPAA-Compliant Infrastructure', 'HL7 FHIR APIs', 'PostgreSQL with Encryption', 'AWS Healthcare', 'MFA Authentication', 'Audit Logging'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Are your systems HIPAA compliant?', a: 'Yes. We audit database access histories, restrict user roles via IAM, encrypt data in transit and at rest, and compile the technical documentation records needed for formal HIPAA audits.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build Compliant Healthcare Software',
      desc: 'Arrange a confidential technical briefing with our healthcare software engineers to discuss your compliance requirements and system architecture.',
      buttonLabel: 'Book Healthcare Briefing',
      buttonAction: 'consultation',
    },
  ],
};

export const finance: IndustryPageData = {
  slug: 'finance',
  name: 'Fintech & Finance',
  title: 'Fintech Software Engineering & Security | Algorithyum',
  description: 'Construct transactional accounting grids, payment API gateways, and secure banking portals. Contact us to discuss your requirements and schedule a consultation.',
  category: 'regulated',
  keywords: ['Fintech Software', 'Payment Gateway', 'PCI-DSS', 'Banking Portal'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Fintech & Financial Software Engineering',
      subtitle: 'Transactional accounting systems, payment gateway APIs, and secure banking portals built on ACID-compliant infrastructure.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Software Where Data Integrity Is Non-Negotiable',
      content: 'In financial software, a single data inconsistency can cascade into regulatory violations, financial losses, and customer trust failures. We build fintech systems on PostgreSQL\'s ACID guarantees, with strongly-typed API gateways, immutable audit logs, and PCI-DSS aligned security configurations. Every calculation, every transaction, every balance update is tested against failure scenarios. Our financial platform architecture separates payment data concerns from application logic using proven tokenization patterns — raw card numbers never touch your application servers. We implement double-entry accounting engines that validate every ledger transaction with debit/credit balance checks, ensuring your financial records remain internally consistent regardless of system failures. Multi-currency conversion logic is handled through dedicated service layers with snapshot exchange rate records attached to each transaction, providing a complete historical audit trail for regulatory reporting.',
    },
    {
      id: 'business-problems',
      type: 'business-problems',
      title: 'Industry Challenges',
      items: [
        'Securing transactional databases against SQL injection and API manipulation attacks.',
        'Minimizing query latency for high-frequency trading and accounting operations.',
        'Passing strict security audits required by financial regulators.',
        'Maintaining complete transaction audit trails for compliance purposes.',
      ],
    },
    {
      id: 'solutions',
      type: 'solutions',
      title: 'How We Solve Them',
      items: [
        'Developing strongly-typed, compiled banking API gateways in Go and Python.',
        'Caching read-only directories in Redis to support high-frequency query speeds.',
        'Aligning software architectures with PCI-DSS cardholder data specifications.',
        'Implementing immutable ledger tables with cryptographic audit trail verification.',
      ],
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'What We Build for Finance',
      items: [
        { title: 'Payment Processing Systems', desc: 'PCI-DSS compliant payment flows with tokenized card storage and fraud detection hooks.' },
        { title: 'Accounting Automation', desc: 'Automated ledger calculation engines that reconcile multi-currency transactions.' },
        { title: 'Banking Portals', desc: 'Secure customer-facing account management interfaces with multi-factor authentication.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['PostgreSQL ACID', 'Go / Python APIs', 'Redis Caching', 'Stripe API', 'PCI-DSS Controls', 'Immutable Audit Logs'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How do you secure payment integrations?', a: 'We configure tokenized payment flows where card details are handled exclusively by PCI-DSS certified processors (such as Stripe). No raw card data is ever stored on your application servers.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build Your Financial Platform',
      desc: 'Book a confidential technical briefing with our fintech engineers to discuss your compliance requirements and system architecture.',
      buttonLabel: 'Book Fintech Briefing',
      buttonAction: 'consultation',
    },
  ],
};

export const retail: IndustryPageData = {
  slug: 'retail',
  name: 'Retail & E-commerce',
  title: 'Enterprise E-Commerce Platforms & POS Integration | Algorithyum',
  description: 'Build fast online storefronts, catalog databases, and synchronized inventory networks. Contact us to discuss your requirements and schedule a consultation.',
  category: 'commercial',
  keywords: ['E-Commerce Platform', 'Retail Software', 'POS Integration', 'Inventory Sync'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Retail & E-Commerce Platform Engineering',
      subtitle: 'Fast online storefronts, synchronized inventory systems, and POS integrations built for peak traffic.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'E-Commerce Infrastructure That Converts',
      content: 'Retail platforms live and die by page speed, inventory accuracy, and checkout conversion rates. We engineer e-commerce systems on Next.js for perfect Lighthouse scores, Kubernetes for auto-scaling during sale events, and event-driven inventory sync pipelines that eliminate overselling across online and physical channels. Server-side rendering via Next.js ensures product pages are fully indexed by search engines, while ISR keeps catalog content fresh without rebuild delays. We implement structured data markup (Schema.org Product, Offer, Review) on every product page to maximize rich snippet visibility in Google Shopping results. Checkout flows are designed using progressive disclosure principles — minimizing form fields visible at each step to reduce abandonment — and payment is handled through PCI-DSS certified processors so card data never touches your servers.',
    },
    {
      id: 'business-problems',
      type: 'business-problems',
      title: 'Industry Challenges',
      items: [
        'Slow page loads causing high bounce rates and lost organic search rankings.',
        'Inventory overselling when online and POS channels are not synchronized.',
        'Server crashes during high-traffic sale events due to insufficient scaling.',
        'Poor checkout UX causing abandonment before payment completion.',
      ],
    },
    {
      id: 'solutions',
      type: 'solutions',
      title: 'How We Solve Them',
      items: [
        'Designing SEO-optimized, server-side rendered product pages using Next.js.',
        'Building automated background sync scripts between warehouse and storefront databases.',
        'Deploying auto-scaling Kubernetes clusters that absorb holiday traffic spikes.',
        'Streamlining checkout flows with progressive form design and payment tokenization.',
      ],
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'What We Build for Retail',
      items: [
        { title: 'Online Storefronts', desc: 'Server-rendered product catalog pages with optimized Core Web Vitals and structured data.' },
        { title: 'Inventory Management', desc: 'Real-time stock sync between POS systems, warehouses, and online storefronts.' },
        { title: 'Order Fulfillment Systems', desc: 'Order routing, picking list generation, and shipping label automation workflows.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['Next.js', 'Stripe', 'Shopify APIs', 'Kubernetes', 'Redis', 'PostgreSQL', 'Elasticsearch'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Can you integrate our existing physical POS system?', a: 'Yes. We program custom database sync scripts to pull from your physical POS database (Square, Shopify POS, Lightspeed) and update your storefront stock levels in real-time.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Upgrade Your E-Commerce Platform',
      desc: 'Book a platform architecture session with our retail engineers to evaluate your current stack and identify performance improvements.',
      buttonLabel: 'Book E-Commerce Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const education: IndustryPageData = {
  slug: 'education',
  name: 'Education',
  title: 'Learning Management Systems (LMS) & Education Technology | Algorithyum',
  description: 'Develop virtual classrooms, student grade registries, and collaborative learning databases. Contact us to discuss your requirements and schedule a consultation.',
  category: 'institutional',
  keywords: ['LMS', 'Education Technology', 'Student Portal', 'Learning Platform'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Education Technology & Learning Management Systems',
      subtitle: 'Virtual learning portals, student directories, and collaborative grade databases for modern educational institutions.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Digital Infrastructure for Modern Education',
      content: 'Education institutions require software that handles thousands of concurrent users during exam periods, delivers large media assets reliably across variable network conditions, and maintains strict data privacy for student records. We build LMS platforms, student portals, and administrative systems with these constraints at their core. Adaptive bitrate video delivery ensures lectures stream reliably over slow connections without manual quality switching. We implement role-based access architectures that separate student, instructor, and administrator views with appropriate data visibility boundaries. Analytics dashboards surface engagement metrics — video watch completion, assignment submission rates, quiz performance distributions — that faculty and administrators need to identify at-risk students and improve course design before semester end.',
    },
    {
      id: 'business-problems',
      type: 'business-problems',
      title: 'Industry Challenges',
      items: [
        'Database systems struggling under concurrent exam-period traffic loads.',
        'Video lectures and large course files loading slowly on limited bandwidth connections.',
        'Student record privacy obligations under FERPA and GDPR regulations.',
        'Fragmented tools creating context-switching friction for students and faculty.',
      ],
    },
    {
      id: 'solutions',
      type: 'solutions',
      title: 'How We Solve Them',
      items: [
        'Distributing load across decoupled CDN nodes to handle traffic spikes without degradation.',
        'Optimizing video delivery through adaptive bitrate streaming and cloud storage.',
        'Configuring encryption and role-based access controls for sensitive student data.',
        'Building unified platforms combining assignments, grading, messaging, and analytics.',
      ],
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'What We Build for Education',
      items: [
        { title: 'Learning Portals', desc: 'Course management systems with video delivery, assignments, and progress tracking.' },
        { title: 'Student Dashboards', desc: 'Personalized student views combining grades, calendar, assignments, and messages.' },
        { title: 'Faculty Analytics', desc: 'Engagement dashboards showing student activity, completion rates, and assessment performance.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['Next.js', 'PostgreSQL', 'AWS S3', 'CloudFront CDN', 'Google Workspace APIs', 'Adaptive Streaming'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Can your student portals integrate with Google Classroom?', a: 'Yes. We integrate with Google Workspace APIs to sync calendars, rosters, and assignments directly into your platform, eliminating duplicate data entry for faculty.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Build Your Education Platform',
      desc: 'Book a session with our education technology engineers to discuss your LMS requirements and platform architecture.',
      buttonLabel: 'Book EdTech Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const logistics: IndustryPageData = {
  slug: 'logistics',
  name: 'Logistics & Supply Chain',
  title: 'Logistics Software Systems & Fleet Telemetry | Algorithyum',
  description: 'Scale shipment tracking databases, fleet coordinate maps, and warehouse inventory systems. Contact us to discuss your requirements and schedule a consultation.',
  category: 'operational',
  keywords: ['Logistics Software', 'Fleet Tracking', 'Supply Chain', 'Warehouse Management'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Logistics Software & Supply Chain Systems',
      subtitle: 'Fleet location tracking, warehouse inventory registries, and real-time shipment databases built for operational scale.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Visibility Across Every Stage of Your Supply Chain',
      content: 'Logistics operations depend on real-time data accuracy. A delayed GPS update, an out-of-sync inventory count, or a manual routing decision can cascade into missed delivery windows and customer dissatisfaction. We build logistics platforms that process high-frequency telemetry streams, synchronize inventory across distributed depots, and automate routing optimization calculations. We architect tracking databases with unified status normalization layers that translate inconsistent carrier API formats into a single canonical shipment status model, giving operations teams a single source of truth regardless of which carrier handles each shipment leg. Route optimization engines use graph-based algorithms to calculate the lowest-cost delivery sequences, factoring in vehicle capacity constraints, time window requirements, and real-time traffic data — measurably reducing empty-mile costs and improving on-time delivery performance.',
    },
    {
      id: 'business-problems',
      type: 'business-problems',
      title: 'Industry Challenges',
      items: [
        'No unified view of shipment status across multiple carrier networks.',
        'High-frequency GPS coordinate updates overwhelming database write capacity.',
        'Manual route planning creating inefficient empty-mile driving costs.',
        'Inventory discrepancies between warehouse records and physical stock levels.',
      ],
    },
    {
      id: 'solutions',
      type: 'solutions',
      title: 'How We Solve Them',
      items: [
        'Structuring tracking databases with unified API status normalizers across carriers.',
        'Deploying Redis in-memory queues to buffer high-frequency location payloads.',
        'Implementing route optimization algorithms that minimize empty miles.',
        'Building real-time warehouse sync pipelines that update stock counts on every scan.',
      ],
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'What We Build for Logistics',
      items: [
        { title: 'Fleet Tracking Dashboards', desc: 'Real-time map dashboards showing vehicle locations, ETAs, and delivery status.' },
        { title: 'Warehouse Management Systems', desc: 'Inventory systems with barcode scanning, bin location tracking, and pick-list generation.' },
        { title: 'Carrier Integration APIs', desc: 'Unified tracking API aggregating status updates from multiple shipping carriers.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['Node.js', 'Redis Streams', 'PostgreSQL', 'Google Maps API', 'WebSockets', 'Kafka', 'React Dashboards'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How do you handle real-time truck location updates?', a: 'We build lightweight tracking endpoints that receive GPS coordinate payloads from mobile clients, buffer them through Redis streams, and push updates to dashboard clients via WebSockets.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Digitize Your Supply Chain',
      desc: 'Book a logistics technology session to map your tracking, inventory, and routing system requirements.',
      buttonLabel: 'Book Logistics Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const manufacturing: IndustryPageData = {
  slug: 'manufacturing',
  name: 'Manufacturing & Industrial',
  title: 'Industrial Manufacturing Software & IoT Monitoring | Algorithyum',
  description: 'Monitor factory IoT metrics, scale equipment maintenance databases, and coordinate workflows. Contact us to discuss your requirements and schedule a consultation.',
  category: 'operational',
  keywords: ['Manufacturing Software', 'IoT Monitoring', 'Predictive Maintenance', 'Factory Automation'],
  blocks: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Manufacturing Software & IoT Factory Monitoring',
      subtitle: 'Factory IoT metrics, predictive maintenance systems, and quality control databases for industrial operations.',
    },
    {
      id: 'overview',
      type: 'overview',
      title: 'Industry 4.0 Software for Factory Floors',
      content: 'Manufacturing operations generate enormous volumes of machine telemetry data — vibration readings, temperature cycles, pressure sensors — that contain early warning signals for equipment failures. We build the software infrastructure to collect, process, and surface these signals in real time, enabling predictive maintenance, quality control automation, and production schedule optimization. OPC-UA and Modbus gateways translate legacy PLC outputs into structured JSON data streams that feed modern time-series databases (InfluxDB, TimescaleDB) optimized for high-frequency append workloads. ML anomaly detection models trained on historical sensor patterns flag deviations that precede equipment failures — alerting maintenance engineers before a critical component causes unplanned production downtime. Real-time Grafana dashboards give floor supervisors and plant managers continuous visibility into equipment health KPIs, production throughput rates, and quality control measurement distributions across all production lines.',
    },
    {
      id: 'business-problems',
      type: 'business-problems',
      title: 'Industry Challenges',
      items: [
        'Collecting and storing telemetry from thousands of factory floor machines at scale.',
        'Predicting equipment failures before production lines stop unexpectedly.',
        'Coordinating customer order fulfillment with factory production scheduling.',
        'Maintaining quality control consistency across multiple shifts and facilities.',
      ],
    },
    {
      id: 'solutions',
      type: 'solutions',
      title: 'How We Solve Them',
      items: [
        'Building automated IoT data collector scripts that read sensor outputs at high frequency.',
        'Running ML-powered anomaly detection over historical machine telemetry logs.',
        'Connecting sales order databases with production scheduling and MRP systems.',
        'Automating quality measurement logging and statistical process control dashboards.',
      ],
    },
    {
      id: 'use-cases',
      type: 'use-cases',
      title: 'What We Build for Manufacturing',
      items: [
        { title: 'IoT Telemetry Platforms', desc: 'Data ingestion and visualization platforms for machine sensor feeds across factory floors.' },
        { title: 'Predictive Maintenance Systems', desc: 'ML-powered maintenance alert systems that flag equipment anomalies before failures occur.' },
        { title: 'Production MES Systems', desc: 'Manufacturing execution systems connecting orders, scheduling, and quality control.' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      title: 'Technologies We Use',
      technologies: ['Kafka Streams', 'InfluxDB', 'Grafana', 'Python ML', 'Modbus / OPC-UA', 'PostgreSQL', 'React Dashboards'],
    },
    {
      id: 'faq',
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Can you read data from legacy PLC machines?', a: 'Yes. We build custom software gateways that translate serial Modbus or OPC-UA outputs from legacy hardware into clean JSON data streams that feed modern analytics platforms.' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      headline: 'Modernize Your Factory Operations',
      desc: 'Book a manufacturing technology session with our industrial software engineers to scope your IoT and MES requirements.',
      buttonLabel: 'Book Industrial Consultation',
      buttonAction: 'consultation',
    },
  ],
};

export const industryMap: Record<string, IndustryPageData> = {
  'healthcare': healthcare,
  'finance': finance,
  'retail': retail,
  'education': education,
  'logistics': logistics,
  'manufacturing': manufacturing
};
