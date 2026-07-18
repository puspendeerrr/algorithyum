import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Monitor scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Syncing
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light-theme');
      }
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
      document.documentElement.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const menuItems = [
    { id: '/', label: 'Home' },
    { id: '/about', label: 'About' },
    { id: '/services', label: 'Services' },
    { id: '/solutions', label: 'Solutions' },
    { id: '/industries', label: 'Industries' },
    { id: '/technologies', label: 'Technologies' },
    { id: '/blog', label: 'Blog' },
    { id: '/careers', label: 'Careers' },
    { id: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} role="banner">
        <div className={styles.navContainer}>
          {/* Logo */}
          <div 
            className={styles.logoContainer} 
            onClick={() => handleNavClick('/')} 
            role="link" 
            tabIndex={0} 
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleNavClick('/'); } }} 
            aria-label="Algorithyum Home"
          >
            <img 
              src="/logo.svg" 
              alt="Algorithyum Logo" 
              title="Algorithyum Homepage" 
              width="32" 
              height="32" 
              decoding="async" 
              className={styles.logoIcon} 
            />
            <span className={styles.logoText}>
              Algorithy<span className={styles.logoTextSpan}>um</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.navBar} role="navigation" aria-label="Main Navigation">
            <ul className={styles.navMenu}>
              {menuItems.map((item) => {
                if (item.id === '/services') {
                  return (
                    <li key={item.id} className={styles.navItemHasDropdown}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`${styles.navLink} ${
                          currentPath === item.id || currentPath.startsWith(item.id) ? styles.activeNavLink : ''
                        }`}
                        style={{ background: 'transparent', border: 'none' }}
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {item.label}
                      </button>
                      <div className={styles.megaMenu} role="menu" aria-label="Services Directory">
                        <div className={styles.megaColumn}>
                          <h4 className={styles.megaColumnTitle}>Engineering</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/services/software-development" onClick={(e) => { e.preventDefault(); handleNavClick('/services/software-development'); }} className={styles.megaLink}>Software Development</a></li>
                            <li><a href="/services/web-development" onClick={(e) => { e.preventDefault(); handleNavClick('/services/web-development'); }} className={styles.megaLink}>Web Development</a></li>
                            <li><a href="/services/mobile-app-development" onClick={(e) => { e.preventDefault(); handleNavClick('/services/mobile-app-development'); }} className={styles.megaLink}>Mobile App Dev</a></li>
                            <li><a href="/services/ui-ux" onClick={(e) => { e.preventDefault(); handleNavClick('/services/ui-ux'); }} className={styles.megaLink}>UI/UX Design</a></li>
                          </ul>
                        </div>
                        <div className={styles.megaColumn}>
                          <h4 className={styles.megaColumnTitle}>Advanced Tech</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/services/ai" onClick={(e) => { e.preventDefault(); handleNavClick('/services/ai'); }} className={styles.megaLink}>Artificial Intelligence</a></li>
                            <li><a href="/services/data-engineering" onClick={(e) => { e.preventDefault(); handleNavClick('/services/data-engineering'); }} className={styles.megaLink}>Data Engineering</a></li>
                            <li><a href="/services/automation" onClick={(e) => { e.preventDefault(); handleNavClick('/services/automation'); }} className={styles.megaLink}>Automation</a></li>
                            <li><a href="/services/it-consulting" onClick={(e) => { e.preventDefault(); handleNavClick('/services/it-consulting'); }} className={styles.megaLink}>IT Consulting</a></li>
                          </ul>
                        </div>
                        <div className={styles.megaColumn}>
                          <h4 className={styles.megaColumnTitle}>Cloud &amp; Ops</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/services/cloud" onClick={(e) => { e.preventDefault(); handleNavClick('/services/cloud'); }} className={styles.megaLink}>Cloud Computing</a></li>
                            <li><a href="/services/devops" onClick={(e) => { e.preventDefault(); handleNavClick('/services/devops'); }} className={styles.megaLink}>DevOps &amp; GitOps</a></li>
                            <li><a href="/services/cybersecurity" onClick={(e) => { e.preventDefault(); handleNavClick('/services/cybersecurity'); }} className={styles.megaLink}>Cybersecurity</a></li>
                          </ul>
                        </div>
                        <div className={styles.megaColumn}>
                          <h4 className={styles.megaColumnTitle}>Growth &amp; Design</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/services/seo" onClick={(e) => { e.preventDefault(); handleNavClick('/services/seo'); }} className={styles.megaLink}>Technical SEO</a></li>
                            <li><a href="/services/digital-marketing" onClick={(e) => { e.preventDefault(); handleNavClick('/services/digital-marketing'); }} className={styles.megaLink}>Digital Marketing</a></li>
                            <li><a href="/services/branding" onClick={(e) => { e.preventDefault(); handleNavClick('/services/branding'); }} className={styles.megaLink}>Branding Systems</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                }

                if (item.id === '/technologies') {
                  return (
                    <li key={item.id} className={styles.navItemHasDropdown}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`${styles.navLink} ${
                          currentPath === item.id || currentPath.startsWith(item.id) ? styles.activeNavLink : ''
                        }`}
                        style={{ background: 'transparent', border: 'none' }}
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {item.label}
                      </button>
                      <div className={styles.megaMenu} role="menu" aria-label="Technologies Stack">
                        <div className={styles.megaColumn}>
                          <h4 className={styles.megaColumnTitle}>Frontend &amp; Mobile</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/react" onClick={(e) => { e.preventDefault(); handleNavClick('/react'); }} className={styles.megaLink}>React</a></li>
                            <li><a href="/nextjs" onClick={(e) => { e.preventDefault(); handleNavClick('/nextjs'); }} className={styles.megaLink}>Next.js</a></li>
                            <li><a href="/flutter" onClick={(e) => { e.preventDefault(); handleNavClick('/flutter'); }} className={styles.megaLink}>Flutter</a></li>
                            <li><a href="/react-native" onClick={(e) => { e.preventDefault(); handleNavClick('/react-native'); }} className={styles.megaLink}>React Native</a></li>
                            <li><a href="/typescript" onClick={(e) => { e.preventDefault(); handleNavClick('/typescript'); }} className={styles.megaLink}>TypeScript</a></li>
                          </ul>
                        </div>
                        <div className={styles.megaColumn}>
                          <h4 className={styles.megaColumnTitle}>Backend &amp; Logic</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/nodejs" onClick={(e) => { e.preventDefault(); handleNavClick('/nodejs'); }} className={styles.megaLink}>Node.js</a></li>
                            <li><a href="/services/software-development" onClick={(e) => { e.preventDefault(); handleNavClick('/services/software-development'); }} className={styles.megaLink}>Go (Golang)</a></li>
                            <li><a href="/services/ai" onClick={(e) => { e.preventDefault(); handleNavClick('/services/ai'); }} className={styles.megaLink}>Python</a></li>
                          </ul>
                        </div>
                        <div className={styles.megaColumn}>
                          <h4 className={styles.megaColumnTitle}>Cloud &amp; Platforms</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/aws" onClick={(e) => { e.preventDefault(); handleNavClick('/aws'); }} className={styles.megaLink}>AWS</a></li>
                            <li><a href="/azure" onClick={(e) => { e.preventDefault(); handleNavClick('/azure'); }} className={styles.megaLink}>Microsoft Azure</a></li>
                            <li><a href="/google-cloud" onClick={(e) => { e.preventDefault(); handleNavClick('/google-cloud'); }} className={styles.megaLink}>Google Cloud</a></li>
                            <li><a href="/docker" onClick={(e) => { e.preventDefault(); handleNavClick('/docker'); }} className={styles.megaLink}>Docker</a></li>
                            <li><a href="/kubernetes" onClick={(e) => { e.preventDefault(); handleNavClick('/kubernetes'); }} className={styles.megaLink}>Kubernetes</a></li>
                          </ul>
                        </div>
                        <div className={styles.megaColumn}>
                          <h4 className={styles.megaColumnTitle}>Data &amp; Core Tech</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/postgresql" onClick={(e) => { e.preventDefault(); handleNavClick('/postgresql'); }} className={styles.megaLink}>PostgreSQL</a></li>
                            <li><a href="/mongodb" onClick={(e) => { e.preventDefault(); handleNavClick('/mongodb'); }} className={styles.megaLink}>MongoDB</a></li>
                            <li><a href="/redis" onClick={(e) => { e.preventDefault(); handleNavClick('/redis'); }} className={styles.megaLink}>Redis</a></li>
                            <li><a href="/firebase" onClick={(e) => { e.preventDefault(); handleNavClick('/firebase'); }} className={styles.megaLink}>Firebase</a></li>
                            <li><a href="/langchain" onClick={(e) => { e.preventDefault(); handleNavClick('/langchain'); }} className={styles.megaLink}>LangChain</a></li>
                            <li><a href="/openai" onClick={(e) => { e.preventDefault(); handleNavClick('/openai'); }} className={styles.megaLink}>OpenAI</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`${styles.navLink} ${
                        currentPath === item.id || (item.id !== '/' && currentPath.startsWith(item.id)) ? styles.activeNavLink : ''
                      }`}
                      style={{ background: 'transparent', border: 'none' }}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions: Theme Toggle, consultation booking, Mobile Toggle */}
          <div className={styles.navActions}>
            <button
              onClick={toggleTheme}
              className={styles.iconBtn}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>

            <button
              onClick={onOpenConsultation}
              className="btn btn-primary"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
              aria-label="Request a technical strategy consultation"
            >
              Consultation
              <ArrowRight size={14} aria-hidden="true" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={styles.menuToggle}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={styles.mobileOverlay}
          >
            <ul className={styles.mobileNavMenu}>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`${styles.mobileNavLink} ${
                      currentPath === item.id || (item.id !== '/' && currentPath.startsWith(item.id)) ? styles.mobileNavLinkActive : ''
                    }`}
                    style={{ background: 'transparent', border: 'none', width: '100%', textAlign: 'left' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className={styles.mobileActions}>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Book Consultation
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
