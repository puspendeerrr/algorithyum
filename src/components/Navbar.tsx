'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';
import { useAppNavigation } from '@/lib/utils/useNavigation';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
}) => {
  const { navigate, pathname: currentPath } = useAppNavigation();
  const handleConsultation = onOpenConsultation || (() => navigate('/contact'));

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

  // Lock / Unlock Body Scroll on Mobile Menu Open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

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
                          <h4 className={styles.megaColumnTitle}>Software & ERP</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/services/software-development" onClick={(e) => { e.preventDefault(); handleNavClick('/services/software-development'); }} className={styles.megaLink}>Custom Software</a></li>
                            <li><a href="/services/erp" onClick={(e) => { e.preventDefault(); handleNavClick('/services/erp'); }} className={styles.megaLink}>ERP Software</a></li>
                            <li><a href="/services/software-redesign" onClick={(e) => { e.preventDefault(); handleNavClick('/services/software-redesign'); }} className={styles.megaLink}>Software Redesign</a></li>
                            <li><a href="/services/web-development" onClick={(e) => { e.preventDefault(); handleNavClick('/services/web-development'); }} className={styles.megaLink}>Web Development</a></li>
                            <li><a href="/services/cloud" onClick={(e) => { e.preventDefault(); handleNavClick('/services/cloud'); }} className={styles.megaLink}>Cloud Services</a></li>
                          </ul>
                        </div>
                        <div className={styles.megaColumn}>
                          <h4 className={styles.megaColumnTitle}>Mobile Apps</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/services/mobile-app-development" onClick={(e) => { e.preventDefault(); handleNavClick('/services/mobile-app-development'); }} className={styles.megaLink}>Mobile App Engineering</a></li>
                            <li><a href="/services/android-app-development" onClick={(e) => { e.preventDefault(); handleNavClick('/services/android-app-development'); }} className={styles.megaLink}>Android App Dev</a></li>
                            <li><a href="/services/ios-app-development" onClick={(e) => { e.preventDefault(); handleNavClick('/services/ios-app-development'); }} className={styles.megaLink}>iOS App Dev</a></li>
                            <li><a href="/services/cross-platform-app-development" onClick={(e) => { e.preventDefault(); handleNavClick('/services/cross-platform-app-development'); }} className={styles.megaLink}>Cross-Platform Apps</a></li>
                            <li><a href="/services/game-development" onClick={(e) => { e.preventDefault(); handleNavClick('/services/game-development'); }} className={styles.megaLink}>Game Development</a></li>
                          </ul>
                        </div>
                        <div className={styles.megaColumn}>
                          <h4 className={styles.megaColumnTitle}>AI, Security & Growth</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/services/ai" onClick={(e) => { e.preventDefault(); handleNavClick('/services/ai'); }} className={styles.megaLink}>AI Services</a></li>
                            <li><a href="/services/ai-integration" onClick={(e) => { e.preventDefault(); handleNavClick('/services/ai-integration'); }} className={styles.megaLink}>AI Integration</a></li>
                            <li><a href="/services/ai-automation" onClick={(e) => { e.preventDefault(); handleNavClick('/services/ai-automation'); }} className={styles.megaLink}>AI Automation</a></li>
                            <li><a href="/services/seo" onClick={(e) => { e.preventDefault(); handleNavClick('/services/seo'); }} className={styles.megaLink}>SEO Services</a></li>
                            <li><a href="/services/cybersecurity" onClick={(e) => { e.preventDefault(); handleNavClick('/services/cybersecurity'); }} className={styles.megaLink}>Cybersecurity</a></li>
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
                          <h4 className={styles.megaColumnTitle}>Frontend & Mobile</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/technologies/react" onClick={(e) => { e.preventDefault(); handleNavClick('/technologies/react'); }} className={styles.megaLink}>React</a></li>
                            <li><a href="/technologies/nextjs" onClick={(e) => { e.preventDefault(); handleNavClick('/technologies/nextjs'); }} className={styles.megaLink}>Next.js</a></li>
                            <li><a href="/technologies/flutter" onClick={(e) => { e.preventDefault(); handleNavClick('/technologies/flutter'); }} className={styles.megaLink}>Flutter</a></li>
                            <li><a href="/technologies/react-native" onClick={(e) => { e.preventDefault(); handleNavClick('/technologies/react-native'); }} className={styles.megaLink}>React Native</a></li>
                            <li><a href="/technologies/typescript" onClick={(e) => { e.preventDefault(); handleNavClick('/technologies/typescript'); }} className={styles.megaLink}>TypeScript</a></li>
                          </ul>
                        </div>
                        <div className={styles.megaColumn}>
                          <h4 className={styles.megaColumnTitle}>Backend & APIs</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/technologies/nodejs" onClick={(e) => { e.preventDefault(); handleNavClick('/technologies/nodejs'); }} className={styles.megaLink}>Node.js</a></li>
                            <li><a href="/services/software-development" onClick={(e) => { e.preventDefault(); handleNavClick('/services/software-development'); }} className={styles.megaLink}>Go (Golang)</a></li>
                            <li><a href="/services/ai-integration" onClick={(e) => { e.preventDefault(); handleNavClick('/services/ai-integration'); }} className={styles.megaLink}>Python</a></li>
                          </ul>
                        </div>
                        <div className={styles.megaColumn}>
                          <h4 className={styles.megaColumnTitle}>AI & Databases</h4>
                          <ul className={styles.megaLinkList}>
                            <li><a href="/technologies/postgresql" onClick={(e) => { e.preventDefault(); handleNavClick('/technologies/postgresql'); }} className={styles.megaLink}>PostgreSQL</a></li>
                            <li><a href="/technologies/mongodb" onClick={(e) => { e.preventDefault(); handleNavClick('/technologies/mongodb'); }} className={styles.megaLink}>MongoDB</a></li>
                            <li><a href="/technologies/redis" onClick={(e) => { e.preventDefault(); handleNavClick('/technologies/redis'); }} className={styles.megaLink}>Redis</a></li>
                            <li><a href="/technologies/firebase" onClick={(e) => { e.preventDefault(); handleNavClick('/technologies/firebase'); }} className={styles.megaLink}>Firebase</a></li>
                            <li><a href="/technologies/langchain" onClick={(e) => { e.preventDefault(); handleNavClick('/technologies/langchain'); }} className={styles.megaLink}>LangChain</a></li>
                            <li><a href="/technologies/openai" onClick={(e) => { e.preventDefault(); handleNavClick('/technologies/openai'); }} className={styles.megaLink}>OpenAI</a></li>
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
              onClick={handleConsultation}
              className="btn btn-primary"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
              aria-label="Get in touch with us"
            >
              Get in Touch
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
                  handleConsultation();
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Get in Touch
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
