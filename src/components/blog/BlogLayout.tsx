import React from 'react';

interface BlogLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({ children, sidebar }) => {
  return (
    <>
      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 4rem;
          align-items: flex-start;
        }
        .blog-main-content {
          min-width: 0;
          width: 100%;
          max-width: 800px;
        }
        @media (max-width: 992px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .blog-main-content {
            max-width: 800px !important;
            margin: 0 auto !important;
          }
          .blog-sidebar {
            position: static !important;
            top: auto !important;
          }
        }
      `}</style>
      <div className="blog-grid">
        <div className="blog-main-content">
          {children}
        </div>
        <aside 
          className="no-print blog-sidebar"
          style={{
            position: 'sticky',
            top: '140px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}
        >
          {sidebar}
        </aside>
      </div>
    </>
  );
};
