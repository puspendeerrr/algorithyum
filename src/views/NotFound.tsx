'use client';

import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { useAppNavigation } from '@/lib/utils/useNavigation';

export const NotFound: React.FC = () => {
  const { navigate } = useAppNavigation();

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%', background: 'var(--bg-primary)', padding: '2rem' }}>
      <div className="glass-panel" style={{ maxWidth: '480px', width: '100%', padding: '3rem', borderRadius: 'var(--border-radius-md)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ color: 'var(--accent)', background: 'rgba(0, 82, 255, 0.1)', padding: '1rem', borderRadius: '50%' }}>
          <AlertCircle size={40} />
        </div>
        
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }} className="text-gradient">404 - Not Found</h1>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
          The requested system node or database directory does not exist or has been relocated within our platform architecture.
        </p>

        <span 
          onClick={() => navigate('/')} 
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--accent-light)', fontWeight: 600, fontSize: '0.95rem', marginTop: '1rem', cursor: 'pointer' }}
          role="button"
          tabIndex={0}
        >
          <ArrowLeft size={16} />
          Return to Home
        </span>
      </div>
    </div>
  );
};

export default NotFound;
