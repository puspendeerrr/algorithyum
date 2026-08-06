import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug, getAdjacentBlogs } from '../utils/blog';
import { BlogLayout } from '../components/blog/BlogLayout';
import { BlogHeader } from '../components/blog/BlogHeader';
import { BlogContent } from '../components/blog/BlogContent';
import { TableOfContents } from '../components/blog/TableOfContents';
import { ReadingProgress } from '../components/blog/ReadingProgress';
import { AuthorCard } from '../components/blog/AuthorCard';
import { ShareButtons } from '../components/blog/ShareButtons';
import { RelatedPosts } from '../components/blog/RelatedPosts';
import { BlogBreadcrumbs } from '../components/blog/BlogBreadcrumbs';
import { FAQSection } from '../components/blog/FAQSection';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BlogPageProps {
  onOpenConsultation?: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();

  const post = slug ? getBlogBySlug(slug) : undefined;

  // Reset scroll on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Article Not Found</h2>
          <p style={{ color: 'var(--text-secondary)', margin: '1rem 0 2rem' }}>The requested blog article could not be located.</p>
          <Link to="/blog" className="btn btn-primary">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  const { prev, next } = getAdjacentBlogs(post);

  // FAQ block parsing for FAQSection
  const faqBlock = post.blocks.find(block => block.type === 'faq') as any;
  const faqItems = faqBlock ? faqBlock.items : [];

  return (
    <>
      <style>{`
        .blog-page-container {
          padding-top: 120px;
          min-height: 100vh;
          padding-bottom: 6rem;
          background: var(--bg-primary);
        }
        .adj-nav-section {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          text-align: left;
        }
        .adj-nav-link {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          text-decoration: none;
          max-width: 48%;
          flex: 1;
        }
        .adj-nav-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-light);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .adj-nav-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: color 0.2s ease;
          line-height: 1.4;
        }
        .adj-nav-link:hover .adj-nav-title {
          color: var(--accent-light);
        }
        .back-to-blog-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          transition: color 0.2s ease;
        }
        .back-to-blog-link:hover {
          color: var(--accent-light);
        }
        @media (max-width: 600px) {
          .adj-nav-section {
            flex-direction: column;
            gap: 1.5rem;
          }
          .adj-nav-link {
            max-width: 100%;
          }
        }
      `}</style>

      {/* Reading Progress Indicator */}
      <ReadingProgress />

      <div className="blog-page-container">
        <div className="container">
          
          {/* Breadcrumbs */}
          <BlogBreadcrumbs title={post.title} />

          {/* Back link */}
          <Link to="/blog" className="back-to-blog-link">
            <ArrowLeft size={16} />
            <span>Back to all insights</span>
          </Link>

          {/* Main Layout Grid */}
          <BlogLayout 
            sidebar={<TableOfContents blocks={post.blocks} />}
          >
            {/* Post Header */}
            <BlogHeader 
              title={post.title}
              description={post.description}
              category={post.category || 'Engineering'}
              date={post.datePublished || ''}
              readingTime={post.readTime || '5 min read'}
              authorName={post.author || 'Algorithyum'}
            />

            {/* Social Share bar */}
            <ShareButtons title={post.title} />

            {/* Dynamic Blog Content */}
            <BlogContent blocks={post.blocks} onOpenConsultation={onOpenConsultation} />

            {/* Collapsible FAQs */}
            <FAQSection items={faqItems} />

            {/* Author Profile */}
            <AuthorCard authorName={post.author || 'Algorithyum'} />

            {/* Prev / Next Article Nav */}
            <div className="adj-nav-section">
              {prev ? (
                <Link to={`/blog/${prev.slug}`} className="adj-nav-link">
                  <span className="adj-nav-label">
                    <ArrowLeft size={12} /> Previous Article
                  </span>
                  <span className="adj-nav-title">{prev.title.split('|')[0].trim()}</span>
                </Link>
              ) : (
                <div style={{ flex: 1 }} />
              )}
              {next ? (
                <Link to={`/blog/${next.slug}`} className="adj-nav-link" style={{ textAlign: 'right', alignItems: 'flex-end' }}>
                  <span className="adj-nav-label">
                    Next Article <ArrowRight size={12} />
                  </span>
                  <span className="adj-nav-title">{next.title.split('|')[0].trim()}</span>
                </Link>
              ) : (
                <div style={{ flex: 1 }} />
              )}
            </div>

            {/* Auto Related Insights */}
            <RelatedPosts currentBlog={post} />

          </BlogLayout>

        </div>
      </div>
    </>
  );
};
