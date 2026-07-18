import React, { useEffect } from 'react';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'cookies';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const privacyText = (
    <>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }} className="text-gradient">Privacy Policy</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Last Updated: July 11, 2026</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
        <p>
          At Algorithyum, we process operational payloads and client request parameters securely. This Privacy Policy documents our procedures regarding data collection, encryption, and client confidentiality.
        </p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1rem' }}>1. Data Storage &amp; Encryption</h2>
        <p>
          We do not host open public databases containing user identities. All consultation inquiry inputs are encrypted in transit (TLS 1.3) and stored inside isolated, password-secured repository structures.
        </p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1rem' }}>2. Compliance Alignments</h2>
        <p>
          Our network routing, Git access checks, and backup procedures are configured to align with standard SOC2 and GDPR requirements. We do not transfer operational information to third-party databases.
        </p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1rem' }}>3. Contact Pathways</h2>
        <p>
          If you have questions regarding database security audits or wish to purge your transmitted consultation records, please email our coordinators at info@algorithyum.in.
        </p>
      </div>
    </>
  );

  const termsText = (
    <>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }} className="text-gradient">Terms of Service</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Last Updated: July 11, 2026</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
        <p>
          These Terms of Service govern the technical consulting, codebase design, and organic SEO auditing services provided by Algorithyum.
        </p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1rem' }}>1. Consulting Engagements</h2>
        <p>
          All codebase refactorings, server script installations, and SEO updates are delivered on a contract consulting basis. Project timelines, milestones, and deliverables are defined in custom Statement of Work (SOW) documents signed by both parties.
        </p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1rem' }}>2. Factual Scopes &amp; Liability</h2>
        <p>
          We communicate development benchmarks and software constraints honestly. Algorithyum delivers custom system setups but does not guarantee specific external search rankings, commercial sales quantities, or third-party provider uptimes.
        </p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1rem' }}>3. IP Ownership</h2>
        <p>
          Unless otherwise stated in the active SOW, codebase ownership is fully assigned to the client upon receipt of final sprint payments.
        </p>
      </div>
    </>
  );

  const cookiesText = (
    <>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }} className="text-gradient">Cookie Policy</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Last Updated: July 11, 2026</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
        <p>
          Our web portal utilizes basic browser cache techniques and local cookies to optimize styling values and route variables.
        </p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1rem' }}>1. Theme Syncing</h2>
        <p>
          We utilize a local cookie parameter (<code>theme</code>) to store your preferred interface styling (Dark/Light mode) so that it remains active across subsequent page updates.
        </p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1rem' }}>2. Navigation Cache</h2>
        <p>
          We employ browser history state parameters to support our client-side pathname router, enabling fast back-and-forth page transitions without requiring full server redirects.
        </p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1rem' }}>3. Controlling Preferences</h2>
        <p>
          You can disable or delete browser cookies inside your individual browser preferences dashboard. Please note that disabling cookies may reset your styling preferences to the default dark theme setup.
        </p>
      </div>
    </>
  );

  const renderContent = () => {
    if (type === 'privacy') return privacyText;
    if (type === 'terms') return termsText;
    return cookiesText;
  };

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left' }}>
        {renderContent()}
      </div>
    </div>
  );
};
