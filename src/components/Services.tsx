'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Cpu, Smartphone, Gamepad2, Bot,
  BarChart3, ArrowRight, Globe, RefreshCw, Layers
} from 'lucide-react';
import { useAppNavigation } from '@/lib/utils/useNavigation';
import styles from './Services.module.css';

interface ServicePillar {
  id: string;
  title: string;
  icon: React.ReactNode;
  routePath: string;
  description: string;
  items: string[];
}

interface ServicesProps {
  hideHeader?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ hideHeader = false }) => {
  const { navigate } = useAppNavigation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const pillars: ServicePillar[] = [
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      icon: <Code size={24} />,
      routePath: '/services/software-development',
      description: 'Custom software built around your specific business needs — from internal tools to full SaaS products.',
      items: ['Business Software', 'SaaS Products', 'Custom Applications', 'API Development']
    },
    {
      id: 'erp-system',
      title: 'ERP System Development',
      icon: <Layers size={24} />,
      routePath: '/services/erp',
      description: 'Custom ERP software, inventory systems, CRM, HRMS, and business management tools.',
      items: ['Manufacturing ERP', 'Inventory & Warehouse', 'CRM & HRMS', 'Billing & POS']
    },
    {
      id: 'software-redesign',
      title: 'Software Redesign & Modernization',
      icon: <RefreshCw size={24} />,
      routePath: '/services/software-redesign',
      description: 'We update old, slow software — making it faster, more modern, and easier to maintain.',
      items: ['Legacy Software Updates', 'Code Refactoring', 'UI/UX Redesign', 'Database Migration']
    },
    {
      id: 'web-development',
      title: 'Web Development',
      icon: <Globe size={24} />,
      routePath: '/services/web-development',
      description: 'Fast, modern websites and web applications that look great and work on all devices.',
      items: ['Business Websites', 'Web Applications', 'E-commerce', 'Performance Optimization']
    },
    {
      id: 'android-app',
      title: 'Android App Development',
      icon: <Smartphone size={24} />,
      routePath: '/services/android-app-development',
      description: 'Native and cross-platform Android apps that are fast, reliable, and ready for the Play Store.',
      items: ['Native Android Apps', 'Material Design UI', 'Offline Support', 'Play Store Publishing']
    },
    {
      id: 'ios-app',
      title: 'iOS App Development',
      icon: <Smartphone size={24} />,
      routePath: '/services/ios-app-development',
      description: 'iOS apps for iPhone and iPad — smooth, secure, and ready for the App Store.',
      items: ['Native iOS Apps', 'Apple Design Guidelines', 'Push Notifications', 'App Store Publishing']
    },
    {
      id: 'cross-platform',
      title: 'Cross Platform App Development',
      icon: <Smartphone size={24} />,
      routePath: '/services/cross-platform-app-development',
      description: 'One app that works on both Android and iOS — built with Flutter or React Native.',
      items: ['Flutter Apps', 'React Native Apps', 'Shared Backend', 'Both App Stores']
    },
    {
      id: 'game-dev',
      title: 'Game Development',
      icon: <Gamepad2 size={24} />,
      routePath: '/services/game-development',
      description: 'Mobile games and casual games for Android and iOS — fun, engaging, and ready for the stores.',
      items: ['Mobile Games', '2D Games', 'Casual Games', 'Multiplayer Features']
    },
    {
      id: 'ai-integration',
      title: 'AI Integration',
      icon: <Cpu size={24} />,
      routePath: '/services/ai-integration',
      description: 'We add AI features to your existing software — chatbots, smart search, content generation, and more.',
      items: ['AI Chatbots', 'Content Generation', 'Smart Search', 'Data Analysis']
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      icon: <Bot size={24} />,
      routePath: '/services/ai-automation',
      description: 'AI-powered tools that automate repetitive tasks so your team can focus on important work.',
      items: ['Workflow Automation', 'Email & Ticket Sorting', 'Document Processing', 'Business Process Automation']
    },
    {
      id: 'seo',
      title: 'SEO Services',
      icon: <BarChart3 size={24} />,
      routePath: '/services/seo',
      description: 'We help your website rank higher on Google so more people find your business online.',
      items: ['Technical SEO', 'On-Page SEO', 'Local SEO', 'SEO Audits & Strategy']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'software-apps', label: 'Software & ERP' },
    { id: 'ai-automation', label: 'AI & Automation' },
    { id: 'growth', label: 'Growth' }
  ];

  const getCategoryGroup = (pillarId: string): string => {
    if (['custom-software', 'erp-system', 'software-redesign', 'web-development', 'android-app', 'ios-app', 'cross-platform', 'game-dev'].includes(pillarId)) return 'software-apps';
    if (['ai-integration', 'ai-automation'].includes(pillarId)) return 'ai-automation';
    return 'growth';
  };

  const filteredPillars = activeCategory === 'all'
    ? pillars
    : pillars.filter(p => getCategoryGroup(p.id) === activeCategory);

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-header">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-desc">
              We build custom software, ERP systems, websites, mobile apps, games, AI-powered solutions and help businesses grow with SEO.
            </p>
          </div>
        )}

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
                  aria-label={`Learn more about our ${pillar.title} services`}
                >
                  Learn More
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
