'use client';

import React from 'react';
import { resolveAuthor } from '../../data/authors';

interface AuthorCardProps {
  authorName: string;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({ authorName }) => {
  const author = resolveAuthor(authorName);

  return (
    <>
      <style>{`
        .author-card-container {
          display: flex;
          gap: 1.5rem;
          padding: 2rem;
          border-radius: var(--border-radius-md);
          margin-top: 3rem;
          align-items: center;
          text-align: left;
          border: 1px solid var(--border-color);
        }
        .author-social-link {
          color: var(--text-secondary);
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
        }
        .author-social-link:hover {
          color: var(--accent-light);
        }
        @media (max-width: 600px) {
          .author-card-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
      <div className="glass-panel author-card-container">
        <img 
          src={author.avatar} 
          alt={author.name} 
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--accent-light)'
          }}
          loading="lazy"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', flex: 1, width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>{author.name}</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 500 }}>{author.role}</span>
            </div>
            {author.socials && (
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                {author.socials.twitter && (
                  <a href={author.socials.twitter} target="_blank" rel="noopener noreferrer" className="author-social-link" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                )}
                {author.socials.linkedin && (
                  <a href={author.socials.linkedin} target="_blank" rel="noopener noreferrer" className="author-social-link" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9" rx="1"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                )}
                {author.socials.github && (
                  <a href={author.socials.github} target="_blank" rel="noopener noreferrer" className="author-social-link" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                )}
              </div>
            )}
          </div>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: '0.25rem 0 0' }}>
            {author.bio}
          </p>
        </div>
      </div>
    </>
  );
};
