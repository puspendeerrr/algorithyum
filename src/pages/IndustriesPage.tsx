import React from 'react';
import { Industries } from '../components/Industries';

export const IndustriesPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="container" style={{ textAlign: 'left', marginBottom: '2rem' }}>
        <header style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
            Operational Domains
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }} className="text-gradient">
            Industries
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            We adapt our core capabilities to address the compliance, scaling, and database needs of specific sectors.
          </p>
        </header>
      </div>
      
      {/* Industries grid module */}
      <Industries />
    </div>
  );
};
