import React from 'react';

export const PageLoader: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%', background: 'var(--bg-primary)', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        {/* Loading Spinner */}
        <div style={{ width: '48px', height: '48px', border: '3px solid rgba(0, 82, 255, 0.1)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          Initializing Platform Modules...
        </span>
      </div>
      
      {/* Inline styles for spinner animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
