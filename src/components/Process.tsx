'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import styles from './Process.module.css';

interface Step {
  num: string;
  title: string;
  desc: string;
  deliverables: string[];
}

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      num: '01',
      title: 'Discover',
      desc: 'We conduct deep-dive technical alignment meetings, map out business logic, audit existing software infrastructure, and scope operational boundaries.',
      deliverables: ['Detailed Project Briefing', 'Infrastructure Security Audit', 'Technical Scope Document', 'Product Requirements Document']
    },
    {
      num: '02',
      title: 'Strategy',
      desc: 'We establish scalable microservices designs, database schemas, API specs, multi-region cloud mappings, and release cycle dates.',
      deliverables: ['System Architecture Design', 'Technology Stack selection', 'Milestones Roadmap', 'Threat Assessment Matrix']
    },
    {
      num: '03',
      title: 'Design',
      desc: 'Our design pod creates immersive Figma design systems, wireframe diagrams, and high-fidelity interactive user experiences.',
      deliverables: ['Figma Global Design System', 'Responsive UI Mockups', 'Interactive User Prototypes', 'UX User Journey Mapping']
    },
    {
      num: '04',
      title: 'Develop',
      desc: 'Our engineering teams write clean, TypeScript-based frontends, fast backend services (Python, Go, Node.js), and database configurations.',
      deliverables: ['Clean Git Repository access', 'API contracts & configurations', 'Modular Frontend layouts', 'Database sync scripts']
    },
    {
      num: '05',
      title: 'Test',
      desc: 'We execute comprehensive unit testing, automated E2E simulations, manual accessibility checks, and container vulnerability scans.',
      deliverables: ['Automated Test Reports', 'Penetration audit findings', 'WCAG accessibility checklist', 'Security scanner certificates']
    },
    {
      num: '06',
      title: 'Deploy',
      desc: 'We publish components safely using container registries, automated GitOps CI/CD pipelines, and multi-region Kubernetes configurations.',
      deliverables: ['Production deployment setup', 'CI/CD pipeline configurations', 'Cloud health alert systems', 'DNS & Certificate configurations']
    },
    {
      num: '07',
      title: 'Scale',
      desc: 'We set up server cache rings, balance high traffic flows, optimize queries, and run annual audits for ongoing feature expansion.',
      deliverables: ['Load test simulation metrics', 'Cache optimization logs', 'Annual scale plan advisory', '24/7 SLA monitoring setup']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeStep, steps.length]);

  const currentStep = steps[activeStep];
  const progressPercent = (activeStep / (steps.length - 1)) * 90;

  return (
    <section id="process" className={styles.processSection}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Our Lifecycle</span>
          <h2 className="section-title">The Engineering Blueprint</h2>
          <p className="section-desc">
            We follow a rigid, milestone-driven lifecycle that mitigates project risk, maximizes performance, and guarantees on-time delivery.
          </p>
        </div>

        {/* Stepper Node Row */}
        <div className={styles.stepperContainer}>
          {/* Horizontal Background Line */}
          <div className={styles.progressLine} />
          {/* Animated Glowing Active Line */}
          <motion.div 
            className={styles.activeProgressLine} 
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4 }}
          />

          <div className={styles.stepsRow}>
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`${styles.stepNode} ${isActive ? styles.activeNode : ''} ${isActive ? styles.activeNodeMobile : ''}`}
                  aria-label={`Step ${step.num}: ${step.title}`}
                >
                  <div className={styles.stepCircle}>
                    {step.num}
                  </div>
                  <span className={styles.stepTitle}>{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={styles.detailCard}
          >
            <div className={styles.detailLeft}>
              <span className={styles.detailNumber}>Phase {currentStep.num}</span>
              <h3 className={styles.detailTitle}>{currentStep.title}</h3>
              <p className={styles.detailDesc}>{currentStep.desc}</p>
            </div>

            <div className={styles.detailRight}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                <ChevronRight size={18} style={{ color: 'var(--accent-light)' }} />
                Key Phase Deliverables
              </h4>
              <ul className={styles.checkList}>
                {currentStep.deliverables.map((item, idx) => (
                  <li key={idx} className={styles.checkItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
