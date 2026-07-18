import React from 'react';

interface BlogHeaderProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  authorName: string;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  description,
  category,
  date,
  readingTime,
  authorName
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <style>{`
        .blog-header-title {
          font-size: 3.5rem;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          text-align: left;
        }
        @media (max-width: 768px) {
          .blog-header-title {
            font-size: 2.25rem !important;
          }
        }
      `}</style>
      <header style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-light)', letterSpacing: '0.15em' }}>
            {category}
          </span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>•</span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{readingTime}</span>
        </div>
        <h1 className="text-gradient blog-header-title">
          {title.split('|')[0].trim()}
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          {description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
          <span>By <strong style={{ color: 'var(--text-primary)' }}>{authorName}</strong></span>
          <span>•</span>
          <time dateTime={date}>{formattedDate}</time>
        </div>
      </header>
    </>
  );
};
