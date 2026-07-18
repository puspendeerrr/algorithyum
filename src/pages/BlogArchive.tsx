import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogMap } from '../data/blogs';

export const BlogArchive: React.FC = () => {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'security', label: 'Cybersecurity' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'cloud', label: 'Cloud & DevOps' }
  ];

  const articles = Object.values(blogMap).map(b => ({
    id: b.slug,
    tag: b.tag === 'Cybersecurity' ? 'security' : (b.tag === 'Artificial Intelligence' ? 'ai' : 'cloud'),
    tagName: b.tag,
    title: b.title.split('|')[0].trim(),
    excerpt: b.description,
    date: b.datePublished,
    readTime: b.readTime
  }));

  const filteredArticles = activeTag === 'all'
    ? articles
    : articles.filter(a => a.tag === activeTag);

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left' }}>
        
        {/* Page Header */}
        <header style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
            Technical Insights
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }} className="text-gradient">
            Algorithyum Blog
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Quarterly engineering audits, architecture reviews, and software design reports from our R&amp;D pods.
          </p>
        </header>

        {/* Categories Bar */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTag(cat.id)}
              className="btn btn-secondary"
              style={{
                borderRadius: '50px',
                padding: '0.5rem 1.25rem',
                fontSize: '0.85rem',
                borderColor: activeTag === cat.id ? 'var(--accent)' : '',
                background: activeTag === cat.id ? 'var(--accent-gradient)' : '',
                color: activeTag === cat.id ? '#ffffff' : ''
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blog Post Listings */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {filteredArticles.map((art) => (
            <article 
              key={art.id} 
              className="glass-panel" 
              style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }}
              onClick={() => navigate(`/blog/${art.id}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate(`/blog/${art.id}`); } }}
              aria-label={`Read technical article: ${art.title}`}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-light)', letterSpacing: '0.05em' }}>
                {art.tagName}
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, lineHeight: '1.3' }}>{art.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', flexGrow: 1 }}>{art.excerpt}</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                <span>{art.date}</span>
                <span>{art.readTime}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
