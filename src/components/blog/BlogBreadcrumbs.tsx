import React from 'react';
import { Link } from 'react-router-dom';

interface BlogBreadcrumbsProps {
  title: string;
}

export const BlogBreadcrumbs: React.FC<BlogBreadcrumbsProps> = ({ title }) => {
  return (
    <>
      <style>{`
        .breadcrumbs-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          text-align: left;
        }
        .breadcrumbs-link {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .breadcrumbs-link:hover {
          color: var(--accent-light);
        }
        .breadcrumbs-current {
          color: var(--accent-light);
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 400px;
        }
        @media (max-width: 768px) {
          .breadcrumbs-current {
            max-width: 180px;
          }
        }
      `}</style>
      <nav aria-label="Breadcrumb" className="breadcrumbs-nav">
        <Link to="/" className="breadcrumbs-link">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/blog" className="breadcrumbs-link">Blog</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="breadcrumbs-current">
          {title.split('|')[0].trim()}
        </span>
      </nav>
    </>
  );
};
