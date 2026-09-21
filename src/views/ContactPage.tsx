'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Check, 
  Copy, 
  ShieldCheck, 
  ExternalLink, 
  Clock, 
  Code, 
  Layers, 
  FileCheck,
  ChevronDown,
  CheckCircle2,
  Zap,
  ArrowRight,
  Send
} from 'lucide-react';
import styles from './ContactPage.module.css';
import { trackCTAClick } from '@/lib/analytics';

interface FAQItem {
  question: string;
  answer: string;
}

const contactFaqs: FAQItem[] = [
  {
    question: 'How quickly will we receive a response after emailing info@algorithyum.in?',
    answer: 'Every inquiry sent to info@algorithyum.in is reviewed directly by our Principal Architects and technical leads. You will receive an initial technical evaluation or scheduling reply within 24 business hours (often within a few hours on weekdays).'
  },
  {
    question: 'Do you execute Non-Disclosure Agreements (NDAs) before reviewing technical specifications?',
    answer: 'Yes, absolutely. We regularly sign bilateral, mutual NDAs before reviewing proprietary architectures, private GitHub repositories, or confidential product requirements to ensure complete intellectual property protection.'
  },
  {
    question: 'What details should we include in our email for the fastest and most accurate estimate?',
    answer: 'A brief overview of your business problem, the type of software needed (e.g., custom ERP, web portal, AI workflow, mobile app), any existing tech stack constraints, your target timeline, and whether you prefer a fixed-cost milestone or a dedicated monthly engineering pod.'
  },
  {
    question: 'Can we hire a dedicated engineering pod instead of a fixed-scope project?',
    answer: 'Yes. We provide autonomous, senior-level engineering pods (frontend, backend, AI/ML, DevOps, and QA) that integrate directly into your sprint cycles, Jira boards, and Slack/Teams channels on a flexible monthly retainer model.'
  },
  {
    question: 'Do you collaborate with international clients across North America, Europe, and APAC?',
    answer: 'Yes. Our delivery and engineering hub serves clients globally. We schedule overlapping communication windows across US time zones (EST/PST), Europe (GMT/CET), and APAC, ensuring seamless standups and synchronous architectural reviews.'
  }
];

