import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/security-policy');
}

export default function SecurityPolicyPage() {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left', maxWidth: '840px' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
          Infrastructure Security
        </span>
        <h1 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 900, margin: '1rem 0 1.5rem', lineHeight: '1.2' }}>
          Enterprise Security &amp; Compliance Statement
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Overview of security standards, encryption practices, Zero Trust network controls, and data privacy compliance across Algorithyum platforms.
        </p>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            1. Zero Trust Architecture
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            All systems operate under strict Zero Trust principles. Least-privilege role access, mutual TLS (mTLS), and continuous token authorization are enforced across all customer data pipelines and backend deployments.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            2. Encryption Standards
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            Data at rest is encrypted using AES-256 with managed KMS keys. Data in transit is protected via TLS 1.3 with strict HTTP Strict Transport Security (HSTS) preloading.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            3. Vulnerability Reporting
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            To report security concerns or submit a responsible disclosure report, contact our security response team at <a href="mailto:security@algorithyum.in" style={{ color: 'var(--accent-light)' }}>security@algorithyum.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
