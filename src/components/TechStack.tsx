import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TechStack.module.css';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'data';
  logo: React.ReactNode;
}

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & Mobile' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'data', label: 'AI, ML & Databases' },
  ];

  const techData: TechItem[] = [
    // Frontend
    {
      name: 'React',
      category: 'frontend',
      logo: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%">
          <circle cx="0" cy="0" r="2.05" fill="#00d8ff"/>
          <g stroke="#00d8ff" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    },
    {
      name: 'Next.js',
      category: 'frontend',
      logo: (
        <svg viewBox="0 0 180 180" width="100%" height="100%">
          <circle cx="90" cy="90" r="85" fill="none" stroke="currentColor" strokeWidth="8"/>
          <path d="M140 140 L81 60 L68 60 L68 120 L80 120 L80 80 L130 140 Z" fill="currentColor"/>
          <rect x="118" y="60" width="12" height="60" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Flutter',
      category: 'frontend',
      logo: (
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <path d="M 283.4 17.5 L 149.2 151.7 L 283.4 285.9 L 205.2 285.9 L 71 151.7 L 205.2 17.5 Z" fill="#02569B"/>
          <path d="M 283.4 285.9 L 216.4 353 L 149.2 285.9 Z" fill="#0175C2"/>
          <path d="M 283.4 285.9 L 205.2 285.9 L 149.2 342 L 205.2 398.2 L 283.4 398.2 L 227.3 342 Z" fill="#13B9FD"/>
        </svg>
      )
    },
    {
      name: 'React Native',
      category: 'frontend',
      logo: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    },
    // Backend
    {
      name: 'Node.js',
      category: 'backend',
      logo: (
        <svg viewBox="0 0 256 295" width="100%" height="100%">
          <path d="M141.5 5.5l101 58.3c5.3 3.1 8.5 8.7 8.5 14.8v116.5c0 6.1-3.2 11.7-8.5 14.8l-101 58.3c-5.3 3.1-11.7 3.1-17 0l-101-58.3c-5.3-3.1-8.5-8.7-8.5-14.8V78.6c0-6.1 3.2-11.7 8.5-14.8l101-58.3c5.3-3.1 11.7-3.1 17 0z" fill="none" stroke="#689f63" strokeWidth="10"/>
          <path d="M128 47L58 87.4v80.7l70 40.4 70-40.4V87.4L128 47z" fill="#689f63"/>
        </svg>
      )
    },
    {
      name: 'Python',
      category: 'backend',
      logo: (
        <svg viewBox="0 0 110 110" width="100%" height="100%">
          <path d="M55 2C32.1 2 33.9 11.8 33.9 11.8l0 10.8 21.6 0 0 3.2-30.8 0C13.2 25.8 2 35.7 2 54.3c0 18.6 9.8 17.6 9.8 17.6l10.8 0 0-15.1c0-10.8 9-19.4 19.4-19.4l30.2 0c0 0 9.8 0.1 9.8-9.8L82 22.8C82 22.8 82.5 2 55 2z" fill="#306998"/>
          <path d="M55 108c22.9 0 21.1-9.8 21.1-9.8l0-10.8-21.6 0 0-3.2 30.8 0c11.5 0 22.7-9.9 22.7-28.5 0-18.6-9.8-17.6-9.8-17.6l-10.8 0 0 15.1c0 10.8-9 19.4-19.4 19.4l-30.2 0c0 0-9.8-0.1-9.8 9.8l0 14.8C28 97.2 27.5 108 55 108z" fill="#ffd43b"/>
        </svg>
      )
    },
    {
      name: 'Java',
      category: 'backend',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%">
          <path d="M96 220c-15 0-24-5-24-12 0-18 42-16 68-16 22 0 46 1 46 11 0 7-9 17-90 17zm70-42c26 0 42 6 42 16s-16 16-42 16-42-6-42-16 16-16 42-16z" fill="#5382a1"/>
          <path d="M123 150c5-35 22-54 22-77 0-33-21-48-21-48s1 21-8 44c-11 25-18 47-18 73 0 11 5 18 10 24-5-3-9-9-9-17-1-18 6-36 12-57 5-18 8-36 8-52 0 0 12 17 8 46-4 28-19 46-21 73-1 9 4 15 10 21-4-2-7-6-8-12zm42-12c8-27 16-45 16-65 0-26-17-38-17-38s1 17-6 35c-8 20-14 38-14 59 0 9 4 15 8 20-4-2-7-5-7-10 0-15 5-29 10-46 4-15 7-29 7-42 0 0 10 14 7 37-3 22-15 37-17 59-1 7 3 12 8 16-3-1-6-4-7-9z" fill="#f89820"/>
        </svg>
      )
    },
    {
      name: 'Go',
      category: 'backend',
      logo: (
        <svg viewBox="0 0 256 100" width="100%" height="100%">
          <path d="M50 50c0 25-18 40-40 40S0 75 0 50 10 10 30 10s20 15 20 30zm-28 0c0-12-3-22-10-22s-10 10-10 22 3 22 10 22 10-10 10-22z" fill="#00acd7"/>
          <path d="M85 50 L85 65 L65 65 L65 35 L95 35 L95 50 L75 50" fill="none" stroke="#00acd7" strokeWidth="8"/>
        </svg>
      )
    },
    {
      name: '.NET',
      category: 'backend',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%">
          <circle cx="128" cy="128" r="110" fill="none" stroke="#512bd4" strokeWidth="12"/>
          <path d="M80 80 L176 176 M176 80 L80 176" stroke="#512bd4" strokeWidth="14" strokeLinecap="round"/>
          <text x="128" y="145" fontFamily="var(--font-heading)" fontSize="54" fontWeight="800" fill="#512bd4" textAnchor="middle">NET</text>
        </svg>
      )
    },
    // Cloud
    {
      name: 'AWS',
      category: 'cloud',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%">
          <path d="M128 30 C70 30 40 65 40 105 c0 35 25 55 45 55 10 0 15-5 15-12 0-10-10-25-10-40 0-25 20-45 50-45 25 0 45 15 45 35 0 20-15 35-35 35-10 0-20-5-25-10 l-10 20 c10 10 25 15 40 15 35 0 65-25 65-65 0-50-45-88-100-88z" fill="#ff9900"/>
          <path d="M50 190 Q128 230 206 190" fill="none" stroke="#ff9900" strokeWidth="10" strokeLinecap="round"/>
          <path d="M206 190 L190 175 M206 190 L195 208" stroke="#ff9900" strokeWidth="10" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'Azure',
      category: 'cloud',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%">
          <path d="M25 190 L100 50 L175 110 Z" fill="#0089d6"/>
          <path d="M100 50 L230 190 L130 190 Z" fill="#0072c6"/>
        </svg>
      )
    },
    {
      name: 'Google Cloud',
      category: 'cloud',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%">
          <path d="M128 20 L220 73 L220 180 L128 233 L36 180 L36 73 Z" fill="none" stroke="#4285f4" strokeWidth="12"/>
          <path d="M128 75 L180 105 L180 165 L128 195 L76 165 L76 105 Z" fill="#4285f4"/>
        </svg>
      )
    },
    {
      name: 'Docker',
      category: 'cloud',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%">
          <path d="M30 140 Q80 110 140 140 T226 140 L226 160 Q170 190 30 160 Z" fill="#2496ed"/>
          <rect x="70" y="90" width="22" height="22" fill="#2496ed" rx="2"/>
          <rect x="98" y="90" width="22" height="22" fill="#2496ed" rx="2"/>
          <rect x="126" y="90" width="22" height="22" fill="#2496ed" rx="2"/>
          <rect x="98" y="62" width="22" height="22" fill="#2496ed" rx="2"/>
        </svg>
      )
    },
    {
      name: 'Kubernetes',
      category: 'cloud',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%">
          <path d="M128 10 L223 55 L223 158 L128 245 L33 158 L33 55 Z" fill="none" stroke="#326ce5" strokeWidth="12"/>
          <path d="M128 60 L185 87 L185 145 L128 195 L71 145 L71 87 Z" fill="#326ce5"/>
        </svg>
      )
    },
    // Data & AI
    {
      name: 'PostgreSQL',
      category: 'data',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%">
          <path d="M128 30 C70 30 40 60 40 100 c0 35 25 55 55 55 5 15-5 35-25 45 l15 15 c30-10 45-35 45-60 35 0 65-25 65-65 0-40-30-70-68-70z" fill="#336791"/>
          <circle cx="105" cy="90" r="10" fill="#ffffff"/>
        </svg>
      )
    },
    {
      name: 'MongoDB',
      category: 'data',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%">
          <path d="M128 15 C100 60 70 120 70 160 c0 35 25 60 58 60 s58-25 58-60 c0-40-30-100-58-145z" fill="#47a248"/>
          <path d="M128 15 L128 220" stroke="#3fa03f" strokeWidth="10"/>
        </svg>
      )
    },
    {
      name: 'Redis',
      category: 'data',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%">
          <path d="M25 80 L128 30 L231 80 L128 130 Z" fill="#d82c20"/>
          <path d="M25 130 L128 80 L231 130 L128 180 Z" fill="#a82218"/>
          <path d="M25 180 L128 130 L231 180 L128 230 Z" fill="#781810"/>
        </svg>
      )
    },
    {
      name: 'TensorFlow',
      category: 'data',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%">
          <path d="M128 20 L220 70 L220 180 L128 230 L36 180 L36 70 Z" fill="none" stroke="#ff6f00" strokeWidth="12"/>
          <path d="M128 70 L180 97 L180 153 L128 180 L76 153 L76 97 Z" fill="#ff6f00"/>
        </svg>
      )
    },
    {
      name: 'PyTorch',
      category: 'data',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%">
          <path d="M128 25 C100 25 50 70 50 128 c0 50 40 85 78 85 c20 0 45-5 55-15 l-10-15 c-10 5-25 10-45 10 c-30 0-60-25-60-65 c0-40 30-75 60-75 c30 0 50 20 60 45 l18-5 c-10-35-40-64-78-64z" fill="#ee4c2c"/>
          <circle cx="150" cy="128" r="15" fill="#ee4c2c"/>
        </svg>
      )
    },
    {
      name: 'OpenAI APIs',
      category: 'data',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%" fill="currentColor">
          <path d="M220 115 c0-15-12-28-28-28 c-5 0-9 1-13 3 c-6-15-20-25-36-25 c-8 0-16 3-22 8 c-10-12-25-18-41-18 c-25 0-45 18-48 42 c-15 2-27 14-27 30 c0 15 12 28 28 28 c5 0 9-1 13-3 c6 15 20 25 36 25 c8 0 16-3 22-8 c10 12 25 18 41 18 c25 0 45-18 48-42 c15-2 27-14 27-30z M128 140 c-7 0-12-5-12-12 s5-12 12-12 s12 5 12 12 s-5 12-12 12z"/>
        </svg>
      )
    },
    {
      name: 'LangChain',
      category: 'data',
      logo: (
        <svg viewBox="0 0 256 256" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="12">
          <rect x="50" y="80" width="100" height="60" rx="30"/>
          <rect x="106" y="116" width="100" height="60" rx="30"/>
        </svg>
      )
    }
  ];

  const filteredTech = activeTab === 'all' 
    ? techData 
    : techData.filter(t => t.category === activeTab);

  return (
    <section id="technologies" className={styles.techSection}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Technology Stack</span>
          <h2 className="section-title">Enterprise-Grade Tooling & Infrastructure</h2>
          <p className="section-desc">
            We design, build, and support software platforms using industry-proven developer ecosystems and cognitive frameworks.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className={styles.filterTabs} role="tablist" aria-label="Technology Stack Categories">
          {categories.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTabBtn : ''}`}
              aria-label={`Show ${tab.label}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div 
          layout 
          className={styles.grid}
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className={styles.card}
              >
                <div className={styles.cardGlow} />
                <div className={styles.iconWrapper}>
                  {tech.logo}
                </div>
                <span className={styles.techName}>{tech.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
