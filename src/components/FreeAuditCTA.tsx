'use client';

import React from 'react';
import { Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { useAppNavigation } from '@/lib/utils/useNavigation';

interface FreeAuditCTAProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
}

export const FreeAuditCTA: React.FC<FreeAuditCTAProps> = ({
  title = 'Request an Enterprise Architecture & Codebase Audit',
  description = 'Our principal staff engineers review your existing backend scalability, cloud security posture, and API performance. Receive a detailed report within 48 hours.',
  buttonLabel = 'Schedule Technical Audit',
}) => {
  const { navigate } = useAppNavigation();

  return (
    <div 
      className="glass-panel"
      style={{
        padding: '3rem 2.5rem',
        borderRadius: 'var(--border-radius-md)',
        border: '1px solid var(--accent)',
        background: 'linear-gradient(135deg, rgba(0, 82, 255, 0.08) 0%, rgba(7, 9, 14, 0.95) 100%)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.25rem',
        marginTop: '3.5rem',
        marginBottom: '2rem',
      }}
    >
      <div style={{ color: 'var(--accent-light)', background: 'rgba(0, 82, 255, 0.15)', padding: '0.75rem', borderRadius: '50%' }}>
        <ShieldCheck size={32} />
      </div>
      <h3 style={{ fontSize: '1.85rem', fontWeight: 800, margin: 0, letterSpacing: '-0.01em' }} className="text-gradient">
        {title}
      </h3>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', fontSize: '1rem', lineHeight: '1.65', margin: 0 }}>
        {description}
      </p>
      <button 
        onClick={() => navigate('/contact')}
        className="btn btn-primary"
        style={{ padding: '0.85rem 2rem', fontSize: '0.95rem', marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
      >
        <Calendar size={18} />
        {buttonLabel}
        <ArrowRight size={16} />
      </button>
    </div>
  );
};
