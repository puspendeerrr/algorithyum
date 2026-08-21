import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata/generatePageMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/accessibility');
}

export default function AccessibilityStatementPage() {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left', maxWidth: '840px' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
          Inclusion & Standards
        </span>
        <h1 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 900, margin: '1rem 0 1.5rem', lineHeight: '1.2' }}>
          Accessibility Statement (WCAG 2.1 AA)
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Algorithyum is committed to digital accessibility for people of all abilities. We continuously improve user experience for everyone and apply the relevant accessibility standards.
        </p>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            1. Conformance Status
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. The Algorithyum digital platform strives for full conformance with WCAG 2.1 Level AA.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            2. Accessibility Features
          </h2>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '1.25rem' }}>
            <li>Semantic HTML5 landmark elements (`header`, `nav`, `main`, `footer`, `aside`)</li>
            <li>ARIA labels and keyboard navigation focus indicators</li>
            <li>High-contrast color palettes complying with contrast ratio guidelines</li>
            <li>Responsive typography and scale without layout clipping</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            3. Feedback
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            We welcome your feedback on the accessibility of the Algorithyum website. Please let us know if you encounter accessibility barriers: <a href="mailto:accessibility@algorithyum.in" style={{ color: 'var(--accent-light)' }}>accessibility@algorithyum.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
