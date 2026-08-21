'use client';

import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import styles from './Footer.module.css';
import { useAppNavigation } from '@/lib/utils/useNavigation';

interface FooterProps {
  onOpenConsultation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
}) => {
  const { navigate } = useAppNavigation();
  const handleConsultation = onOpenConsultation || (() => navigate('/contact'));
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div 
              className={styles.logoWrapper} 
              onClick={(e) => handleNavClick(e, '/')}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate('/'); } }}
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
              <span>Algorithyum</span>
            </div>
            <p className={styles.brandDesc}>
              Engineering secure, intelligent, and scalable technological infrastructure for enterprise businesses and government bodies globally.
            </p>
            <div className={styles.socials}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linkCol}>
            <span className={styles.colTitle}>Quick Links</span>
            <ul className={styles.linkList}>
              <li>
                <a href="/" onClick={(e) => handleNavClick(e, '/')}>Home</a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleNavClick(e, '/about')}>About</a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleNavClick(e, '/services')}>Services</a>
              </li>
              <li>
                <a href="/solutions" onClick={(e) => handleNavClick(e, '/solutions')}>Solutions</a>
              </li>
              <li>
                <a href="/industries" onClick={(e) => handleNavClick(e, '/industries')}>Industries</a>
              </li>
              <li>
                <a href="/technologies" onClick={(e) => handleNavClick(e, '/technologies')}>Technologies</a>
              </li>
            </ul>
          </div>

          {/* Company Links Column */}
          <div className={styles.linkCol}>
            <span className={styles.colTitle}>Company</span>
            <ul className={styles.linkList}>
              <li>
                <a href="/careers" onClick={(e) => handleNavClick(e, '/careers')}>Careers</a>
              </li>
              <li>
                <a href="/blog" onClick={(e) => handleNavClick(e, '/blog')}>Blog Insights</a>
              </li>
              <li>
                <a href="/guides" onClick={(e) => handleNavClick(e, '/guides')}>Guides Hub</a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>Contact Us</a>
              </li>
              <li>
                <a href="/sitemap" onClick={(e) => handleNavClick(e, '/sitemap')}>HTML Sitemap</a>
              </li>
              <li>
                <button onClick={handleConsultation} style={{ background: 'transparent', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer', textAlign: 'left', display: 'block' }}>
                  Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className={styles.newsletterCol}>
            <span className={styles.colTitle}>Newsletter</span>
            <p className={styles.newsletterText}>
              Subscribe to receive quarterly technical analysis on emerging technologies and systems architectures.
            </p>
            <form onSubmit={handleSubscribe} className={styles.form}>
              <input
                type="email"
                placeholder="Enter corporate email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
                aria-label="Corporate Email Address"
              />
              <button type="submit" className="btn btn-primary styles.submitBtn">
                {isSubscribed ? <Check size={16} /> : <Send size={16} />}
              </button>
            </form>
            {isSubscribed && (
              <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>
                Successfully subscribed! Check your inbox soon.
              </span>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <span>© {new Date().getFullYear()} Algorithyum Inc. All rights reserved.</span>
          <div className={styles.legalLinks}>
            <a href="/privacy" onClick={(e) => handleNavClick(e, '/privacy')}>Privacy Policy</a>
            <a href="/terms" onClick={(e) => handleNavClick(e, '/terms')}>Terms of Service</a>
            <a href="/cookies" onClick={(e) => handleNavClick(e, '/cookies')}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
