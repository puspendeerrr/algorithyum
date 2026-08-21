'use client';

import React from 'react';
import { Calendar, Clock, User, Sparkles } from 'lucide-react';

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
        .blog-header-container {
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          text-align: left;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 2.5rem;
        }
        .blog-header-category-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.9rem;
          border-radius: 50px;
          background: rgba(122, 79, 240, 0.12);
          border: 1px solid rgba(122, 79, 240, 0.3);
          color: var(--accent-light);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          width: fit-content;
        }
        .blog-header-title {
          font-size: 3.25rem;
          font-weight: 900;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .blog-header-description {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0;
          max-width: 1100px;
        }
        .blog-header-meta-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
          padding-top: 0.5rem;
        }
        .blog-header-meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        @media (max-width: 768px) {
          .blog-header-title {
            font-size: 2.2rem !important;
          }
          .blog-header-description {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
      <header className="blog-header-container">
        <div className="blog-header-category-badge">
          <Sparkles size={13} />
          <span>{category}</span>
        </div>

        <h1 className="text-gradient blog-header-title">
          {title.split('|')[0].trim()}
        </h1>

        <p className="blog-header-description">
          {description}
        </p>

        <div className="blog-header-meta-row">
          <div className="blog-header-meta-item">
            <User size={15} style={{ color: 'var(--accent-light)' }} />
            <span>By <strong style={{ color: 'var(--text-primary)' }}>{authorName}</strong></span>
          </div>

          <span>•</span>

          <div className="blog-header-meta-item">
            <Calendar size={15} style={{ color: 'var(--accent-light)' }} />
            <time dateTime={date}>{formattedDate}</time>
          </div>

          <span>•</span>

          <div className="blog-header-meta-item">
            <Clock size={15} style={{ color: 'var(--accent-light)' }} />
            <span>{readingTime}</span>
          </div>
        </div>
      </header>
    </>
  );
};
