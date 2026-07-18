import React from 'react';
import { ArrowRight, Briefcase, Code, Terminal, EyeOff } from 'lucide-react';

interface CareersPageProps {
  onOpenContact: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onOpenContact }) => {
  const standards = [
    {
      title: 'Type-Safe Codebases',
      icon: <Terminal size={20} />,
      desc: 'We enforce static compilation checks, strict null types, and comprehensive interface declarations in all projects.'
    },
    {
      title: 'Decoupled Architectures',
      icon: <Code size={20} />,
      desc: 'We design microservices, isolated database routers, and serverless loops rather than complex, entangled systems.'
    },
    {
      title: 'Factual Scope Commitments',
      icon: <EyeOff size={20} />,
      desc: 'We evaluate features against constraints honestly, avoiding fictional timelines, inflated velocity claims, or hidden budgets.'
    }
  ];

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left' }}>
        
        {/* Page Header */}
        <header style={{ marginBottom: '4.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
            Hiring &amp; Alignment
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }} className="text-gradient">
            Engineering Careers
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            We align with senior technical developers and cloud security experts who value code integrity and transparent timelines.
          </p>
        </header>

        {/* Culture / Selection Guidelines */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.0rem', fontWeight: 800, marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            Hiring Standards
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            At Algorithyum, we reject the typical marketing claims and look for senior engineers who build solid database schemas, write secure scripts, and prioritize codebase simplicity over complex patterns.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {standards.map((std, idx) => (
              <div 
                key={idx} 
                className="glass-panel" 
                style={{ padding: '2rem 2.5rem', borderRadius: 'var(--border-radius-sm)', display: 'grid', gridTemplateColumns: '50px 1fr', gap: '1rem', alignItems: 'center' }}
              >
                <div style={{ color: 'var(--accent-light)' }} aria-hidden="true">{std.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.25rem' }}>{std.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{std.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Honest Hiring Statement (No Fictional Vacancies) */}
        <section className="glass-panel" style={{ padding: '3rem', borderRadius: 'var(--border-radius-md)', border: '1.5px dashed var(--border-color)', background: 'rgba(255, 255, 255, 0.01)', display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ padding: '1rem', borderRadius: '50%', background: 'rgba(0, 82, 255, 0.05)', color: 'var(--accent-light)' }} aria-hidden="true">
            <Briefcase size={36} />
          </div>
          
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', width: '100%', textAlign: 'center' }}>Open Positions Coming Soon</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.6', fontSize: '0.95rem' }}>
            We are currently not listing any open full-time positions, and all active vacancies remain closed. However, we are always open to networking with experienced contract consultants, security pen-testers, or performance SEO consultants.
          </p>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.6', fontSize: '0.95rem' }}>
            If you want to share your technical background for future consulting projects, please send your details and CV link directly to our team.
          </p>
          <button onClick={onOpenContact} className="btn btn-primary" style={{ marginTop: '1rem' }} aria-label="Transmit CV and candidate details to our engineers">
            Transmit CV &amp; Details
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </section>

      </div>
    </div>
  );
};
