import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Cpu, Cloud, Shield, Database, BarChart3, 
  Palette, Briefcase, Zap, ArrowRight, Layers
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Services.module.css';

interface ServicePillar {
  id: string;
  title: string;
  icon: React.ReactNode;
  routePath: string;
  description: string;
  items: string[];
}

interface ServicesProps {}

export const Services: React.FC<ServicesProps> = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const pillars: ServicePillar[] = [
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      icon: <Code size={24} />,
      routePath: '/services/software-development',
      description: 'We engineer secure, custom frontends, backends, databases, and cross-platform apps.',
      items: ['Custom Software Development', 'Enterprise Software', 'SaaS Development', 'CRM & ERP Development', 'API Development', 'Web Development', 'Mobile App Development', 'UI/UX Design']
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      icon: <Cpu size={24} />,
      routePath: '/services/ai',
      description: 'Deploy generative AI engines, semantic searches, and autonomous cognitive workflow agents.',
      items: ['Generative AI', 'AI Agents', 'AI Chatbots', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'AI Automation']
    },
    {
      id: 'cloud',
      title: 'Cloud Computing',
      icon: <Cloud size={24} />,
      routePath: '/services/cloud',
      description: 'Architect multi-cloud systems with cost optimizations and automatic server failovers.',
      items: ['AWS setups', 'Microsoft Azure systems', 'Google Cloud Platform', 'Cloud Migration planning', 'Serverless computing']
    },
    {
      id: 'devops',
      title: 'DevOps & CI/CD',
      icon: <Layers size={24} />,
      routePath: '/services/devops',
      description: 'Automate container pipelines, Docker registries, and Infrastructure as Code workflows.',
      items: ['DevOps automation', 'Kubernetes clusters', 'Docker orchestration', 'CI/CD pipeline templates', 'GitOps deployment rules']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: <Shield size={24} />,
      routePath: '/services/cybersecurity',
      description: 'Protect network perimeters and prepare codebases for formal security audits.',
      items: ['Security Audits', 'Penetration Testing', 'Vulnerability Assessment', 'Cloud Security', 'Security Consulting', 'DevSecOps']
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      icon: <Database size={24} />,
      routePath: '/services/ai',
      description: 'Aggregate and clean business datasets using secure warehousing pipelines.',
      items: ['Data Analytics', 'Business Intelligence', 'Data Warehousing', 'ETL Pipelines', 'Big Data configurations']
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & SEO',
      icon: <BarChart3 size={24} />,
      routePath: '/services/seo',
      description: 'Optimize search presence and organic conversion pathways using crawlable site blueprints.',
      items: ['Search Engine Optimization (SEO)', 'Technical SEO audits', 'Local & Enterprise SEO', 'Programmatic SEO grids', 'PPC Google & Meta Ads', 'Conversion Optimization (CRO)']
    },
    {
      id: 'branding',
      title: 'Branding & Design',
      icon: <Palette size={24} />,
      routePath: '/services/software-development',
      description: 'Craft unified Figma mockups, brand assets, and digital products.',
      items: ['Brand Identity', 'Logo Design', 'Graphic Design', 'Motion Graphics', 'Product UI Design']
    },
    {
      id: 'consulting',
      title: 'Consulting & Strategy',
      icon: <Briefcase size={24} />,
      routePath: '/services/it-consulting',
      description: 'Consult on technology stacks, product roadmaps, and digital transformation schedules.',
      items: ['IT Consulting', 'Digital Transformation', 'Technology Strategy', 'Product Strategy', 'Startup Consulting', 'CTO as a Service']
    },
    {
      id: 'automation',
      title: 'Workflow Automation',
      icon: <Zap size={24} />,
      routePath: '/services/automation',
      description: 'Build script triggers and bot tasks to automate manual business processes.',
      items: ['Workflow Automation', 'Business Process Automation', 'CRM Automation', 'AI Workflow Automation']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Solutions' },
    { id: 'eng', label: 'Engineering & DevOps' },
    { id: 'ai-data', label: 'AI, Automation & Data' },
    { id: 'marketing-consult', label: 'Growth, Marketing & Advisory' }
  ];

  const getCategoryGroup = (pillarId: string): string => {
    if (['software-engineering', 'cloud', 'devops', 'cybersecurity'].includes(pillarId)) return 'eng';
    if (['ai', 'data-engineering', 'automation'].includes(pillarId)) return 'ai-data';
    return 'marketing-consult';
  };

  const filteredPillars = activeCategory === 'all'
    ? pillars
    : pillars.filter(p => getCategoryGroup(p.id) === activeCategory);

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Pillars of Delivery</span>
          <h2 className="section-title">Technology &amp; Business Solutions</h2>
          <p className="section-desc">
            We provide structured engineering, cognitive systems, secure hosting, and digital growth services tailored to your objectives.
          </p>
        </div>

        {/* Categories Bar */}
        <div className={styles.filterTabs}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`${styles.tabBtn} ${activeCategory === cat.id ? styles.activeTabBtn : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Pillars Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredPillars.map((pillar) => (
              <motion.div
                layout
                key={pillar.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={styles.card}
              >
                <div className={styles.iconWrapper}>
                  {pillar.icon}
                </div>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc} style={{ fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {pillar.description}
                </p>
                
                {/* Embedded Bullet List */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', margin: '0.5rem 0 1rem' }}>
                  {pillar.items.slice(0, 4).map((item, idx) => (
                    <span 
                      key={idx} 
                      style={{ fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.02)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}
                    >
                      {item}
                    </span>
                  ))}
                  {pillar.items.length > 4 && (
                    <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', color: 'var(--accent-light)', fontWeight: 600 }}>
                      +{pillar.items.length - 4} more
                    </span>
                  )}
                </div>

                <button 
                  onClick={() => navigate(pillar.routePath)}
                  className={styles.learnMoreBtn}
                  aria-label={`Explore our ${pillar.title} engineering services`}
                >
                  Explore {pillar.title} Capabilities
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
