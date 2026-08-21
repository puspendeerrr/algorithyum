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
  const [activeId, setActiveId] = useState<string>('quality');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const data: Differentiator[] = [
    {
      id: 'quality',
      title: 'Clean, Quality Code',
      desc: 'We write clean, well-organized code that is easy to read, test, and maintain. No shortcuts, no messy workarounds.',
      focus: 'Code Quality',
      focusLabel: 'Clean & maintainable'
    },
    {
      id: 'communication',
      title: 'Fast Communication',
      desc: 'We respond quickly, give regular updates, and keep you in the loop at every stage of your project. No ghosting, no surprises.',
      focus: 'Quick Response',
      focusLabel: 'Regular project updates'
    },
    {
      id: 'pricing',
      title: 'Transparent Pricing',
      desc: 'We give you a clear quote upfront with no hidden costs. You know exactly what you\'re paying for before the project starts.',
      focus: 'Honest Pricing',
      focusLabel: 'No hidden costs'
    },
    {
      id: 'business',
      title: 'Business-Focused Solutions',
      desc: 'We don\'t just write code — we understand your business goals and build solutions that actually help you grow and save time.',
      focus: 'Business Results',
      focusLabel: 'Built for your goals'
    },
    {
      id: 'modern',
      title: 'Modern Technologies',
      desc: 'We use proven, modern technologies like React, Next.js, Node.js, Flutter, and OpenAI — tools that are reliable and well-supported.',
      focus: 'Modern Stack',
      focusLabel: 'Proven technologies'
    },
    {
      id: 'delivery',
      title: 'Reliable Delivery',
      desc: 'We set realistic deadlines and stick to them. We break projects into milestones so you can see real progress every week.',
      focus: 'On-Time Delivery',
      focusLabel: 'Milestone-based progress'
    },
    {
      id: 'support',
      title: 'Long-Term Support',
      desc: 'We don\'t disappear after launch. We offer ongoing support, bug fixes, and feature updates to keep your software running smoothly.',
      focus: 'Ongoing Support',
      focusLabel: 'Post-launch maintenance'
    },
    {
      id: 'honest',
      title: 'Honest & Straightforward',
      desc: 'We tell you what\'s realistic and what\'s not. If something won\'t work, we\'ll say so. No overselling, no empty promises.',
      focus: 'Honest Advice',
      focusLabel: 'Realistic expectations'
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
          <span className="section-subtitle">Why Work With Us</span>
          <h2 className="section-title">Why Businesses Choose Algorithyum</h2>
          <p className="section-desc">
            We build software the right way — with clean code, honest communication, and a focus on your business goals.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Left Column: Telemetry Dashboard Mock */}
          <div className={styles.visualWrapper}>
            <div className={styles.dashboardMock}>
              <div className={styles.dbHeader}>
                <div className={styles.dbTitle}>
                  <ShieldCheck size={18} style={{ color: 'var(--accent-light)' }} />
                  <span>ALGORITHYUM PROJECT OVERVIEW</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <div className={styles.dot} />
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)' }}>ACTIVE</span>
                </div>
              </div>

              <div className={styles.dbGrid}>
                <div className={styles.dbCard}>
                  <span className={styles.dbLabel}>Current Focus</span>
                  <span className={styles.dbValue} style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>{currentItem.focus}</span>
                </div>
                <div className={styles.dbCard}>
                  <span className={styles.dbLabel}>What This Means</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {currentItem.focusLabel}
                  </span>
                </div>
              </div>

              <div>
                <span className={styles.dbLabel} style={{ marginBottom: '0.5rem', display: 'block' }}>
                  Project Progress
                </span>
                <div className={styles.waveCanvas}>
                  <canvas ref={canvasRef} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', textAlign: 'left', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Status</span>
                  <span style={{ fontWeight: 600 }}>On Track</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Code Quality</span>
                  <span style={{ fontWeight: 600, color: '#10b981' }}>CLEAN & TESTED</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Communication</span>
                  <span style={{ fontWeight: 600, color: 'var(--accent-light)' }}>Regular updates</span>
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
                            <span>{currentItem.focus}</span>
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
