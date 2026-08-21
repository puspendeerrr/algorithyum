'use client';

import { useEffect } from 'react';
import { AlertOctagon, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Router Runtime Error Caught:', error);
  }, [error]);

  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className="glass-panel" style={{ padding: '3rem', borderRadius: 'var(--border-radius-md)', maxWidth: '500px', border: '1px solid var(--border-color)' }}>
        <div style={{ color: '#ef4444', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
          <AlertOctagon size={48} />
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>System Exception Intercepted</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          An unexpected application state occurred. Our telemetry logs have captured this session context.
        </p>
        <button
          onClick={() => reset()}
          className="btn btn-primary"
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
        >
          <RefreshCw size={16} />
          Retry Pipeline Session
        </button>
      </div>
    </div>
  );
}
