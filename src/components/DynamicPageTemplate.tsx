import React, { useEffect } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { allContentMaps } from '../data/seoRegistry';
import { ShareWidget, AutoTOC, ScrollProgress } from './RichComponents';
import { ContentRenderer } from './ContentRenderer';
import styles from './templates.module.css';

const parentMap: Record<string, { label: string; path: string } | null> = {
  service: { label: 'Services', path: '/services' },
  technology: { label: 'Technologies', path: '/technologies' },
  industry: { label: 'Industries', path: '/industries' },
  comparison: null,    // No comparisons archive page — show Home > Page directly
  guide: { label: 'Guides', path: '/guides' },
  blog: { label: 'Blog', path: '/blog' },
  'case-study': null,  // No case studies archive page
  resource: null,      // No resources archive page
  cost: null,          // No cost guides archive page
  faq: null            // No FAQ hub archive page
};


interface DynamicPageTemplateProps {
  pageType?: 'service' | 'technology' | 'industry' | 'comparison' | 'guide' | 'blog' | 'case-study' | 'resource' | 'cost' | 'faq';
}

/**
 * Reusable, dynamic layout engine for all structured data-driven pages.
 * Resolves active slug from router parameters, loads page blocks, and renders layout.
 */
export const DynamicPageTemplate: React.FC<DynamicPageTemplateProps> = ({ pageType }) => {
  const { 
    serviceId, 
    techId, 
    industryId, 
    compId, 
    guideId, 
    articleId, 
    resourceId, 
    caseStudyId, 
    costId, 
    faqId 
  } = useParams<{ 
    serviceId?: string; 
    techId?: string; 
    industryId?: string; 
    compId?: string; 
    guideId?: string; 
    articleId?: string;
    resourceId?: string;
    caseStudyId?: string;
    costId?: string;
    faqId?: string;
  }>();

  const navigate = useNavigate();
  const location = useLocation();

  // Resolve slug from router variables or from pathname fallback
  const slug = serviceId || 
               techId || 
               industryId || 
               compId || 
               guideId || 
               articleId || 
               resourceId || 
               caseStudyId || 
               costId || 
               faqId || 
               location.pathname.split('/').pop() || 
               '';

  // Automatically detect the page type from URL structure if not explicitly provided as a prop
  let resolvedPageType = pageType;
  if (!resolvedPageType) {
    const parts = location.pathname.split('/').filter(Boolean);
    if (parts.length === 1) {
      if (allContentMaps.comparisons[slug]) resolvedPageType = 'comparison';
      else if (allContentMaps.technologies[slug]) resolvedPageType = 'technology';
    } else if (parts.length === 2) {
      const parent = parts[0];
      if (parent === 'services') resolvedPageType = 'service';
      else if (parent === 'technologies') resolvedPageType = 'technology';
      else if (parent === 'industries') resolvedPageType = 'industry';
      else if (parent === 'guides') resolvedPageType = 'guide';
      else if (parent === 'blog') resolvedPageType = 'blog';
      else if (parent === 'resources') resolvedPageType = 'resource';
      else if (parent === 'case-studies') resolvedPageType = 'case-study';
      else if (parent === 'cost') resolvedPageType = 'cost';
      else if (parent === 'faq') resolvedPageType = 'faq';
    }
  }

  // Retrieve matching structured data from registries
  let data: any = null;
  if (resolvedPageType === 'service') data = allContentMaps.services[slug];
  else if (resolvedPageType === 'technology') data = allContentMaps.technologies[slug];
  else if (resolvedPageType === 'industry') data = allContentMaps.industries[slug];
  else if (resolvedPageType === 'comparison') data = allContentMaps.comparisons[slug];
  else if (resolvedPageType === 'guide') data = allContentMaps.guides[slug];
  else if (resolvedPageType === 'blog') data = allContentMaps.blogs[slug];
  else if (resolvedPageType === 'resource') data = allContentMaps.resources[slug];
  else if (resolvedPageType === 'case-study') data = allContentMaps['case-studies'][slug];
  else if (resolvedPageType === 'cost') data = allContentMaps['cost-pages'][slug];
  else if (resolvedPageType === 'faq') data = allContentMaps['faq-hub'][slug];

  // Reset viewport scroll to top on content changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Page Not Found</h2>
          <p style={{ color: 'var(--text-secondary)', margin: '1rem 0 2rem' }}>The requested content resource could not be resolved.</p>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const parentBreadcrumb = resolvedPageType ? parentMap[resolvedPageType] : null;

  return (
    <>
      {/* Scroll Progress Indicator Bar */}
      <ScrollProgress />
      
      <div className={styles.page}>
        <div className="container">
          
          {/* Breadcrumb Hierarchy Links */}
          <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
            <Link to="/">Home</Link>
            {parentBreadcrumb && (
              <>
                <span aria-hidden="true">/</span>
                <Link to={parentBreadcrumb.path}>{parentBreadcrumb.label}</Link>
              </>
            )}
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: 'var(--accent-light)', fontWeight: 600 }}>
              {data.name || data.title.split('|')[0].trim()}
            </span>
          </nav>

          {/* Social / Printing Utilities Strip */}
          <div style={{ marginTop: '2rem' }}>
            <ShareWidget 
              readingTime={data.readTime || "5 min read"} 
              lastUpdated={data.dateUpdated || data.datePublished || "July 11, 2026"} 
              author={data.author || "Algorithyum Systems Group"} 
              title={`${data.title.split('|')[0].trim()}`} 
            />
          </div>

          {/* Two-Column Structured Content Framework */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem', alignItems: 'flex-start', marginTop: '2rem' }}>
            
            {/* Dynamic Rendering Stack */}
            <div>
              <ContentRenderer 
                blocks={data.blocks || []} 
                onOpenConsultation={() => navigate('/contact')}
                currentPageSlug={data.slug}
                currentPageTags={data.tags || data.keywords || []}
                currentPageCategory={data.category || ''}
                currentPageRelatedTo={data.relatedTo || []}
              />
            </div>

            {/* Sidebar Sticky Navigation Hub */}
            <aside style={{ position: 'sticky', top: '140px' }} className="no-print">
              <AutoTOC />
            </aside>

          </div>

        </div>
      </div>
    </>
  );
};
