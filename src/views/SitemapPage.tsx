'use client';

import React from 'react';
import {
  serviceMap,
  industryMap,
  guideMap,
  blogMap
} from '../data/seoRegistry';
import { useAppNavigation } from '@/lib/utils/useNavigation';

export const SitemapPage: React.FC = () => {
  const { navigate } = useAppNavigation();

  const mainPages = [
    { label: 'Home Page', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Industries We Serve', path: '/industries' },
    { label: 'Technologies We Use', path: '/technologies' },
    { label: 'Blog Insights', path: '/blog' },
    { label: 'Engineering Guides', path: '/guides' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const generalServices = [
    { label: 'Custom Software Development', path: '/services/software-development' },
    { label: 'Software Redesign & Modernization', path: '/services/software-redesign' },
    { label: 'Web Development', path: '/services/web-development' },
    { label: 'Game Development', path: '/services/game-development' },
  ];

  const erpSolutions = [
    { label: 'ERP System Development', path: '/services/erp' },
    { label: 'Manufacturing ERP', path: '/services/erp' },
    { label: 'Inventory & Warehouse Management', path: '/services/erp' },
    { label: 'CRM & HRMS Software', path: '/services/erp' },
    { label: 'Billing & POS Software', path: '/services/erp' },
  ];

  const mobileAppServices = [
    { label: 'Android App Development', path: '/services/android-app-development' },
    { label: 'iOS App Development', path: '/services/ios-app-development' },
    { label: 'Cross Platform App Development', path: '/services/cross-platform-app-development' },
  ];

  const aiServices = [
    { label: 'AI Integration', path: '/services/ai-integration' },
    { label: 'AI Automation', path: '/services/ai-automation' },
  ];

  const seoServices = [
    { label: 'SEO Services', path: '/services/seo' },
  ];

  const legalPages = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Cookie Policy', path: '/cookies' },
  ];

  const industryLinks = Object.values(industryMap).map(i => ({
    label: i.title.split('|')[0].trim(),
    path: `/industries/${i.slug}`
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
            Site Directory
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }} className="text-gradient">
            HTML Sitemap &amp; Directory
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Complete directory of all public pages, services, ERP solutions, mobile app development, AI features, SEO services, blogs, guides, and legal policies on Algorithyum.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          
          {/* 1. Main Pages */}
          <section className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Main Pages ({mainPages.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {mainPages.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 2. Services */}
          <section className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Software Services ({generalServices.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {generalServices.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. ERP Solutions */}
          <section className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              ERP Solutions ({erpSolutions.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {erpSolutions.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Mobile App Development */}
          <section className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Mobile App Development ({mobileAppServices.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {mobileAppServices.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 5. AI Services */}
          <section className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              AI Services ({aiServices.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {aiServices.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 6. SEO Services */}
          <section className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              SEO Services ({seoServices.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {seoServices.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 7. Industries */}
          <section className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Industries ({industryLinks.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {industryLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 8. Engineering Guides */}
          <section className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Guides ({guideLinks.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {guideLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 9. Legal */}
          <section className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Legal &amp; Compliance ({legalPages.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {legalPages.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 10. Blog Publications */}
          <section className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)', gridColumn: '1 / -1' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--accent-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Blog ({blogLinks.length})
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
              {blogLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
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
