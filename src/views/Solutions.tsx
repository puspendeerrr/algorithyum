'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RefreshCw, Cpu, Smartphone, BarChart3, 
  CheckCircle2, ArrowRight, Settings, Sparkles, Code, Globe, Layers
} from 'lucide-react';
import { useAppNavigation } from '@/lib/utils/useNavigation';
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
  const { navigate } = useAppNavigation();
  const [selectedBottleneck, setSelectedBottleneck] = useState<string>('software');

  const solutionData: Solution[] = [
    {
      title: 'Custom Software for Your Business',
      icon: <Code size={24} />,
      challenge: 'Off-the-shelf software doesn\'t fit your business. You\'re working around limitations, using multiple disconnected tools, or doing things manually.',
      delivery: 'We build custom software designed specifically for how your business works — one system that does exactly what you need.',
      metric: 'Built for You',
      tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
      glowColor: 'rgba(0, 82, 255, 0.15)'
    },
    {
      title: 'Custom ERP & Management Software',
      icon: <Layers size={24} />,
      challenge: 'Managing inventory, billing, manufacturing, sales, and HR across separate tools creates confusion and data errors.',
      delivery: 'We build custom ERP software, CRM systems, inventory management, and POS software to run your whole business in one place.',
      metric: 'All-in-One ERP',
      tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
      glowColor: 'rgba(59, 130, 246, 0.15)'
    },
    {
      title: 'Modernize Outdated Software',
      icon: <RefreshCw size={24} />,
      challenge: 'Your current software is slow, looks outdated, uses old technology, and is becoming harder and more expensive to maintain.',
      delivery: 'We redesign and rebuild your software using modern technologies — making it faster, more reliable, and easier to update.',
      metric: 'Modern & Fast',
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
      glowColor: 'rgba(139, 92, 246, 0.15)'
    },
    {
      title: 'Mobile Apps for Android & iOS',
      icon: <Smartphone size={24} />,
      challenge: 'Your customers expect a mobile app, but building separate apps for Android and iOS is expensive and time-consuming.',
      delivery: 'We build cross-platform apps with Flutter or React Native — one codebase that works on both platforms, saving time and money.',
      metric: 'Both Platforms',
      tags: ['Flutter', 'React Native', 'Node.js', 'MongoDB'],
      glowColor: 'rgba(6, 182, 212, 0.15)'
    },
    {
      title: 'AI-Powered Features for Your Software',
      icon: <Cpu size={24} />,
      challenge: 'You want to add AI features like chatbots, smart search, or automation to your existing software but don\'t know where to start.',
      delivery: 'We integrate AI into your existing software — adding chatbots, content generation, document processing, and workflow automation.',
      metric: 'Smart & Automated',
      tags: ['OpenAI', 'LangChain', 'Python', 'Node.js'],
      glowColor: 'rgba(245, 158, 11, 0.15)'
    },
    {
      title: 'Websites That Rank on Google',
      icon: <Globe size={24} />,
      challenge: 'Your website is slow, doesn\'t rank well on Google, and isn\'t bringing in new customers or leads.',
      delivery: 'We build fast, modern websites with Next.js and optimize them for search engines so more people find your business online.',
      metric: 'SEO Optimized',
      tags: ['Next.js', 'React', 'SEO', 'JSON-LD'],
      glowColor: 'rgba(16, 185, 129, 0.15)'
    }
  ];

  const diagnosticRecommendations: Record<string, { title: string; checklist: string[]; metric: string }> = {
    software: {
      title: 'Custom Software Development',
      checklist: [
        'Understand your business requirements',
        'Plan the features and technical approach',
        'Design a clean, user-friendly interface',
        'Build, test, and launch your software'
      ],
      metric: 'Built Around Your Needs'
    },
    erp: {
      title: 'ERP System Development',
      checklist: [
        'Analyze business operations & inventory workflows',
        'Design custom ERP modules (CRM, Inventory, Billing, HRMS)',
        'Build database pipelines & POS connections',
        'Deploy, train staff, and support'
      ],
      metric: 'Centralized Business Operations'
    },
    modernize: {
      title: 'Software Modernization',
      checklist: [
        'Audit your current software and identify problems',
        'Plan the upgrade path and technology choices',
        'Rebuild using modern, maintainable code',
        'Migrate your data safely and go live'
      ],
      metric: 'Faster & More Reliable'
    },
    mobile: {
      title: 'Mobile App Development',
      checklist: [
        'Define app features and user flows',
        'Choose the right framework (Flutter or React Native)',
        'Build and test on both Android and iOS',
        'Publish to Google Play and Apple App Store'
      ],
      metric: 'Android + iOS from One Codebase'
    },
    ai: {
      title: 'AI Integration & Automation',
      checklist: [
        'Identify tasks that can be automated with AI',
        'Choose the right AI tools and models',
        'Integrate AI features into your existing software',
        'Test and optimize for accuracy and speed'
      ],
      metric: 'Save Hours of Manual Work'
    },
    seo: {
      title: 'SEO & Web Performance',
      checklist: [
        'Audit your website for technical SEO issues',
        'Optimize page speed and mobile experience',
        'Improve content, titles, and meta descriptions',
        'Set up tracking and measure improvements'
      ],
      metric: 'More Organic Traffic'
    }
  };

  const selectedRecommendation = diagnosticRecommendations[selectedBottleneck];

  return (
    <div className={styles.solutionsSection}>
      <div className="container">
        
        {/* Page Header */}
        <header className={styles.pageHeader}>
          <span className={styles.subtitle}>
            How We Help
          </span>
          <h1 className={`${styles.title} text-gradient`}>
            Solutions for Real Business Problems
          </h1>
          <p className={styles.desc}>
            We build software, ERP systems, mobile apps, and AI tools that solve actual business challenges — not theoretical ones.
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
                  <span className={styles.sectionLabel}>The Problem</span>
                  <p className={styles.sectionText}>{sol.challenge}</p>
                </div>
                
                <div className={styles.infoSection}>
                  <span className={styles.sectionLabel}>Our Solution</span>
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
              Find Your Solution
            </span>
            <h2 className={styles.diagnosticsTitle}>What Do You Need Help With?</h2>
            <p className={styles.diagnosticsSubtitle}>
              Select your main challenge and we&apos;ll show you how we can help.
            </p>
          </div>

          <div className={styles.widgetCard}>
            <div className={styles.widgetGrid}>
              
              {/* Left Column: Selector */}
              <div>
                <span className={styles.widgetLabel}>What&apos;s Your Main Challenge?</span>
                <div className={styles.optionsList}>
                  <button 
                    onClick={() => setSelectedBottleneck('software')}
                    className={`${styles.optionBtn} ${selectedBottleneck === 'software' ? styles.activeOptionBtn : ''}`}
                  >
                    <div>
                      <span className={styles.optionTitle}>I Need Custom Software</span>
                      <span className={styles.optionDesc}>Off-the-shelf tools don&apos;t fit my business needs.</span>
                    </div>
                    <div className={styles.optionCheck}>
                      {selectedBottleneck === 'software' && <ArrowRight size={14} />}
                    </div>
                  </button>

                  <button 
                    onClick={() => setSelectedBottleneck('erp')}
                    className={`${styles.optionBtn} ${selectedBottleneck === 'erp' ? styles.activeOptionBtn : ''}`}
                  >
                    <div>
                      <span className={styles.optionTitle}>I Need an ERP or Management System</span>
                      <span className={styles.optionDesc}>I need to manage inventory, billing, CRM or operations in one place.</span>
                    </div>
                    <div className={styles.optionCheck}>
                      {selectedBottleneck === 'erp' && <ArrowRight size={14} />}
                    </div>
                  </button>

                  <button 
                    onClick={() => setSelectedBottleneck('modernize')}
                    className={`${styles.optionBtn} ${selectedBottleneck === 'modernize' ? styles.activeOptionBtn : ''}`}
                  >
                    <div>
                      <span className={styles.optionTitle}>My Software is Outdated</span>
                      <span className={styles.optionDesc}>My current software is slow, old, or hard to maintain.</span>
                    </div>
                    <div className={styles.optionCheck}>
                      {selectedBottleneck === 'modernize' && <ArrowRight size={14} />}
                    </div>
                  </button>

                  <button 
                    onClick={() => setSelectedBottleneck('mobile')}
                    className={`${styles.optionBtn} ${selectedBottleneck === 'mobile' ? styles.activeOptionBtn : ''}`}
                  >
                    <div>
                      <span className={styles.optionTitle}>I Need a Mobile App</span>
                      <span className={styles.optionDesc}>I want an app for Android, iOS, or both.</span>
                    </div>
                    <div className={styles.optionCheck}>
                      {selectedBottleneck === 'mobile' && <ArrowRight size={14} />}
                    </div>
                  </button>

                  <button 
                    onClick={() => setSelectedBottleneck('ai')}
                    className={`${styles.optionBtn} ${selectedBottleneck === 'ai' ? styles.activeOptionBtn : ''}`}
                  >
                    <div>
                      <span className={styles.optionTitle}>I Want to Add AI Features</span>
                      <span className={styles.optionDesc}>I want chatbots, automation, or AI tools in my software.</span>
                    </div>
                    <div className={styles.optionCheck}>
                      {selectedBottleneck === 'ai' && <ArrowRight size={14} />}
                    </div>
                  </button>

                  <button 
                    onClick={() => setSelectedBottleneck('seo')}
                    className={`${styles.optionBtn} ${selectedBottleneck === 'seo' ? styles.activeOptionBtn : ''}`}
                  >
                    <div>
                      <span className={styles.optionTitle}>My Website Doesn&apos;t Rank on Google</span>
                      <span className={styles.optionDesc}>I need better SEO and more organic traffic.</span>
                    </div>
                    <div className={styles.optionCheck}>
                      {selectedBottleneck === 'seo' && <ArrowRight size={14} />}
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Column: Blueprint recommendation */}
              <div>
                <span className={styles.widgetLabel}>How We&apos;ll Help</span>
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
                      aria-label={`Get started with ${selectedRecommendation.title}`}
                    >
                      Get Free Consultation
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
          <h2 className={styles.ctaTitle}>Have a project in mind? Let&apos;s talk.</h2>
          <p className={styles.ctaDesc}>
            Whether you need custom software, ERP development, a mobile app, AI features, or SEO help — we&apos;re ready to help you get started.
          </p>
          <button 
            onClick={() => navigate('/contact')} 
            className="btn btn-primary" 
            aria-label="Get in touch with us about your project"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 1 }}
          >
            Get in Touch
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </section>

      </div>
    </div>
  );
};

export default Solutions;
