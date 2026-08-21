'use client';

import React from 'react';
import {
  serviceMap,
  technologyMap,
  industryMap,
  comparisonMap,
  guideMap,
  blogMap
} from '../data/seoRegistry';
import { useAppNavigation } from '@/lib/utils/useNavigation';

export const SitemapPage: React.FC = () => {
  const { navigate } = useAppNavigation();

  const coreLinks = [
    { label: 'Home Page', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services Directory', path: '/services' },
    { label: 'Solutions Blueprint', path: '/solutions' },
    { label: 'Industries Index', path: '/industries' },
    { label: 'Technologies Hub', path: '/technologies' },
    { label: 'Blog Insights', path: '/blog' },
    { label: 'Guides Hub', path: '/guides' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Cookie Policy', path: '/cookies' }
  ];

  const serviceLinks = Object.values(serviceMap).map(s => ({
    label: s.title.split('|')[0].trim(),
    path: `/services/${s.slug}`
  }));

  const techLinks = Object.values(technologyMap).map(t => ({
    label: t.title.split('|')[0].trim(),
    path: `/${t.slug}`
  }));

  const industryLinks = Object.values(industryMap).map(i => ({
    label: i.title.split('|')[0].trim(),
    path: `/industries/${i.slug}`
  }));

  const comparisonLinks = Object.values(comparisonMap).map(c => ({
    label: c.title.split('|')[0].trim(),
    path: `/${c.slug}`
  }));

  const guideLinks = Object.values(guideMap).map(g => ({
    label: g.title.split('|')[0].trim(),
    path: `/guides/${g.slug}`
  }));

  const blogLinks = Object.values(blogMap).map(b => ({
    label: b.title.split('|')[0].trim(),
    path: `/blog/${b.slug}`
  }));

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left' }}>
        
        {/* Page Header */}
        <header style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
            System Architecture
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }} className="text-gradient">
            HTML Sitemap &amp; Directory
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Complete index of all public routes, engineering pages, structured guides, and technology comparators available on the Algorithyum platform.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          {/* Core Routes */}
          <section className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Core Infrastructure ({coreLinks.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {coreLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Services Directory */}
          <section className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Engineering Services ({serviceLinks.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Technology Pages */}
          <section className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Technology Pages ({techLinks.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {techLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Industry Solutions */}
          <section className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Industry Verticals ({industryLinks.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {industryLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Technology Comparators */}
          <section className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Tech Comparators ({comparisonLinks.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {comparisonLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Guides */}
          <section className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Engineering Guides ({guideLinks.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {guideLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Blog Publications */}
          <section className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)', gridColumn: '1 / -1' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Blog Publications ({blogLinks.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
              {blogLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

        </div>

      </div>
    </div>
  );
};

export default SitemapPage;
