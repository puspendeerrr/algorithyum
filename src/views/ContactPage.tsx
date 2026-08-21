'use client';

import React from 'react';
import { Mail, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const includeItems = [
    'Your Name',
    'Company',
    'Project Description',
    'Budget (optional)',
    'Timeline',
    'Contact Number',
  ];

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left' }}>
        
        {/* Page Header */}
        <header style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
            Get in Touch
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }} className="text-gradient">
            Let&apos;s Talk About Your Project
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Need a software, website, mobile app, game, AI or SEO solution? We&apos;d love to hear about your project.
          </p>
        </header>

        {/* Content Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'flex-start' }}>
          
          {/* Main Direct Email Card */}
          <div className="glass-panel" style={{ padding: '3rem', borderRadius: 'var(--border-radius-md)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-light)' }}>
                <Mail size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Us</span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>info@algorithyum.in</h2>
              </div>
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Tell us about your project — what you need, your timeline, and your budget. We&apos;ll get back to you with an honest assessment and a clear plan.
            </p>

            <div>
              <a
                href="mailto:info@algorithyum.in?subject=Project%20Inquiry"
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.9rem 2rem', fontSize: '1.05rem' }}
              >
                <Mail size={18} />
                Email Us
                <ArrowRight size={18} />
              </a>
            </div>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <Clock size={16} style={{ color: 'var(--accent-light)' }} />
              <span>We usually reply within 24 business hours.</span>
            </div>
          </div>

          {/* Right Column: What to Include Checklist */}
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-md)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              What to include in your email
            </h3>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {includeItems.map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;
