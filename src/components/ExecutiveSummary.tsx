'use client';

import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface ExecutiveSummaryProps {
  title?: string;
  takeaways: string[];
}

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({
  title = 'Executive Summary & AI Key Takeaways',
  takeaways,
}) => {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <section 
      aria-label="Executive Briefing Summary"
      className="glass-panel"
      style={{
        padding: '1.75rem 2rem',
        borderRadius: 'var(--border-radius-sm)',
        border: '1px solid var(--accent)',
        background: 'rgba(0, 82, 255, 0.03)',
        marginBottom: '2.5rem',
        textAlign: 'left',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ color: 'var(--accent-light)', background: 'rgba(0, 82, 255, 0.1)', padding: '0.4rem', borderRadius: '6px', display: 'flex', alignItems: 'center' }}>
          <Sparkles size={18} />
        </div>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
          {title}
        </h3>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {takeaways.map((item, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            <CheckCircle2 size={16} style={{ color: 'var(--accent-light)', flexShrink: 0, marginTop: '0.2rem' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
