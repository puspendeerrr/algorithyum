'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { useAppNavigation } from '@/lib/utils/useNavigation';
import styles from './Hero.module.css';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const { navigate } = useAppNavigation();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    const particles: Particle[] = [];
    const maxParticles = width < 768 ? 40 : 100;
    const connectionDistance = 120;

    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Determine theme colors (electric blue vs light blue)
      const isLightTheme = document.documentElement.classList.contains('light-theme');
      const particleColor = isLightTheme ? 'rgba(0, 82, 255, 0.4)' : 'rgba(0, 210, 255, 0.4)';
      const lineColor = isLightTheme ? 'rgba(0, 82, 255, 0.08)' : 'rgba(0, 82, 255, 0.12)';

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off bounds
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction (push away gently)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.x += (dx / dist) * force * 2;
          p.y += (dy / dist) * force * 2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (connectionDistance - dist) / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor.replace(/[^,]+(?=\))/, `${alpha * 0.6}`);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Visual Canvas Elements */}
      <canvas ref={canvasRef} className={styles.canvas} role="presentation" aria-hidden="true" />
      <div className={styles.gridOverlay} />
      <div className="glow-blob" style={{ top: '10%', left: '20%', width: '400px', height: '400px' }} />
      <div className="glow-blob" style={{ bottom: '10%', right: '15%', width: '450px', height: '450px', background: '#00d2ff' }} />

      <div className={styles.content}>
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.badge}
        >
          <Sparkles size={14} />
          Software & AI Solutions
        </motion.div>

        {/* Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.headline}
        >
          Custom Software, ERP, Mobile Apps <br />
          <span className="text-gradient">& AI Solutions</span>
        </motion.h1>

        {/* Animated Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className={styles.subheadline}
        >
          We build custom software, ERP systems, websites, mobile apps, games, AI-powered solutions and help businesses grow with SEO.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.btnGroup}
        >
          <button onClick={handleGetStarted} className="btn btn-primary">
            Get Free Consultation
            <ArrowRight size={18} />
          </button>
          <a href="mailto:info@algorithyum.in" className="btn btn-secondary">
            <Mail size={18} />
            Email Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};
