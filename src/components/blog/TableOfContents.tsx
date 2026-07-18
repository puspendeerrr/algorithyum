import React, { useEffect, useState, useMemo } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: 'h2' | 'h3';
}

interface TableOfContentsProps {
  blocks: any[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ blocks }) => {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(true);

  // Extract headings memoized
  const headings = useMemo(() => {
    const list: TOCItem[] = [];
    blocks.forEach(block => {
      if (block.title && block.type !== 'hero' && block.type !== 'faq' && block.type !== 'cta') {
        const isSub = block.type === 'checklist' || block.type === 'code-block' || block.id.includes('sub') || block.id.includes('check');
        list.push({
          id: block.id,
          text: block.title,
          level: isSub ? 'h3' : 'h2'
        });
      }
    });
    return list;
  }, [blocks]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible entries
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          // Set active as the first visible element's ID
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0.1 }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => {
      headings.forEach((heading) => {
        const el = document.getElementById(heading.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [headings]);

  useEffect(() => {
    if (!activeId) return;
    const activeEl = document.getElementById(`toc-link-${activeId}`);
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [activeId]);

  if (headings.length === 0) return null;

  return (
    <>
      <style>{`
        .toc-wrapper {
          width: 100%;
        }
        .toc-container {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 1.5rem;
          backdrop-filter: blur(12px);
          text-align: left;
          max-height: calc(100vh - 180px);
          overflow-y: auto;
        }
        /* Custom scrollbar for TOC */
        .toc-container::-webkit-scrollbar {
          width: 4px;
        }
        .toc-container::-webkit-scrollbar-track {
          background: transparent;
        }
        .toc-container::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 2px;
        }
        .toc-container::-webkit-scrollbar-thumb:hover {
          background: var(--accent-light);
        }
        .toc-header {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
        }
        .toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .toc-item-h2 {
          font-size: 0.9rem;
          font-weight: 500;
        }
        .toc-item-h3 {
          font-size: 0.85rem;
          padding-left: 1rem;
          color: var(--text-secondary);
        }
        .toc-link {
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.25s ease;
          border-left: 2px solid transparent;
          padding-left: 8px;
          display: block;
          line-height: 1.4;
        }
        .toc-link:hover {
          color: var(--accent-light);
          padding-left: 12px;
        }
        .toc-link-active {
          color: var(--accent-light) !important;
          border-left-color: var(--accent-light);
          font-weight: 600;
          padding-left: 12px;
        }
        .toc-toggle {
          display: none;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.75rem 1.25rem;
          border-radius: var(--border-radius-sm);
          font-size: 0.925rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          text-align: left;
          margin-bottom: 1rem;
          transition: all 0.2s ease;
        }
        .toc-toggle:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        @media (max-width: 992px) {
          .toc-wrapper {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 1000;
            width: auto;
          }
          .toc-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--accent-gradient);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.15);
            padding: 0.75rem 1.25rem;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 700;
            box-shadow: 0 10px 30px rgba(0, 82, 255, 0.35);
            cursor: pointer;
            width: auto;
            margin-bottom: 0;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            min-height: auto;
          }
          .toc-toggle:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 35px rgba(0, 82, 255, 0.45);
          }
          .toc-container {
            position: absolute;
            bottom: 3.5rem;
            right: 0;
            width: 300px;
            max-width: 85vw;
            max-height: 50vh;
            overflow-y: auto;
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-md);
            box-shadow: var(--glass-shadow);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            margin-top: 0;
            padding: 1.25rem;
            text-align: left;
            z-index: 1001;
            transform-origin: bottom right;
          }
          .toc-content-collapse {
            display: none !important;
          }
          .toc-content-show {
            display: block !important;
          }
        }
      `}</style>
      <div className="toc-wrapper">
        <button 
          className="toc-toggle" 
          onClick={() => setIsMobileCollapsed(!isMobileCollapsed)}
          aria-expanded={!isMobileCollapsed}
          aria-controls="toc-content"
        >
          {isMobileCollapsed ? '☰ Show Table of Contents' : '✕ Hide Table of Contents'}
        </button>
        <div 
          id="toc-content"
          className={`toc-container ${isMobileCollapsed ? 'toc-content-collapse' : 'toc-content-show'}`}
        >
          <div className="toc-header">
            <span>Table of Contents</span>
          </div>
          <nav aria-label="Table of contents">
            <ul className="toc-list">
              {headings.map((heading) => (
                <li 
                  key={heading.id} 
                  className={heading.level === 'h3' ? 'toc-item-h3' : 'toc-item-h2'}
                >
                  <a
                    id={`toc-link-${heading.id}`}
                    href={`#${heading.id}`}
                    className={`toc-link ${activeId === heading.id ? 'toc-link-active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(heading.id);
                      if (element) {
                        const offset = 140; // offset for top navbar
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = element.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;
                        
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                        setActiveId(heading.id);
                        setIsMobileCollapsed(true); // Auto collapse on navigation
                      }
                    }}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
