import React from 'react';
import { Link } from 'react-router-dom';
import { getRelatedBlogs } from '../../utils/blog';
import type { BlogPageData } from '../../data/types';

interface RelatedPostsProps {
  currentBlog: BlogPageData;
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentBlog }) => {
  const related = getRelatedBlogs(currentBlog, 3);

  if (related.length === 0) return null;

  return (
    <>
      <style>{`
        .related-section {
          margin-top: 4rem;
          border-top: 1px solid var(--border-color);
          padding-top: 3rem;
          text-align: left;
          width: 100%;
        }
        .related-title {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 2rem;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .related-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--border-radius-md);
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
          text-decoration: none;
          height: 100%;
        }
        .related-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-light);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }
        .related-card-img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-bottom: 1px solid var(--border-color);
        }
        .related-card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }
        .related-card-meta {
          font-size: 0.75rem;
          color: var(--accent-light);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.1em;
        }
        .related-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.4;
          margin: 0.25rem 0;
        }
        .related-card-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }
      `}</style>
      <section className="related-section">
        <h3 className="related-title text-gradient">Related Insights</h3>
        <div className="related-grid">
          {related.map(blog => (
            <Link 
              key={blog.slug} 
              to={`/blog/${blog.slug}`}
              className="related-card glass-panel"
            >
              <img 
                src={blog.ogImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=60'} 
                alt={blog.title} 
                className="related-card-img"
                loading="lazy"
              />
              <div className="related-card-content">
                <span className="related-card-meta">{blog.category}</span>
                <h4 className="related-card-title">{blog.title.split('|')[0].trim()}</h4>
                <p className="related-card-desc">{blog.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
