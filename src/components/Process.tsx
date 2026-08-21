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
      title: 'Understand',
      desc: 'We start by understanding your business, your goals, and what you need the software to do. We ask the right questions so we can build the right thing.',
      deliverables: ['Project requirements document', 'Feature list', 'Timeline estimate', 'Budget estimate']
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'We create a clear plan — what to build, which technologies to use, how long each part will take, and what the milestones look like.',
      deliverables: ['Technical plan', 'Technology stack selection', 'Project milestones', 'Development roadmap']
    },
    {
      num: '03',
      title: 'Design',
      desc: 'We design the user interface — how your software will look and feel. We create mockups so you can see it before we start building.',
      deliverables: ['UI mockups', 'User flow diagrams', 'Mobile-responsive layouts', 'Design approval']
    },
    {
      num: '04',
      title: 'Build',
      desc: 'Our developers write clean, well-tested code. We build your software in stages and share progress with you regularly.',
      deliverables: ['Working software builds', 'Regular progress demos', 'Clean, documented code', 'API integrations']
    },
    {
      num: '05',
      title: 'Test',
      desc: 'We thoroughly test everything — functionality, performance, security, and usability. We fix bugs before launch, not after.',
      deliverables: ['Quality assurance testing', 'Bug fixes', 'Performance testing', 'User acceptance testing']
    },
    {
      num: '06',
      title: 'Launch',
      desc: 'We help you launch your software — setting up hosting, deploying to app stores, or going live on the web. We make sure everything works smoothly.',
      deliverables: ['Production deployment', 'App store submission', 'Go-live support', 'Launch checklist']
    },
    {
      num: '07',
      title: 'Support',
      desc: 'After launch, we don\'t disappear. We offer ongoing support, fix issues quickly, and help you add new features as your business grows.',
      deliverables: ['Bug fixes & updates', 'Performance monitoring', 'Feature additions', 'Ongoing maintenance']
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
          <span className="section-subtitle">Our Process</span>
          <h2 className="section-title">How We Work</h2>
          <p className="section-desc">
            We follow a clear, step-by-step process so you always know what&apos;s happening and what to expect next.
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
              <span className={styles.detailNumber}>Step {currentStep.num}</span>
              <h3 className={styles.detailTitle}>{currentStep.title}</h3>
              <p className={styles.detailDesc}>{currentStep.desc}</p>
            </div>

            <div className={styles.detailRight}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                <ChevronRight size={18} style={{ color: 'var(--accent-light)' }} />
                What You Get
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