export const ContactPage: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [whatsappCopied, setWhatsappCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@algorithyum.in');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText('+91 94857 69108');
    setWhatsappCopied(true);
    setTimeout(() => setWhatsappCopied(false), 2500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.ambientGlow} />

      <div className="container">
        {/* Hero Section */}
        <section className={styles.heroSection}>

          <h1 className={styles.heroTitle}>
            Connect Directly With Our{' '}
            <span className={styles.heroTitleGradient}>Solutions Team</span>
          </h1>

          <p className={styles.heroDesc}>
            Whether you have a detailed RFP ready, need a system audit, or want to discuss a new 
            custom software or AI initiative — email us directly. No middle-tier sales layers, 
            just direct technical collaboration with senior engineers.
          </p>

          <div className={styles.trustPills}>
            <div className={styles.trustPill}>
              <Clock size={16} className={styles.trustIcon} />
              <span>&lt; 24h Response SLA</span>
            </div>
            <div className={styles.trustPill}>
              <ShieldCheck size={16} className={styles.trustIcon} />
              <span>Strict NDA &amp; IP Protection</span>
            </div>
            <div className={styles.trustPill}>
              <Code size={16} className={styles.trustIcon} />
              <span>Direct Lead Architect Access</span>
            </div>
            <div className={styles.trustPill}>
              <Layers size={16} className={styles.trustIcon} />
              <span>Milestone-Based Delivery</span>
            </div>
          </div>
        </section>

        {/* Primary Contact Channels Grid (Email Prioritized) */}
        <section className={styles.channelsSection} aria-label="Direct Channels">
          <div className={styles.channelsGrid}>
            
            {/* Primary Channel: Email (Featured & Highlighted) */}
            <div className={`${styles.channelCard} ${styles.emailHeroCard}`}>
              <div className={styles.cardHighlightBadge}>
                <Zap size={13} />
                <span>Primary &amp; Recommended for RFPs</span>
              </div>

              <div className={styles.cardHeader}>
                <div className={styles.emailIcon}>
                  <Mail size={26} />
                </div>
                <div>
                  <span className={styles.channelLabel}>Primary Communication Channel</span>
                  <a 
                    href="mailto:info@algorithyum.in?subject=Project%20Inquiry%20-%20Algorithyum" 
                    className={styles.emailValue}
                    onClick={() => trackCTAClick('Email Address Click', 'Contact Page')}
                  >
                    info@algorithyum.in
                  </a>
                </div>
              </div>

              <p className={styles.channelSubtext}>
                Our central engineering inbox. Send your project brief, architecture specs, or RFPs. 
                Monitored around the clock by our technical directors and solution leads.
              </p>

              <div className={styles.emailFeatures}>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.featureCheck} />
                  <span>Reviewed by senior architects within 24 business hours</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.featureCheck} />
                  <span>Direct technical feasibility assessment and preliminary roadmap</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.featureCheck} />
                  <span>Mutual NDA execution prior to reviewing private codebases</span>
                </div>
              </div>

              <div className={styles.channelActions}>
                <a
                  href="mailto:info@algorithyum.in?subject=Project%20Inquiry%20-%20Algorithyum"
                  className={styles.actionBtnPrimary}
                  onClick={() => trackCTAClick('Write Email Button', 'Contact Page')}
                >
                  <Send size={15} />
                  Write Email Directly
                </a>
                <button 
                  onClick={handleCopyEmail} 
                  className={styles.actionBtn} 
                  aria-label="Copy primary email address"
                >
                  {emailCopied ? <Check size={15} color="#10b981" /> : <Copy size={15} />}
                  {emailCopied ? 'Email Copied!' : 'Copy Email Address'}
                </button>
              </div>

              <div className={styles.emailSubjectTip}>
                <span className={styles.tipLabel}>Subject Tip:</span>
                <code>Project Inquiry: [Your Company / System Name]</code>
              </div>
            </div>

            {/* Quick Channel: WhatsApp */}
            <div className={`${styles.channelCard} ${styles.whatsappCard}`}>
              <div className={styles.cardHighlightBadgeGreen}>
                <MessageCircle size={13} />
                <span>Instant Messaging</span>
              </div>

              <div className={styles.cardHeader}>
                <div className={styles.whatsappIcon}>
                  <MessageCircle size={26} />
                </div>
                <div>
                  <span className={styles.channelLabel}>Direct WhatsApp Support</span>
                  <a 
                    href="https://wa.me/919485769108?text=Hello%20Algorithyum%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.whatsappValue}
                    onClick={() => trackCTAClick('WhatsApp Number Click', 'Contact Page')}
                  >
                    +91 94857 69108
                  </a>
                </div>
              </div>

              <p className={styles.channelSubtext}>
                Prefer instant messaging? Connect with our technical coordination team for swift questions, 
                timeline checks, or scheduling an architecture discovery session.
              </p>

              <div className={styles.whatsappFeatures}>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.featureCheckGreen} />
                  <span>Rapid responses for scope questions and availability</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.featureCheckGreen} />
                  <span>Immediate links to calendar invites and video briefings</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle2 size={16} className={styles.featureCheckGreen} />
                  <span>Active Mon – Fri: 9:00 AM – 6:00 PM IST (UTC+5:30)</span>
                </div>
              </div>

              <div className={styles.channelActions}>
                <a
                  href="https://wa.me/919485769108?text=Hello%20Algorithyum%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionBtnWhatsApp}
                  onClick={() => trackCTAClick('Chat on WhatsApp Button', 'Contact Page')}
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
                <button 
                  onClick={handleCopyWhatsApp} 
                  className={styles.actionBtn} 
                  aria-label="Copy WhatsApp contact number"
                >
                  {whatsappCopied ? <Check size={15} color="#10b981" /> : <Copy size={15} />}
                  {whatsappCopied ? 'Number Copied!' : 'Copy Number'}
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* What to Include in Your Email / Brief */}
        <section className={styles.briefSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Preparation Guide</span>
            <h2 className={styles.sectionTitle}>What to Include in Your Email Inquiry</h2>
            <p className={styles.sectionDesc}>
              To help us evaluate your requirements swiftly, here are the key technical details our architects find most valuable:
            </p>
          </div>

          <div className={styles.briefGrid}>
            <div className={styles.briefCard}>
              <div className={styles.briefNumber}>01</div>
              <h3 className={styles.briefTitle}>System Goals &amp; Problem Statement</h3>
              <p className={styles.briefText}>
                Outline what you are looking to build or modernize (e.g., custom ERP, high-concurrency web app, automated AI agent pipeline, or mobile app).
              </p>
            </div>

            <div className={styles.briefCard}>
              <div className={styles.briefNumber}>02</div>
              <h3 className={styles.briefTitle}>Existing Tech Stack &amp; Dependencies</h3>
              <p className={styles.briefText}>
                Mention your current infrastructure (e.g., React, Next.js, Node.js, Python, PostgreSQL, AWS/GCP, or legacy systems requiring modernization).
              </p>
            </div>

            <div className={styles.briefCard}>
              <div className={styles.briefNumber}>03</div>
              <h3 className={styles.briefTitle}>Target Timeline &amp; Milestones</h3>
              <p className={styles.briefText}>
                State your expected milestones — whether you need a fast-track MVP within 4–6 weeks, a standard 3-month production release, or ongoing engineering support.
              </p>
            </div>

            <div className={styles.briefCard}>
              <div className={styles.briefNumber}>04</div>
              <h3 className={styles.briefTitle}>Preferred Engagement Model</h3>
              <p className={styles.briefText}>
                Let us know if you prefer a fixed-price milestone delivery or an integrated, dedicated full-time engineering pod working alongside your product team.
              </p>
            </div>
          </div>
        </section>

        {/* Engagement Models Overview */}
        <section className={styles.modelsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Flexible Collaboration</span>
            <h2 className={styles.sectionTitle}>How You Can Partner With Algorithyum</h2>
            <p className={styles.sectionDesc}>
              Tailored delivery structures designed to match your stage of technical maturity and scale.
            </p>
          </div>

          <div className={styles.modelsGrid}>
            <div className={styles.modelCard}>
              <div className={styles.modelIcon}>
                <Layers size={22} />
              </div>
              <h3 className={styles.modelTitle}>Dedicated Engineering Pods</h3>
              <p className={styles.modelText}>
                Autonomous, cross-functional engineering teams (frontend, backend, DevOps, QA) embedded directly into your sprint rituals and code repositories.
              </p>
              <ul className={styles.modelList}>
                <li>Direct GitHub/GitLab integration</li>
                <li>Daily synchronous standups &amp; sprint demos</li>
                <li>Scale pod capacity up or down as needs evolve</li>
              </ul>
            </div>

            <div className={styles.modelCard}>
              <div className={styles.modelIcon}>
                <Code size={22} />
              </div>
              <h3 className={styles.modelTitle}>Turnkey End-to-End Delivery</h3>
              <p className={styles.modelText}>
                Full lifecycle software construction from system architecture, database schema design, UI/UX implementation, and cloud deployment to post-launch SLAs.
              </p>
              <ul className={styles.modelList}>
                <li>Guaranteed milestone deliverables</li>
                <li>Rigorous CI/CD pipelines &amp; test coverage</li>
                <li>Complete IP and source code ownership</li>
              </ul>
            </div>

            <div className={styles.modelCard}>
              <div className={styles.modelIcon}>
                <FileCheck size={22} />
              </div>
              <h3 className={styles.modelTitle}>Architecture &amp; Code Audits</h3>
              <p className={styles.modelText}>
                Deep-dive diagnostic evaluations of legacy systems, bottleneck identification, cloud infrastructure spend optimization, and security audits.
              </p>
              <ul className={styles.modelList}>
                <li>Performance &amp; latency profiling</li>
                <li>Vulnerability &amp; compliance screening</li>
                <li>Actionable remediation roadmap</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3-Step Engagement Process */}
        <section className={styles.processSection}>
          <div className={styles.processCard}>
            <div className={styles.processHeader}>
              <div className={styles.processIconWrapper}>
                <FileCheck size={24} />
              </div>
              <div>
                <span className={styles.sectionEyebrow} style={{ textAlign: 'left', margin: 0 }}>Transparent Methodology</span>
                <h2 className={styles.processTitle}>Our 3-Step Onboarding Process</h2>
              </div>
            </div>

            <div className={styles.timelineGrid}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>1</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineItemTitle}>Technical Scope Audit (&lt; 24h)</h3>
                  <p className={styles.timelineItemDesc}>
                    Once you email info@algorithyum.in, our senior technical architects review your requirements, technical constraints, and stack suitability within 24 hours.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>2</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineItemTitle}>30-Min Discovery Session</h3>
                  <p className={styles.timelineItemDesc}>
                    A focused, engineer-to-engineer technical call to align on architecture choices, identify potential bottlenecks, and define key project milestones.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>3</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineItemTitle}>Detailed Roadmap &amp; SOW</h3>
                  <p className={styles.timelineItemDesc}>
                    You receive an actionable execution roadmap with transparent milestone pricing, sprint timelines, deliverables breakdown, and mutual NDA terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className={styles.faqSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Common Questions</span>
            <h2 className={styles.sectionTitle}>Inquiry &amp; Consultation FAQs</h2>
            <p className={styles.sectionDesc}>
              Everything you need to know before reaching out to our engineering team.
            </p>
          </div>

          <div className={styles.faqList}>
            {contactFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}>
                  <button
                    className={styles.faqQuestionBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQuestionText}>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotate : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswerContainer}>
                      <p className={styles.faqAnswerText}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Final CTA Banner */}
        <section className={styles.ctaBanner}>
          <div className={styles.ctaGlow} />
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Architect Your Next Solution?</h2>
            <p className={styles.ctaDesc}>
              Drop our solutions architects a line at{' '}
              <strong style={{ color: '#fff' }}>info@algorithyum.in</strong> or start a quick WhatsApp chat. 
              We are ready to partner on your most ambitious engineering initiatives.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="mailto:info@algorithyum.in?subject=Project%20Inquiry%20-%20Algorithyum"
                className={styles.actionBtnPrimary}
                onClick={() => trackCTAClick('Bottom CTA Write Email', 'Contact Page')}
              >
                <Mail size={16} />
                Email: info@algorithyum.in
              </a>
              <a
                href="https://wa.me/919485769108?text=Hello%20Algorithyum%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtnWhatsApp}
                onClick={() => trackCTAClick('Bottom CTA WhatsApp', 'Contact Page')}
              >
                <MessageCircle size={16} />
                WhatsApp: +91 94857 69108
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContactPage;
