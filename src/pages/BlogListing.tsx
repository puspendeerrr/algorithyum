import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../utils/blog';
import { Search, Calendar, Clock, ChevronLeft, ChevronRight, ArrowRight, Sparkles, Tag, Layers, User, BookOpen, Pause, Play } from 'lucide-react';

const POSTS_PER_PAGE = 6;

export const BlogListing: React.FC = () => {
  const allPosts = useMemo(() => getAllBlogs(), []);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Featured Slideshow States (3-Second Timer)
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // All posts automatically included in the 3-second slideshow
  const featuredPosts = useMemo(() => allPosts, [allPosts]);

  // Category counts map
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allPosts.length };
    allPosts.forEach(post => {
      if (post.category) {
        counts[post.category] = (counts[post.category] || 0) + 1;
      }
    });
    return counts;
  }, [allPosts]);

  // Extract unique categories
  const categories = useMemo(() => Object.keys(categoryCounts), [categoryCounts]);

  // Extract unique tags
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

  const isFiltering = searchQuery.trim() !== '' || selectedCategory !== 'All' || selectedTag !== 'All';

  // 3-Second Automatic Slideshow Interval
  useEffect(() => {
    if (isFiltering || isPaused || featuredPosts.length <= 1) return;

    const timer = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % featuredPosts.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isFiltering, isPaused, featuredPosts.length]);

  const currentFeatured = featuredPosts[slideIndex] || featuredPosts[0];

  // Paginated posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  const getBorderGradientForCategory = (category?: string) => {
    switch (category) {
      case 'Enterprise AI Solutions':
      case 'AI Development':
        return 'linear-gradient(90deg, #7a4ff0 0%, #0052ff 100%)';
      case 'Enterprise Software Strategy':
      case 'Software Engineering':
        return 'linear-gradient(90deg, #00b8d9 0%, #7a4ff0 100%)';
      case 'Emerging Technology':
        return 'linear-gradient(90deg, #ff5630 0%, #7a4ff0 100%)';
      default:
        return 'linear-gradient(90deg, #0052ff 0%, #7a4ff0 100%)';
    }
  };

  return (
    <>
      <style>{`
        .blog-listing-page {
          padding-top: 120px;
          min-height: 100vh;
          padding-bottom: 6rem;
          background: var(--bg-primary);
          position: relative;
          color: var(--text-primary);
        }
        .ambient-glow {
          position: absolute;
          top: 80px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 400px;
          background: radial-gradient(circle, rgba(122, 79, 240, 0.08) 0%, rgba(0, 82, 255, 0.03) 50%, transparent 80%);
          pointer-events: none;
          z-index: 0;
        }
        .listing-header {
          margin-bottom: 3.5rem;
          text-align: left;
          position: relative;
          z-index: 1;
        }
        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          border-radius: 50px;
          background: rgba(122, 79, 240, 0.1);
          border: 1px solid rgba(122, 79, 240, 0.25);
          color: var(--accent-light);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        /* 360-degree Revolving Border Frame */
        .revolving-card-frame {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          padding: 2px; /* Width of the revolving light beam */
          margin-bottom: 4rem;
          background: var(--border-color);
          box-shadow: var(--glass-shadow);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          z-index: 1;
        }
        .revolving-card-frame:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15), 0 0 35px rgba(122, 79, 240, 0.25);
        }

        /* Continuous 360-degree Rotating Conic Gradient Beam around the entire boundary */
        .revolving-card-frame::before {
          content: '';
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: conic-gradient(
            from 0deg,
            transparent 0%,
            transparent 70%,
            #0052ff 85%,
            #7a4ff0 92%,
            #00d2ff 100%
          );
          animation: orbitBorderBeam 4s linear infinite;
          z-index: 0;
        }

        @keyframes orbitBorderBeam {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .revolving-card-inner {
          position: relative;
          z-index: 1;
          background: var(--bg-secondary);
          border-radius: 16px;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
          backdrop-filter: blur(16px);
          text-decoration: none;
          width: 100%;
          height: 100%;
          border: 1px solid var(--border-color);
        }

        /* Slideshow Animation */
        .slideshow-content {
          animation: fadeInSlide 0.45s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Slideshow Controls Bar */
        .slideshow-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .slide-dots {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .slide-dot-btn {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--border-color);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .slide-dot-btn.active {
          width: 32px;
          border-radius: 10px;
          background: var(--accent-gradient);
          box-shadow: 0 0 10px rgba(122, 79, 240, 0.4);
        }
        .slide-arrow-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .slide-arrow-btn:hover {
          background: var(--bg-primary);
          border-color: var(--accent-light);
          color: var(--accent-light);
        }

        /* Controls Panel */
        .controls-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
          text-align: left;
          position: relative;
          z-index: 1;
        }
        .search-wrapper {
          position: relative;
          max-width: 600px;
          width: 100%;
        }
        .search-input {
          width: 100%;
          padding: 0.95rem 1.25rem 0.95rem 3rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-primary);
          font-size: 1rem;
          outline: none;
          transition: all 0.25s ease;
        }
        .search-input:focus {
          border-color: var(--accent-light);
          background: var(--bg-primary);
          box-shadow: 0 0 20px rgba(122, 79, 240, 0.15);
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
          gap: 1.25rem;
          width: 100%;
          min-width: 0;
        }
        .filter-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          width: 110px;
        }
        .filter-group-container {
          position: relative;
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 0;
        }
        .filter-group {
          display: flex;
          gap: 0.65rem;
          align-items: center;
          overflow-x: auto;
          white-space: nowrap;
          padding: 0.35rem 0;
          flex: 1;
          min-width: 0;
          scrollbar-width: none;
        }
        .filter-group::-webkit-scrollbar {
          display: none;
        }
        .filter-pill {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.45rem 1.1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .filter-pill:hover {
          color: var(--text-primary);
          border-color: var(--accent-light);
          background: var(--bg-tertiary);
        }
        .filter-pill.active {
          background: var(--accent-gradient);
          border-color: transparent;
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(122, 79, 240, 0.3);
        }
        .count-badge {
          font-size: 0.725rem;
          padding: 0.1rem 0.45rem;
          border-radius: 10px;
          background: rgba(0, 82, 255, 0.12);
          color: var(--accent-light);
          font-weight: 700;
        }
        .filter-pill.active .count-badge {
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }
        
        /* Text-First Blog Cards Grid */
        .blog-grid-listing {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }
        .blog-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--border-radius-md);
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
          backdrop-filter: blur(12px);
          text-decoration: none;
          height: 100%;
          position: relative;
          padding: 2.25rem 2rem 1.75rem;
          text-align: left;
          box-shadow: var(--glass-shadow);
        }
        .blog-card-top-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          transition: opacity 0.3s ease;
        }
        .blog-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-light);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.12), 0 0 25px rgba(122, 79, 240, 0.18);
        }
        .blog-card-category-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.725rem;
          font-weight: 700;
          color: var(--accent-light);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .blog-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.35;
          margin: 0 0 0.75rem 0;
          transition: color 0.2s ease;
        }
        .blog-card:hover .blog-card-title {
          color: var(--accent-light);
        }
        .blog-card-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
        }
        .blog-card-footer {
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-muted);
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }
        .read-more-link {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--accent-light);
          font-weight: 700;
          font-size: 0.85rem;
          transition: gap 0.2s ease;
        }
        .blog-card:hover .read-more-link {
          gap: 0.6rem;
        }
        
        .pagination-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          position: relative;
          z-index: 1;
        }
        .pagination-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .pagination-btn:hover:not(:disabled) {
          background: var(--bg-tertiary);
          border-color: var(--accent-light);
          color: var(--accent-light);
        }
        .pagination-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .pagination-number {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        
        @media (max-width: 768px) {
          .revolving-card-inner {
            padding: 2rem;
          }
          .blog-grid-listing {
            grid-template-columns: 1fr;
          }
          .filter-label {
            width: 80px;
          }
        }
      `}</style>
      
      <div className="blog-listing-page">
        <div className="ambient-glow" />
        
        <div className="container">
          
          {/* Header */}
          <div className="listing-header">
            <span className="badge-pill">
              <Sparkles size={14} /> Publications & Architectural Briefings
            </span>
            <h1 className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
              Engineering Insights
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '1rem', maxWidth: '820px' }}>
              In-depth technical guides, enterprise architecture benchmarks, and operational research published by Algorithyum engineering pods.
            </p>
          </div>

          {/* Featured Publications 3-Second Slideshow with Revolving Border Light Beam */}
          {!isFiltering && currentFeatured && (
            <div 
              className="revolving-card-frame"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="revolving-card-inner">
                {/* Slideshow Top Controls Bar */}
                <div className="slideshow-controls-bar">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <span className="badge-pill" style={{ background: 'var(--accent-gradient)', color: '#fff', border: 'none' }}>
                      FEATURED PUBLICATION
                    </span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {currentFeatured.category}
                    </span>
                  </div>

                  {/* Counter & Dots & Nav Arrows */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', background: 'var(--bg-tertiary)', padding: '0.2rem 0.65rem', borderRadius: '50px', border: '1px solid var(--border-color)' }}>
                      {String(slideIndex + 1).padStart(2, '0')} / {String(featuredPosts.length).padStart(2, '0')}
                    </span>

                    <div className="slide-dots">
                      {featuredPosts.map((_, idx) => (
                        <button
                          key={idx}
                          className={`slide-dot-btn ${slideIndex === idx ? 'active' : ''}`}
                          onClick={() => setSlideIndex(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <button 
                        className="slide-arrow-btn"
                        onClick={() => setSlideIndex(prev => (prev - 1 + featuredPosts.length) % featuredPosts.length)}
                        aria-label="Previous Slide"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button 
                        className="slide-arrow-btn"
                        onClick={() => setSlideIndex(prev => (prev + 1) % featuredPosts.length)}
                        aria-label="Next Slide"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    <button 
                      className="slide-arrow-btn"
                      onClick={() => setIsPaused(!isPaused)}
                      title={isPaused ? "Resume Auto-play (3s)" : "Pause Auto-play"}
                    >
                      {isPaused ? <Play size={14} /> : <Pause size={14} />}
                    </button>
                  </div>
                </div>

                {/* Animated Slide Content */}
                <Link 
                  key={currentFeatured.slug} 
                  to={`/blog/${currentFeatured.slug}`}
                  style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                  className="slideshow-content"
                >
                  <h2 style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.25, margin: 0 }}>
                    {currentFeatured.title.split('|')[0].trim()}
                  </h2>

                  <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0, maxWidth: '1050px' }}>
                    {currentFeatured.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <User size={15} style={{ color: 'var(--accent-light)' }} />
                        <span>{currentFeatured.author || 'Algorithyum'}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Calendar size={15} style={{ color: 'var(--accent-light)' }} />
                        <span>{new Date(currentFeatured.datePublished || '').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Clock size={15} style={{ color: 'var(--accent-light)' }} />
                        <span>{currentFeatured.readTime}</span>
                      </div>
                    </div>

                    <div className="read-more-link" style={{ fontSize: '1rem' }}>
                      <span>Read Complete Guide</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* Controls Panel */}
          <div className="controls-panel">
            {/* Search Bar */}
            <div className="search-wrapper">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                className="search-input"
                placeholder="Search articles by keywords, topics, or titles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="filter-wrapper">
              <span className="filter-label">
                <Layers size={14} /> Category:
              </span>
              <div className="filter-group-container">
                <div className="filter-group">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      <span>{cat}</span>
                      <span className="count-badge">{categoryCounts[cat] || 0}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tag Filter */}
            <div className="filter-wrapper">
              <span className="filter-label">
                <Tag size={14} /> Topics:
              </span>
              <div className="filter-group-container">
                <div className="filter-group">
                  {tags.slice(0, 12).map(tag => (
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

          {/* Articles Grid (Text-First, No Images) */}
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
                    className="blog-card"
                  >
                    <div 
                      className="blog-card-top-accent" 
                      style={{ background: getBorderGradientForCategory(post.category) }} 
                    />

                    <div className="blog-card-category-badge">
                      <BookOpen size={12} />
                      <span>{post.category || 'Engineering'}</span>
                    </div>

                    <h3 className="blog-card-title">
                      {post.title.split('|')[0].trim()}
                    </h3>
                    
                    <p className="blog-card-desc">
                      {post.description}
                    </p>
                    
                    <div className="blog-card-footer">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Calendar size={13} /> {formattedDate}
                        </span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock size={13} /> {post.readTime}
                        </span>
                      </div>

                      <div className="read-more-link">
                        <span>Read</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div style={{ padding: '6rem 0', textAlign: 'center', background: 'var(--bg-secondary)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)', margin: '2rem 0' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800 }}>No articles matching criteria</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', maxWidth: '500px', margin: '0.75rem auto 1.5rem' }}>
                We couldn't find any publications matching your current search query or active filter selections.
              </p>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedTag('All');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Pagination Controls */}
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
