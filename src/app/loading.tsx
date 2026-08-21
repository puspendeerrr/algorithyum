'use client';

export default function Loading() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '3px solid rgba(0, 82, 255, 0.15)',
          borderTopColor: 'var(--accent, #0052ff)',
          animation: 'spin 0.8s linear infinite'
        }} />
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted, #808090)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Initializing View...
        </span>
      </div>
      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
