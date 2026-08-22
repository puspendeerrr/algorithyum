'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import styles from './CTA.module.css';
import { trackCTAClick } from '@/lib/analytics';

interface CTAProps {
  onOpenConsultation: () => void;
  onOpenContact: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenConsultation, onOpenContact }) => {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className={styles.banner}
        >
          <div className={styles.glow} />
          
          <div className={styles.content}>
            <h2 className={`${styles.title} text-gradient`}>Ready to Start Your Project?</h2>
            <p className={styles.desc}>
              Whether you need custom software, a mobile app, a website, AI features, a game, or help with SEO — we&apos;re here to help. Let&apos;s talk about your project.
            </p>

            <div className={styles.actions}>
              <button
                onClick={() => {
                  trackCTAClick('Get Free Consultation', 'CTA Banner');
                  onOpenContact();
                }}
                className="btn btn-primary"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </button>
              <a href="mailto:info@algorithyum.in" className="btn btn-secondary">
                <Mail size={18} />
                Email Us
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
