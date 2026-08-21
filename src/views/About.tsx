'use client';

import React from 'react';
import { ArrowRight, Code, ShieldAlert, Cpu, Heart } from 'lucide-react';
import { useAppNavigation } from '@/lib/utils/useNavigation';

interface AboutProps {
  onOpenConsultation?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const { navigate } = useAppNavigation();
  const handleConsultation = onOpenConsultation || (() => navigate('/contact'));

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left' }}>
        
        {/* Page Header */}
        <header style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
            Who We Are
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }} className="text-gradient">
            About Algorithyum
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            A professional technology solutions company focused on custom codebase engineering, cloud architectures, and digital growth.
          </p>
        </header>

        {/* Corporate Focus */}
        <section style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            Our Mission &amp; Approach
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Algorithyum provides engineering systems that resolve specific operational bottlenecks. We help organizations design digital products, scale backend infrastructures, audit security loopholes, deploy cognitive automations, and manage performance-focused SEO campaigns.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            We reject the typical startup marketing hype and focus strictly on qualitative code guidelines, rigorous unit testing, and transparent client sprints. We communicate realistic project scopes, budget guidelines, and delivery milestones.
          </p>
        </section>

        {/* Core Principles */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '2rem' }}>
            Engineering Standards
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ color: 'var(--accent-light)' }} aria-hidden="true"><Code size={24} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Code Integrity</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                We write modular, type-safe code using TypeScript, robust documentation headers, and comprehensive unit tests to ensure long-term codebase health.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ color: 'var(--accent-light)' }} aria-hidden="true"><ShieldAlert size={24} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Security-First Topologies</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                We build zero-trust API networks, encrypt data repositories, and configure strict container policies to protect your operational assets.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ color: 'var(--accent-light)' }} aria-hidden="true"><Cpu size={24} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Intelligent Optimization</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                We integrate machine learning models, structured database indexing, and programmatic templates to automate high-frequency routines.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ color: 'var(--accent-light)' }} aria-hidden="true"><Heart size={24} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Factual Honesty</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                We only display systems capabilities and operational details that we support. We do not display fabricated certifications or case summaries.
              </p>
            </div>
          </div>
        </section>

        {/* Honest Operational Setup */}
        <section style={{ marginBottom: '4rem', padding: '2.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-md)', background: 'rgba(255, 255, 255, 0.01)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '0.5rem' }}>Operational Details &amp; Offices</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Algorithyum operates as a remote-first engineering consulting team. We do not manage physical public branch offices or walk-in consultation buildings. All technical briefings, milestone reviews, and database architecture sessions are coordinated virtually using secure collaboration tools.
          </p>
        </section>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <button onClick={handleConsultation} className="btn btn-primary" aria-label="Schedule Virtual Briefing consultation">
            Schedule Virtual Briefing
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
