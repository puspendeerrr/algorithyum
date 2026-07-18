import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../utils/blog';
import { Search, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const POSTS_PER_PAGE = 6;

export const BlogListing: React.FC = () => {
  const allPosts = useMemo(() => getAllBlogs(), []);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Extract all categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    allPosts.forEach(post => {
      if (post.category) cats.add(post.category);
    });
    return ['All', ...Array.from(cats)];
  }, [allPosts]);

  // Extract all tags
  const tags = useMemo(() => {
    const tgs = new Set<string>();
    allPosts.forEach(post => {
      if (post.tags) {
        post.tags.forEach(t => tgs.add(t));
      }
    });
    return ['All', ...Array.from(tgs)];
  }, [allPosts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    setCurrentPage(1); // Reset page on filter change
    return allPosts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.category && post.category.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesTag = selectedTag === 'All' || (post.tags && post.tags.includes(selectedTag));

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [allPosts, searchQuery, selectedCategory, selectedTag]);

  // Paginated posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .blog-listing-page {
          padding-top: 120px;
          min-height: 100vh;
          padding-bottom: 6rem;
          background: var(--bg-primary);
        }
        .listing-header {
          margin-bottom: 3.5rem;
          text-align: left;
        }
        .controls-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
          text-align: left;
        }
        .search-wrapper {
          position: relative;
          max-width: 500px;
          width: 100%;
        }
        .search-input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-sm);
          color: var(--text-primary);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.25s ease;
        }
        .search-input:focus {
          border-color: var(--accent-light);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 15px rgba(122, 79, 240, 0.15);
        }
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-secondary);
        }
        .filter-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          min-width: 0;
        }
        .filter-group-container {
          position: relative;
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 0;
        }
        .filter-group-container::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 40px;
          background: linear-gradient(90deg, transparent, var(--bg-primary));
          pointer-events: none;
          z-index: 2;
        }
        .filter-group {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          overflow-x: auto;
          white-space: nowrap;
          padding: 0.25rem 0;
          flex: 1;
          min-width: 0;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE/Edge */
        }
        .filter-group::-webkit-scrollbar {
          display: none; /* Chrome/Safari/Opera */
        }
        .filter-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          flex-shrink: 0;
          width: 100px;
        }
        .filter-pill {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .filter-pill:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .filter-pill.active {
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 100%);
          border-color: transparent;
          color: #ffffff;
        }
        .blog-grid-listing {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2.5rem;
          margin-bottom: 4rem;
        }
        .blog-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--border-radius-md);
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
          text-decoration: none;
          height: 100%;
        }
        .blog-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-light);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
        .blog-card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 1px solid var(--border-color);
        }
        .blog-card-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
          text-align: left;
        }
        .blog-card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: var(--accent-light);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.1em;
        }
        .blog-card-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
          margin: 0;
        }
        .blog-card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }
        .blog-card-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .pagination-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
        .pagination-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-sm);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .pagination-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-light);
          color: var(--accent-light);
        }
        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .pagination-number {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        @media (max-width: 768px) {
          .blog-grid-listing {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="blog-listing-page">
        <div className="container">
          
          {/* Header */}
          <div className="listing-header">
            <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
              Publications & Briefings
            </span>
            <h1 className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
              Engineering Insights
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '1rem', maxWidth: '800px' }}>
              Technical deep-dives, architectural blueprints, and operational blueprints compiled by Algorithyum engineering pods.
            </p>
          </div>

          {/* Controls */}
          <div className="controls-panel">
            {/* Search */}
            <div className="search-wrapper">
              <Search className="search-icon" size={18} />
              <input 
                type="text" 
                className="search-input"
                placeholder="Search articles by keywords, categories, or titles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="filter-wrapper">
              <span className="filter-label">Categories:</span>
              <div className="filter-group-container">
                <div className="filter-group">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="filter-wrapper">
              <span className="filter-label">Tags:</span>
              <div className="filter-group-container">
                <div className="filter-group">
                  {tags.map(tag => (
                    <button
                      key={tag}
                      className={`filter-pill ${selectedTag === tag ? 'active' : ''}`}
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          {filteredPosts.length > 0 ? (
            <div className="blog-grid-listing">
              {paginatedPosts.map(post => {
                const formattedDate = new Date(post.datePublished || '').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                });
                return (
                  <Link 
                    key={post.slug} 
                    to={`/blog/${post.slug}`} 
                    className="blog-card glass-panel"
                  >
                    <img 
                      src={post.ogImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60'} 
                      alt={post.title} 
                      className="blog-card-img"
                      loading="lazy"
                    />
                    <div className="blog-card-content">
                      <div className="blog-card-meta">
                        <span>{post.category}</span>
                      </div>
                      <h2 className="blog-card-title">{post.title.split('|')[0].trim()}</h2>
                      <p className="blog-card-desc">{post.description}</p>
                      
                      <div className="blog-card-footer">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Calendar size={14} />
                          <span>{formattedDate}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div style={{ padding: '5rem 0', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>No articles found</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Try refining your search query or filters.</p>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > POSTS_PER_PAGE && (
            <div className="pagination-container">
              <button 
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="pagination-number">
                Page {currentPage} of {totalPages}
              </span>
              <button 
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
};
