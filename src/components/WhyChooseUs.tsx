import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, CheckCircle2 } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

interface Differentiator {
  id: string;
  title: string;
  desc: string;
  focus: string;
  focusLabel: string;
}

export const WhyChooseUs: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('innovation');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const data: Differentiator[] = [
    {
      id: 'innovation',
      title: 'Innovation First',
      desc: 'We integrate generative AI tools, cognitive agents, and performance-tuned backend services to ensure software projects remain modern and scalable.',
      focus: 'AI-First Design',
      focusLabel: 'Cognitive agent tools'
    },
    {
      id: 'security',
      title: 'Enterprise Security Focus',
      desc: 'We secure databases and codebases using identity verification policies, encryption, and compliance alignments for SOC2 and GDPR audits.',
      focus: 'Zero-Trust Setup',
      focusLabel: 'SOC2 / GDPR auditing'
    },
    {
      id: 'scale',
      title: 'Scalable Architecture',
      desc: 'We design decoupled microservices, database clusters, and auto-scaling cloud topologies that load balance traffic spikes.',
      focus: 'Auto-Scaling Pods',
      focusLabel: 'Kubernetes orchestration'
    },
    {
      id: 'global',
      title: 'Global Engineering Sync',
      desc: 'Our distributed pods synchronize daily workflows to maintain uniform documentation and code standardization.',
      focus: 'Distributed Pods',
      focusLabel: 'Collaborative task boards'
    },
    {
      id: 'engineers',
      title: 'Experienced Developers',
      desc: 'Our teams consist of senior software developers, system architects, and DevOps specialists with extensive technical experience.',
      focus: 'Senior Engineers',
      focusLabel: 'Technical Architects'
    },
    {
      id: 'agile',
      title: 'Agile Development',
      desc: 'We coordinate tasks on open backlog boards, distribute weekly sprint releases, and maintain close communication with client teams.',
      focus: 'Sprint Visibility',
      focusLabel: 'Continuous Feedback'
    },
    {
      id: 'support',
      title: 'Dedicated Engineering Support',
      desc: 'We offer support contracts and monitoring configurations to keep track of software performance and resolve server faults.',
      focus: 'SLA Support Plans',
      focusLabel: 'Incident monitoring'
    },
    {
      id: 'partner',
      title: 'Technology Strategic Advisory',
      desc: 'We provide annual codebase assessments, scale roadmap advisories, and system audits to assist long-term product planning.',
      focus: 'Technical Audits',
      focusLabel: 'Growth path analysis'
    }
  ];

  const currentItem = data.find(d => d.id === activeId) || data[0];

  // Draw simple telemetry wave in the canvas inside the dashboard mock
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let offset = 0;
    canvas.width = canvas.parentElement?.offsetWidth || 300;
    canvas.height = 60;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      // Draw primary wave
      const isLightTheme = document.documentElement.classList.contains('light-theme');
      const waveColor = isLightTheme ? 'rgba(0, 82, 255, 0.2)' : 'rgba(0, 210, 255, 0.2)';
      const strokeColor = isLightTheme ? '#0052ff' : '#00d2ff';

      for (let x = 0; x < canvas.width; x++) {
        const y = Math.sin(x * 0.02 + offset) * 15 + 30;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fillStyle = waveColor;
      ctx.fill();

      // Draw stroke line
      ctx.beginPath();
      ctx.moveTo(0, Math.sin(offset) * 15 + 30);
      for (let x = 0; x < canvas.width; x++) {
        const y = Math.sin(x * 0.02 + offset) * 15 + 30;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      offset += 0.05;
      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.parentElement?.offsetWidth || 300;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeId]);

  return (
    <section id="why-choose-us" className={styles.whySection}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Our Methodologies</span>
          <h2 className="section-title">Reliable Enterprise Integrations</h2>
          <p className="section-desc">
            We build software using clear standards, secure network topologies, and transparent sprint cycles.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Left Column: Telemetry Dashboard Mock */}
          <div className={styles.visualWrapper}>
            <div className={styles.dashboardMock}>
              <div className={styles.dbHeader}>
                <div className={styles.dbTitle}>
                  <ShieldCheck size={18} style={{ color: 'var(--accent-light)' }} />
                  <span>ALGORITHYUM SYSTEM METRIC</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <div className={styles.dot} />
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)' }}>MONITORING</span>
                </div>
              </div>

              <div className={styles.dbGrid}>
                <div className={styles.dbCard}>
                  <span className={styles.dbLabel}>Engineering Focus</span>
                  <span className={styles.dbValue} style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>{currentItem.focus}</span>
                </div>
                <div className={styles.dbCard}>
                  <span className={styles.dbLabel}>Application Spec</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {currentItem.focusLabel}
                  </span>
                </div>
              </div>

              <div>
                <span className={styles.dbLabel} style={{ marginBottom: '0.5rem', display: 'block' }}>
                  System Telemetry Simulation
                </span>
                <div className={styles.waveCanvas}>
                  <canvas ref={canvasRef} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', textAlign: 'left', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Target Config</span>
                  <span style={{ fontWeight: 600 }}>alg-monitored-node</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Security Layer</span>
                  <span style={{ fontWeight: 600, color: '#10b981' }}>SECURE TRANSMISSION</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Telemetry Sync</span>
                  <span style={{ fontWeight: 600, color: 'var(--accent-light)' }}>Active script loop</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className={styles.accordionList}>
            {data.map((item) => {
              const isActive = item.id === activeId;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`${styles.accordionItem} ${isActive ? styles.activeItem : ''}`}
                >
                  <div className={styles.accordionHeader}>
                    <span>{item.title}</span>
                    <div className={styles.iconCircle}>
                      <ChevronDown size={16} />
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className={styles.accordionContent}>
                          <p>{item.desc}</p>
                          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.75rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-light)' }}>
                            <CheckCircle2 size={14} />
                            <span>Practice: {currentItem.focus}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
