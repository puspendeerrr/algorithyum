import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RefreshCw, Cpu, Layers, BarChart3, Calendar, 
  CheckCircle2, ArrowRight, Settings, Sparkles 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Solutions.module.css';

interface SolutionsProps {
  onOpenConsultation?: () => void;
}

interface Solution {
  title: string;
  icon: React.ReactNode;
  challenge: string;
  delivery: string;
  metric: string;
  tags: string[];
  glowColor: string;
}

export const Solutions: React.FC<SolutionsProps> = () => {
  const navigate = useNavigate();
  const [selectedBottleneck, setSelectedBottleneck] = useState<string>('modernization');

  const solutionData: Solution[] = [
    {
      title: 'Monolithic Legacy Modernization',
      icon: <RefreshCw size={24} />,
      challenge: 'Legacy codebases and siloed database systems are difficult to scale, leading to service faults and high developer maintenance costs.',
      delivery: 'We run codebase audits, refactor codebases into decoupled microservices, secure data migrations, and configure modern Docker containers.',
      metric: '99.99% Uptime',
      tags: ['Docker', 'Microservices', 'REST APIs', 'PostgreSQL'],
      glowColor: 'rgba(0, 82, 255, 0.15)'
    },
    {
      title: 'Secure Generative AI Integration',
      icon: <Cpu size={24} />,
      challenge: 'Enterprises want to deploy generative large language models but cannot expose proprietary data to open public API registries.',
      delivery: 'We build private Retrieval-Augmented Generation (RAG) models, design autonomous agent tools, and deploy guards to prevent hallucinations.',
      metric: 'Zero-Leak Security',
      tags: ['OpenAI', 'RAG', 'LangChain', 'Python'],
      glowColor: 'rgba(139, 92, 246, 0.15)'
    },
    {
      title: 'Infrastructure Scaling & DevOps CI/CD',
      icon: <Layers size={24} />,
      challenge: 'Manual deployment pipelines slow feature launches, while static server structures cause downtime during traffic surges.',
      delivery: 'We configure GitOps CI/CD pipelines, provision Kubernetes networks, and write Terraform templates to automate cloud deployment.',
      metric: '10x Build Speed',
      tags: ['Kubernetes', 'Terraform', 'GitHub Actions', 'AWS'],
      glowColor: 'rgba(6, 182, 212, 0.15)'
    },
    {
      title: 'Dynamic Organic Search Visibility (SEO)',
      icon: <BarChart3 size={24} />,
      challenge: 'Traditional ad platforms yield high client acquisition costs, while slow page speeds limit organic search indexing.',
      delivery: 'We build fast, accessible Next.js site templates, write dynamic JSON-LD schemas, and implement programmatic search visibility strategies.',
      metric: '99+ LightHouse',
      tags: ['Next.js', 'JSON-LD', 'Programmatic SEO', 'Lighthouse'],
      glowColor: 'rgba(16, 185, 129, 0.15)'
    }
  ];

  const diagnosticRecommendations: Record<string, { title: string; checklist: string[]; metric: string }> = {
    modernization: {
      title: 'Legacy Modernization Blueprint',
      checklist: [
        'Perform modular codebase dependencies audit',
        'Extract microservices & establish API contracts',
        'Dockerize services & coordinate migrations securely',
        'Establish automated integrations unit testing checks'
      ],
      metric: '99.99% Operational Availability'
    },
    ai: {
      title: 'Secure Generative AI Setup',
      checklist: [
        'Audit private data structures & storage pools',
        'Deploy Retrieval-Augmented Generation (RAG) loops',
        'Integrate LangChain autonomous workflow scripts',
        'Set up safety guardrails to prevent data leaks'
      ],
      metric: 'Zero Leak Security Guarantee'
    },
    devops: {
      title: 'Infrastructure DevOps Automations',
      checklist: [
        'Configure GitOps continuous deployment loops',
        'Deploy isolated multi-region Kubernetes nodes',
        'Write reusable Terraform cloud blueprints',
        'Establish Prometheus alert notification cycles'
      ],
      metric: '10x Build Cycle Accelerations'
    },
    seo: {
      title: 'Technical SEO Scaling Platform',
      checklist: [
        'Build server-rendered Next.js layouts',
        'Configure JSON-LD schema search entities',
        'Optimize images, static caching, & compression',
        'Launch programmatic database-linked index loops'
      ],
      metric: '+300% Organic Rank Performance'
    }
  };

  const selectedRecommendation = diagnosticRecommendations[selectedBottleneck];

  return (
    <div className={styles.solutionsSection}>
      <div className="container">
        
        {/* Page Header */}
        <header className={styles.pageHeader}>
          <span className={styles.subtitle}>
            Operational Alignments
          </span>
          <h1 className={`${styles.title} text-gradient`}>
            Business Solutions
          </h1>
          <p className={styles.desc}>
            We design secure software, optimize server loads, and scale digital visibility to solve actual business challenges.
          </p>
        </header>

        {/* Solutions Grid */}
        <section className={styles.grid}>
          {solutionData.map((sol, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={styles.card}
            >
              {/* Colored Glow Circle */}
              <div 
                className={styles.cardGlow} 
                style={{ background: `radial-gradient(circle, ${sol.glowColor} 0%, transparent 70%)` }}
              />

              <div className={styles.cardHeader}>
                <div 
                  className={styles.iconWrapper}
                  style={{ background: 'rgba(0, 82, 255, 0.05)', color: 'var(--accent-light)' }}
                >
                  {sol.icon}
                </div>
                <span 
                  className={styles.metricBadge}
                  style={{ 
                    color: sol.glowColor.replace('0.15', '1').replace('rgba', 'rgb'),
                    borderColor: sol.glowColor.replace('0.15', '0.3')
                  }}
                >
                  {sol.metric}
                </span>
              </div>

              <h2 className={styles.cardTitle}>{sol.title}</h2>

              <div className={styles.sectionsWrapper}>
                <div className={styles.infoSection}>
                  <span className={styles.sectionLabel}>The Challenge</span>
                  <p className={styles.sectionText}>{sol.challenge}</p>
                </div>
                
                <div className={styles.infoSection}>
                  <span className={styles.sectionLabel}>Our Delivery</span>
                  <p className={styles.deliveryText}>{sol.delivery}</p>
                </div>
              </div>

              {/* Technologies Tags */}
              <div className={styles.tagGroup}>
                {sol.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* Interactive Diagnostics Section */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header">
            <span className="section-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Settings size={14} className="spinning" />
              Blueprint Diagnostics
            </span>
            <h2 className={styles.diagnosticsTitle}>Interactive Solutions Configurator</h2>
            <p className={styles.diagnosticsSubtitle}>
              Select your organization's primary technical bottleneck to generate a targeted engineering blueprint with recommended steps and metrics.
            </p>
          </div>

          <div className={styles.widgetCard}>
            <div className={styles.widgetGrid}>
              
              {/* Left Column: Selector */}
              <div>
                <span className={styles.widgetLabel}>Identify Primary Bottleneck</span>
                <div className={styles.optionsList}>
                  <button 
                    onClick={() => setSelectedBottleneck('modernization')}
                    className={`${styles.optionBtn} ${selectedBottleneck === 'modernization' ? styles.activeOptionBtn : ''}`}
                  >
                    <div>
                      <span className={styles.optionTitle}>Legacy Database &amp; Codebases</span>
                      <span className={styles.optionDesc}>Refactor monolithic codebases into containerized microservices.</span>
                    </div>
                    <div className={styles.optionCheck}>
                      {selectedBottleneck === 'modernization' && <ArrowRight size={14} />}
                    </div>
                  </button>

                  <button 
                    onClick={() => setSelectedBottleneck('ai')}
                    className={`${styles.optionBtn} ${selectedBottleneck === 'ai' ? styles.activeOptionBtn : ''}`}
                  >
                    <div>
                      <span className={styles.optionTitle}>AI Adoption &amp; Data Privacy</span>
                      <span className={styles.optionDesc}>Deploy private RAG architectures without public API leakage.</span>
                    </div>
                    <div className={styles.optionCheck}>
                      {selectedBottleneck === 'ai' && <ArrowRight size={14} />}
                    </div>
                  </button>

                  <button 
                    onClick={() => setSelectedBottleneck('devops')}
                    className={`${styles.optionBtn} ${selectedBottleneck === 'devops' ? styles.activeOptionBtn : ''}`}
                  >
                    <div>
                      <span className={styles.optionTitle}>Pipeline Failures &amp; Cloud Speeds</span>
                      <span className={styles.optionDesc}>Standardize environments with Kubernetes and GitOps templates.</span>
                    </div>
                    <div className={styles.optionCheck}>
                      {selectedBottleneck === 'devops' && <ArrowRight size={14} />}
                    </div>
                  </button>

                  <button 
                    onClick={() => setSelectedBottleneck('seo')}
                    className={`${styles.optionBtn} ${selectedBottleneck === 'seo' ? styles.activeOptionBtn : ''}`}
                  >
                    <div>
                      <span className={styles.optionTitle}>Low Organic Search Traffic</span>
                      <span className={styles.optionDesc}>Deploy server-side Next.js indexes and clean metadata schemas.</span>
                    </div>
                    <div className={styles.optionCheck}>
                      {selectedBottleneck === 'seo' && <ArrowRight size={14} />}
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Column: Blueprint recommendation */}
              <div>
                <span className={styles.widgetLabel}>Recommended Architecture</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedBottleneck}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className={styles.blueprintPanel}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '1rem', flexWrap: 'wrap' }}>
                      <h3 className={styles.blueprintTitle} style={{ flexGrow: 1 }}>{selectedRecommendation.title}</h3>
                      <span 
                        style={{ 
                          fontSize: '0.75rem', 
                          fontWeight: 700, 
                          color: 'var(--accent-light)',
                          background: 'rgba(0, 82, 255, 0.05)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(0, 82, 255, 0.15)'
                        }}
                      >
                        {selectedRecommendation.metric}
                      </span>
                    </div>

                    <div className={styles.blueprintDivider} />

                    <ul className={styles.checkList}>
                      {selectedRecommendation.checklist.map((item, checklistIdx) => (
                        <li key={checklistIdx} className={styles.checkItem}>
                          <CheckCircle2 size={16} className={styles.checkIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => navigate('/contact')}
                      className={`btn btn-primary ${styles.blueprintCTA}`}
                      aria-label={`Get started with our ${selectedRecommendation.title}`}
                    >
                      Initialize Blueprint Build
                      <Sparkles size={16} style={{ marginLeft: '0.5rem' }} />
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        {/* Action Panel */}
        <section className={styles.ctaBanner}>
          <div className={styles.ctaGlow} />
          <h2 className={styles.ctaTitle}>Align your systems with modern technology solutions</h2>
          <p className={styles.ctaDesc}>
            Partner with Algorithyum to migrate legacy services, deploy secure AI tooling, or automate DevOps pipelines. Let's start building today.
          </p>
          <button 
            onClick={() => navigate('/contact')} 
            className="btn btn-primary" 
            aria-label="Book a virtual briefing session with our directors"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 1 }}
          >
            Book Briefing Session
            <Calendar size={18} aria-hidden="true" />
          </button>
        </section>

      </div>
    </div>
  );
};
