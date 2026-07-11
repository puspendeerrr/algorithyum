import React from 'react';
import { useNavigate } from 'react-router-dom';
import { guideMap } from '../data/guides';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

export const GuidesArchive: React.FC = () => {
  const navigate = useNavigate();
  const guidesList = Object.values(guideMap);

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <header style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem', marginBottom: '3rem', textAlign: 'left' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
            Technical Documentation
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }} className="text-gradient">
            Engineering Guides
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Explore technical handbooks, path specifications, and database scaling blueprints prepared by our architectural teams.
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {guidesList.map((guide) => (
            <article 
              key={guide.slug}
              className="glass-panel"
              style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer', textAlign: 'left' }}
              onClick={() => navigate(`/guides/${guide.slug}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate(`/guides/${guide.slug}`); } }}
              aria-label={`Read guide: ${guide.title}`}
            >
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>{guide.title.split(':')[0]}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>{guide.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '0.5rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={14} aria-hidden="true" />
                  {guide.datePublished}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={14} aria-hidden="true" />
                  {guide.readTime}
                </span>
              </div>

              <div style={{ color: 'var(--accent-light)', fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.75rem' }}>
                Read Detailed Guide
                <ArrowRight size={14} aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
