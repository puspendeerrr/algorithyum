'use client';

import React from 'react';
import { ArrowRight, Code, Heart, Cpu, MessageCircle } from 'lucide-react';
import { useAppNavigation } from '@/lib/utils/useNavigation';

interface AboutProps {
  onOpenConsultation?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const { navigate } = useAppNavigation();
  const handleConsultation = onOpenConsultation || (() => navigate('/contact'));

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left' }}>
        
        {/* Page Header */}
        <header style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
            Who We Are
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }} className="text-gradient">
            About Algorithyum
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            A software development company that builds custom software, websites, mobile apps, games, AI solutions, and helps businesses grow with SEO.
          </p>
        </header>

        {/* Who We Are */}
        <section style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            What We Do
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Algorithyum is a software development company. We help businesses build the software they need — whether that&apos;s a custom business application, a mobile app, a website, a game, or an AI-powered tool. We also offer SEO services to help businesses get found online.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            We believe in doing honest work. We don&apos;t oversell, we don&apos;t use fancy buzzwords, and we don&apos;t make promises we can&apos;t keep. We focus on writing clean code, communicating clearly, and delivering software that actually works.
          </p>
        </section>

        {/* What We Value */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '2rem' }}>
            What We Value
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ color: 'var(--accent-light)' }} aria-hidden="true"><Code size={24} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Clean, Quality Code</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                We write well-organized, tested code that&apos;s easy to read, maintain, and update. No shortcuts, no messy hacks.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ color: 'var(--accent-light)' }} aria-hidden="true"><MessageCircle size={24} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Clear Communication</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                We keep you updated at every step. You&apos;ll always know what we&apos;re working on, what&apos;s next, and if there are any issues.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ color: 'var(--accent-light)' }} aria-hidden="true"><Cpu size={24} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Modern Technologies</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                We use proven, modern tools like React, Next.js, Node.js, Flutter, and OpenAI — technologies that are reliable and well-supported.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ color: 'var(--accent-light)' }} aria-hidden="true"><Heart size={24} /></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Honesty & Transparency</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                We tell you what&apos;s realistic and what&apos;s not. We give honest estimates, transparent pricing, and no hidden surprises.
              </p>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section style={{ marginBottom: '4rem', padding: '2.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-md)', background: 'rgba(255, 255, 255, 0.01)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '0.5rem' }}>How We Work</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Algorithyum is a remote-first team. We work with clients through video calls, email, and project management tools. This allows us to focus on doing great work without the overhead of physical offices.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            We break every project into clear milestones, share progress regularly, and make sure you&apos;re always in the loop. If you have questions, we respond quickly — usually within 24 business hours.
          </p>
        </section>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <button onClick={handleConsultation} className="btn btn-primary" aria-label="Get in touch with us">
            Get in Touch
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
