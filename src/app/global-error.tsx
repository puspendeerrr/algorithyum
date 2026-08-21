'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ background: '#040407', color: '#ffffff', fontFamily: 'sans-serif', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Critical System Failure</h2>
          <p style={{ color: '#a0a0b0', marginBottom: '2rem' }}>{error?.message || 'A root level layout error occurred.'}</p>
          <button
            onClick={() => reset()}
            style={{ padding: '0.75rem 1.5rem', background: '#0052ff', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 700 }}
          >
            Reset Application
          </button>
        </div>
      </body>
    </html>
  );
}
