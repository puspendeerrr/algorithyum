import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  serviceMap,
  technologyMap,
  industryMap,
  comparisonMap,
  guideMap,
  blogMap
} from '../data/seoRegistry';

export const SitemapPage: React.FC = () => {
  const navigate = useNavigate();

  const coreLinks = [
    { label: 'Home Page', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services Directory', path: '/services' },
    { label: 'Solutions Blueprint', path: '/solutions' },
    { label: 'Industries Index', path: '/industries' },
    { label: 'Technologies & Tooling', path: '/technologies' },
    { label: 'Insights & Blog', path: '/blog' },
    { label: 'Guides Hub', path: '/guides' },
    { label: 'Careers Portal', path: '/careers' },
    { label: 'Contact Office', path: '/contact' }
  ];

  const serviceLinks = Object.entries(serviceMap).map(([id, data]) => ({
    label: data.title.split('|')[0].trim(),
    path: `/services/${id}`
  }));

  const technologyLinks = Object.entries(technologyMap).map(([id, data]) => ({
    label: data.title.split('|')[0].split('&')[0].trim(),
    path: `/technologies/${id}`
  }));

  // Backwards compatible direct technologies paths
  const directTechLinks = Object.entries(technologyMap).map(([id, data]) => ({
    label: data.title.split('|')[0].split('&')[0].trim(),
    path: `/${id}`
  }));

  const industryLinks = Object.entries(industryMap).map(([id, data]) => ({
    label: data.title.split('|')[0].split('&')[0].trim(),
    path: `/industries/${id}`
  }));

  const comparisonLinks = Object.entries(comparisonMap).map(([id, data]) => ({
    label: data.title.split('|')[0].split(':')[0].trim(),
    path: `/${id}`
  }));

  const guideLinks = Object.entries(guideMap).map(([id, data]) => ({
    label: data.title.split(':')[0].trim(),
    path: `/guides/${id}`
  }));

  const blogLinks = Object.entries(blogMap).map(([id, data]) => ({
    label: data.title.split('|')[0].trim(),
    path: `/blog/${id}`
  }));

  const legalLinks = [
    { label: 'Privacy Policy Statement', path: '/privacy' },
    { label: 'Terms of Service Guidelines', path: '/terms' },
    { label: 'Cookie Preferences Policy', path: '/cookies' }
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left' }}>
        
        {/* Page Header */}
        <header style={{ marginBottom: '4.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
            Site Navigation Directory
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }} className="text-gradient">
            HTML Sitemap
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            A comprehensive list of all indexed web routes, sub-pages, and document registries across the Algorithyum portal.
          </p>
        </header>

        {/* Directory Categories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
          
          {/* Main Pages */}
          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Core Pages
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {coreLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.path} 
                    onClick={(e) => handleLinkClick(e, link.path)}
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

          {/* Service Pages */}
          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Services Directory
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.path} 
                    onClick={(e) => handleLinkClick(e, link.path)}
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

          {/* Industry Verticals */}
          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Industries Served
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {industryLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.path} 
                    onClick={(e) => handleLinkClick(e, link.path)}
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

          {/* Technologies Hub */}
          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Technology Stack
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {technologyLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.path} 
                    onClick={(e) => handleLinkClick(e, link.path)}
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

          {/* Technical Comparisons */}
          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Comparisons
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {comparisonLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.path} 
                    onClick={(e) => handleLinkClick(e, link.path)}
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

          {/* Engineering Guides & Insights */}
          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Guides & Insights
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {guideLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.path} 
                    onClick={(e) => handleLinkClick(e, link.path)}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {blogLinks.map((link, idx) => (
                <li key={`blog-${idx}`}>
                  <a 
                    href={link.path} 
                    onClick={(e) => handleLinkClick(e, link.path)}
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

          {/* Direct Technology Shortcuts */}
          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Shortcuts (Legacy)
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {directTechLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.path} 
                    onClick={(e) => handleLinkClick(e, link.path)}
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

          {/* Legal Documents */}
          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Legal Registry
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.path} 
                    onClick={(e) => handleLinkClick(e, link.path)}
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
