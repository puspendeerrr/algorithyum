import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/editorial-policy');
}

export default function EditorialPolicyPage() {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left', maxWidth: '840px' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
          EEAT & Governance
        </span>
        <h1 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 900, margin: '1rem 0 1.5rem', lineHeight: '1.2' }}>
          Editorial &amp; Technical Verification Policy
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Algorithyum is committed to publishing rigorously vetted software engineering reports, system design blueprints, and artificial intelligence benchmark audits.
        </p>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            1. Technical Peer Review Process
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            Every guide, benchmark, and architectural comparison published on Algorithyum undergoes multi-stage peer review by senior solution architects and principal staff engineers before publication. Code snippets are validated against production compilers and benchmarked for memory safety and execution latency.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            2. Fact Consistency & AI Ethics Policy
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            We do not publish unverified AI-generated content. All technical statements regarding software performance, database benchmarks, or cloud pricing models are backed by reproducible tests and empirical logs.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            3. Corrections and Updates
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            As technologies evolve, our engineering pods regularly audit existing documentation to ensure API signatures, library recommendations, and security practices remain current. Update dates are transparently noted on every article.
          </p>
        </section>
      </div>
    </div>
  );
}
