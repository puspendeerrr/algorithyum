import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SEOManager } from './components/SEOManager';
import { ConsultationModal } from './components/Modals';
import { PageLoader } from './components/PageLoader';

// Multi-page code-split lazy imports
const Home = lazy(() => import('./views/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./views/About').then(m => ({ default: m.About })));
const ServicesOverview = lazy(() => import('./views/ServicesOverview').then(m => ({ default: m.ServicesOverview })));
const ServiceDetail = lazy(() => import('./views/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const Solutions = lazy(() => import('./views/Solutions').then(m => ({ default: m.Solutions })));
const IndustriesPage = lazy(() => import('./views/IndustriesPage').then(m => ({ default: m.IndustriesPage })));
const TechnologiesPage = lazy(() => import('./views/TechnologiesPage').then(m => ({ default: m.TechnologiesPage })));
const BlogListing = lazy(() => import('./views/BlogListing').then(m => ({ default: m.BlogListing })));
const BlogPage = lazy(() => import('./views/BlogPage').then(m => ({ default: m.BlogPage })));
const CareersPage = lazy(() => import('./views/CareersPage').then(m => ({ default: m.CareersPage })));
const ContactPage = lazy(() => import('./views/ContactPage').then(m => ({ default: m.ContactPage })));
const LegalPage = lazy(() => import('./views/LegalPage').then(m => ({ default: m.LegalPage })));
const SitemapPage = lazy(() => import('./views/SitemapPage').then(m => ({ default: m.SitemapPage })));
const NotFound = lazy(() => import('./views/NotFound').then(m => ({ default: m.NotFound })));
const TechnologyTemplate = lazy(() => import('./components/TechnologyTemplate').then(m => ({ default: m.TechnologyTemplate })));
const IndustryTemplate = lazy(() => import('./components/IndustryTemplate').then(m => ({ default: m.IndustryTemplate })));
const ComparisonTemplate = lazy(() => import('./components/ComparisonTemplate').then(m => ({ default: m.ComparisonTemplate })));
const GuideTemplate = lazy(() => import('./components/GuideTemplate').then(m => ({ default: m.GuideTemplate })));
const GuidesArchive = lazy(() => import('./views/GuidesArchive').then(m => ({ default: m.GuidesArchive })));
const DynamicPageTemplate = lazy(() => import('./components/DynamicPageTemplate').then(m => ({ default: m.DynamicPageTemplate })));

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Automatically scroll to top on path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const techSlugs = [
    'react', 'nextjs', 'nodejs', 'typescript', 'docker', 'kubernetes',
    'aws', 'azure', 'google-cloud', 'openai', 'langchain', 'mongodb',
    'postgresql', 'redis', 'firebase', 'flutter', 'react-native'
  ];

  const comparisonSlugs = [
    'react-vs-nextjs', 'aws-vs-azure', 'mongodb-vs-postgresql', 'flutter-vs-react-native'
  ];

  return (
    <>
      {/* Dynamic SEO & JSON-LD Headers */}
      <SEOManager />

      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Navbar onOpenConsultation={() => navigate('/contact')} />

      {/* Main Content Area */}
      <main id="main-content" role="main">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route 
              path="/" 
              element={<Home onOpenConsultation={() => navigate('/contact')} onOpenContact={() => navigate('/contact')} />} 
            />
            <Route 
              path="/about" 
              element={<About onOpenConsultation={() => navigate('/contact')} />} 
            />
            <Route 
              path="/services" 
              element={<ServicesOverview />} 
            />
            <Route 
              path="/services/:serviceId" 
              element={<ServiceDetail onOpenConsultation={() => navigate('/contact')} />} 
            />
            <Route 
              path="/solutions" 
              element={<Solutions onOpenConsultation={() => navigate('/contact')} />} 
            />
            <Route 
              path="/industries" 
              element={<IndustriesPage />} 
            />
            <Route 
              path="/industries/:industryId" 
              element={<IndustryTemplate />} 
            />
            <Route 
              path="/technologies" 
              element={<TechnologiesPage />} 
            />
            <Route 
              path="/technologies/:techId" 
              element={<TechnologyTemplate />} 
            />
            <Route 
              path="/blog" 
              element={<BlogListing />} 
            />
            <Route 
              path="/blog/:slug" 
              element={<BlogPage onOpenConsultation={() => navigate('/contact')} />} 
            />
            
            {/* Dynamic Guides Engine */}
            <Route 
              path="/guides" 
              element={<GuidesArchive />} 
            />
            <Route 
              path="/guides/:guideId" 
              element={<GuideTemplate />} 
            />

            {/* Dynamic Content Population Engine Routes */}
            <Route 
              path="/resources/:resourceId" 
              element={<DynamicPageTemplate pageType="resource" />} 
            />
            <Route 
              path="/case-studies/:caseStudyId" 
              element={<DynamicPageTemplate pageType="case-study" />} 
            />
            <Route 
              path="/faq/:faqId" 
              element={<DynamicPageTemplate pageType="faq" />} 
            />
            <Route 
              path="/cost/:costId" 
              element={<DynamicPageTemplate pageType="cost" />} 
            />

            {/* Direct Backwards-Compatible Technology Slugs */}
            {techSlugs.map(slug => (
              <Route 
                key={slug} 
                path={`/${slug}`} 
                element={<TechnologyTemplate />} 
              />
            ))}

            {/* Programmatic Comparison Engine Routes */}
            {comparisonSlugs.map(slug => (
              <Route 
                key={slug} 
                path={`/${slug}`} 
                element={<ComparisonTemplate />} 
              />
            ))}

            <Route 
              path="/careers" 
              element={<CareersPage onOpenContact={() => navigate('/contact')} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            <Route 
              path="/privacy" 
              element={<LegalPage type="privacy" />} 
            />
            <Route 
              path="/terms" 
              element={<LegalPage type="terms" />} 
            />
            <Route 
              path="/cookies" 
              element={<LegalPage type="cookies" />} 
            />
            <Route 
              path="/sitemap" 
              element={<SitemapPage />} 
            />
            <Route 
              path="*" 
              element={<NotFound />} 
            />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => navigate('/contact')} />

      {/* Overlays / Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}

export default App;
