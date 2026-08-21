'use client';

import React from 'react';
import { getSitemapEntriesGrouped, SitemapEntry } from '@/lib/sitemap/sitemapEngine';
import { useAppNavigation } from '@/lib/utils/useNavigation';

interface SectionConfig {
  key: keyof ReturnType<typeof getSitemapEntriesGrouped>;
  title: string;
  gridSpan?: boolean;
}

const sections: SectionConfig[] = [
  { key: 'main', title: 'Main Pages' },
  { key: 'services', title: 'Software Services' },
  { key: 'erp', title: 'ERP Solutions' },
  { key: 'mobile-apps', title: 'Mobile App Development' },
  { key: 'ai', title: 'AI Services' },
  { key: 'seo', title: 'SEO Services' },
  { key: 'technologies', title: 'Technologies' },
  { key: 'industries', title: 'Industries' },
  { key: 'guides', title: 'Engineering Guides' },
  { key: 'comparisons', title: 'Comparison Pages' },
  { key: 'legal', title: 'Legal & Compliance' },
  { key: 'resources', title: 'Resources' },
  { key: 'case-studies', title: 'Case Studies' },
  { key: 'faq', title: 'FAQ Hub' },
  { key: 'cost', title: 'Cost & Pricing Guides' },
  { key: 'blog', title: 'Blog Articles', gridSpan: true },
];

export const SitemapPage: React.FC = () => {
  const { navigate } = useAppNavigation();
  const grouped = getSitemapEntriesGrouped();

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left' }}>
        
        {/* Page Header */}
        <header style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
            Site Directory
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }} className="text-gradient">
            HTML Sitemap &amp; Directory
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Complete directory of all public indexable pages, services, ERP solutions, mobile app development, AI features, SEO services, technologies, industries, blogs, guides, resources, case studies, comparisons, and legal policies on Algorithyum.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {sections.map(({ key, title, gridSpan }) => {
            const items = grouped[key] || [];
            return (
              <section
                key={key}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--border-radius-sm)',
                  border: '1px solid var(--border-color)',
                  ...(gridSpan ? { gridColumn: '1 / -1' } : {}),
                }}
              >
                <h2
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    marginBottom: '1.25rem',
                    color: 'var(--accent-light)',
                    borderBottom: '1px solid var(--border-color)',
                    paddingBottom: '0.5rem',
                  }}
                >
                  {title} ({items.length})
                </h2>
                {items.length === 0 ? (
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                    No pages published in this section yet.
                  </p>
                ) : (
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: gridSpan ? 'grid' : 'flex',
                      flexDirection: 'column',
                      gridTemplateColumns: gridSpan ? 'repeat(auto-fit, minmax(280px, 1fr))' : undefined,
                      gap: '0.75rem',
                    }}
                  >
                    {items.map((item: SitemapEntry) => (
                      <li key={item.path}>
                        <a
                          href={item.path}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(item.path);
                          }}
                          style={{
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                          }}
                        >
                          {item.title.split('|')[0].trim()}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default SitemapPage;
