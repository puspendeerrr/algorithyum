'use client';

import React, { useEffect, useState } from 'react';

export const ReadingProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '4px',
        background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 100%)',
        zIndex: 9999,
        transition: 'width 0.1s ease-out',
        boxShadow: '0 0 8px var(--accent-light)'
      }}
      aria-hidden="true"
    />
  );
};
