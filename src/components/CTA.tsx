'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import styles from './CTA.module.css';

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
            <h2 className={`${styles.title} text-gradient`}>Let's Build the Future Together</h2>
            <p className={styles.desc}>
              Partner with Algorithyum to architect high-performance software, build reliable AI features, and secure your cloud infrastructure. Talk with our senior engineers today.
            </p>

            <div className={styles.actions}>
              <button onClick={onOpenContact} className="btn btn-primary">
                Get Started
                <ArrowRight size={18} />
              </button>
              <button onClick={onOpenConsultation} className="btn btn-secondary">
                <Calendar size={18} />
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
