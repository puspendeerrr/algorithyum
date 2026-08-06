import React from 'react';
import { Link } from 'react-router-dom';
import { getRelatedBlogs } from '../../utils/blog';
import type { BlogPageData } from '../../data/types';
import { ArrowRight, BookOpen } from 'lucide-react';

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
          gap: 1.75rem;
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
          padding: 1.75rem;
          position: relative;
          background: rgba(255, 255, 255, 0.015);
          backdrop-filter: blur(12px);
        }
        .related-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .related-card:hover::before {
          opacity: 1;
        }
        .related-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-light);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
        }
        .related-card-meta {
          font-size: 0.725rem;
          color: var(--accent-light);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 0.5rem;
        }
        .related-card-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.35;
          margin: 0.25rem 0 0.5rem;
          transition: color 0.2s ease;
        }
        .related-card:hover .related-card-title {
          color: var(--accent-light);
        }
        .related-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
        }
        .related-card-action {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--accent-light);
          font-weight: 700;
          font-size: 0.85rem;
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          transition: gap 0.2s ease;
        }
        .related-card:hover .related-card-action {
          gap: 0.6rem;
        }
      `}</style>
      <section className="related-section">
        <h3 className="related-title text-gradient">Related Insights</h3>
        <div className="related-grid">
          {related.map(blog => (
            <Link 
              key={blog.slug} 
              to={`/blog/${blog.slug}`}
              className="related-card"
            >
              <div className="related-card-meta">
                <BookOpen size={12} />
                <span>{blog.category}</span>
              </div>
              <h4 className="related-card-title">{blog.title.split('|')[0].trim()}</h4>
              <p className="related-card-desc">{blog.description}</p>
              <div className="related-card-action">
                <span>Read Publication</span>
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
