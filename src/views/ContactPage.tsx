'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Check, 
  AlertTriangle, 
  Copy, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  Code,
  Layers,
  FileCheck
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import styles from './ContactPage.module.css';
import { trackFormSubmission, trackCTAClick } from '@/lib/analytics';

export const ContactPage: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'custom-dev',
    timeline: '3-months',
    detail: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [emailCopied, setEmailCopied] = useState(false);

  // Form Validation
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid business email address.';
    }
    if (formData.detail.trim().length < 10) {
      errors.detail = 'Please provide project details of at least 10 characters.';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form Submission via EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    console.log('Contact page consultation field values before submission:', {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      service: formData.service,
      timeline: formData.timeline,
      detail: formData.detail,
    });

    const recipientEmail = formData.email.trim();
    if (!recipientEmail) {
      console.warn('Warning: Recipient email is empty!');
    }

    const templateParams = {
      name: formData.name.trim(),
      email: recipientEmail,
      company: formData.company.trim() || 'Not Specified',
      phone: formData.phone.trim() || 'Not Provided',
      service: formData.service,
      budget: `Timeline: ${formData.timeline}`,
      subject: 'Consultation Booking Request',
      message: formData.detail.trim(),
      website: 'https://algorithyum.in',
      timestamp: new Date().toLocaleString(),

      // Aliases & Fallbacks
      user_name: formData.name.trim(),
      user_company: formData.company.trim() || 'Not Specified',
      user_email: recipientEmail,
      to_email: 'info@algorithyum.in',
      reply_to: recipientEmail,
      user_phone: formData.phone.trim() || 'Not Provided',
      user_service: formData.service,
      user_budget: `Timeline: ${formData.timeline}`,
      email_subject: 'Consultation Booking Request',
      email_message: formData.detail.trim(),
      submission_time: new Date().toLocaleString(),
    };

    console.log('Complete templateParams object sent to EmailJS (Contact Page):', templateParams);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID || 'template_af14tdf';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !adminTemplateId || !publicKey) {
        throw new Error('EmailJS environment configurations are missing.');
      }

      await emailjs.send(
        serviceId,
        process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID || adminTemplateId,
        templateParams,
        publicKey
      );

      setIsSuccess(true);
      setValidationErrors({});
      trackFormSubmission('Contact Page Consultation Form', true, {
        service: formData.service,
        timeline: formData.timeline,
      });
      trackCTAClick('Schedule Strategy Consultation', 'Contact Page');
    } catch (err: any) {
      const errMsg = err.text || err.message || 'Failed to schedule consultation session.';
      setErrorMessage(errMsg);
      trackFormSubmission('Contact Page Consultation Form', false, { error: errMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMessage('');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: 'custom-dev',
      timeline: '3-months',
      detail: '',
    });
    setValidationErrors({});
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@algorithyum.in');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.ambientGlow} />

      <div className="container">
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>Direct Engineering Hub</span>
          </div>

          <h1 className={styles.heroTitle}>
            Let&apos;s Build Something{' '}
            <span className={styles.heroTitleGradient}>Extraordinary Together</span>
          </h1>

          <p className={styles.heroDesc}>
            Whether you are modernizing legacy infrastructure, building custom ERP systems, 
            deploying autonomous AI workflows, or launching scalable web and mobile applications — 
            our dedicated software engineering pods are ready to partner with you.
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
              <span>Direct Senior Architect Access</span>
            </div>
            <div className={styles.trustPill}>
              <Layers size={16} className={styles.trustIcon} />
              <span>Milestone-Based Execution</span>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className={styles.mainGrid}>
          
          {/* Left Column: Complete Consultation Form */}
          <div className={styles.formCard}>
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.formHeader}>
                    <h2 className={styles.formTitle}>Schedule Strategy Consultation</h2>
                    <p className={styles.formSubtitle}>
                      Tell us about your project requirements. Our technical directors will audit your system constraints and email you within 24 business hours.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className={styles.errorBanner} role="alert">
                      <AlertTriangle size={18} style={{ flexShrink: 0 }} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
                    {/* Name and Email */}
                    <div className={styles.inputRow}>
                      <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="contact-name">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          className={`${styles.input} ${validationErrors.name ? styles.inputInvalid : ''}`}
                          required
                          aria-required="true"
                          aria-invalid={!!validationErrors.name}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                        />
                        {validationErrors.name && (
                          <span className={styles.errorText}>{validationErrors.name}</span>
                        )}
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="contact-email">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          className={`${styles.input} ${validationErrors.email ? styles.inputInvalid : ''}`}
                          required
                          aria-required="true"
                          aria-invalid={!!validationErrors.email}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                        />
                        {validationErrors.email && (
                          <span className={styles.errorText}>{validationErrors.email}</span>
                        )}
                      </div>
                    </div>

                    {/* Company and Phone (Optional for enterprise inquiries) */}
                    <div className={styles.inputRow}>
                      <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="contact-company">
                          Company / Organization
                          <span className={styles.optionalTag}>Optional</span>
                        </label>
                        <input
                          type="text"
                          id="contact-company"
                          className={styles.input}
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                        />
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="contact-phone">
                          Phone Number
                          <span className={styles.optionalTag}>Optional</span>
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          className={styles.input}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    {/* Service Needed and Target Timeline */}
                    <div className={styles.inputRow}>
                      <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="contact-service">
                          Service Needed *
                        </label>
                        <select
                          id="contact-service"
                          className={styles.select}
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option value="custom-dev">Custom Software Development</option>
                          <option value="erp">ERP System Development</option>
                          <option value="web">Web Development &amp; Modernization</option>
                          <option value="mobile">Mobile App (iOS / Android / Flutter)</option>
                          <option value="ai">AI Integration &amp; Automation</option>
                          <option value="seo">Technical SEO &amp; Growth</option>
                        </select>
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.label} htmlFor="contact-timeline">
                          Target Launch *
                        </label>
                        <select
                          id="contact-timeline"
                          className={styles.select}
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        >
                          <option value="1-month">&lt; 1 Month (Fast-track MVP)</option>
                          <option value="3-months">1 – 3 Months (Standard Sprint)</option>
                          <option value="6-months">3 – 6 Months (Enterprise Platform)</option>
                          <option value="indefinite">R&amp;D / Ongoing Engineering Pod</option>
                        </select>
                      </div>
                    </div>

                    {/* Project Goals & Scope */}
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="contact-detail">
                        System Goals &amp; Technical Scope *
                      </label>
                      <textarea
                        id="contact-detail"
                        className={`${styles.textarea} ${validationErrors.detail ? styles.inputInvalid : ''}`}
                        rows={4}
                        required
                        aria-required="true"
                        aria-invalid={!!validationErrors.detail}
                        value={formData.detail}
                        onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
                        placeholder="Outline your project scope, core features, existing tech stack, user scale, or specific challenges..."
                      />
                      {validationErrors.detail && (
                        <span className={styles.errorText}>{validationErrors.detail}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className={`btn btn-primary ${styles.submitButton}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Scheduling Session...</>
                      ) : (
                        <>
                          Schedule Strategy Consultation
                          <Calendar size={18} />
                        </>
                      )}
                    </button>

                    <p className={styles.formDisclaimer}>
                      By submitting this form, your information is protected by our non-disclosure standards. 
                      We never share client data or technical scopes with third parties.
                    </p>
                  </form>
                </motion.div>
              ) : (
                /* Success View */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: 'spring', damping: 25 }}
                  className={styles.successWrapper}
                >
                  <div className={styles.successIconBadge}>
                    <Check size={40} />
                  </div>

                  <h3 className={styles.successTitle}>Consultation Scheduled</h3>

                  <p className={styles.successSubtitle}>
                    A confirmation has been dispatched. Our solutions architects are reviewing 
                    your project scope and will follow up with an introductory assessment within 24 business hours.
                  </p>

                  <div className={styles.successDetailsCard}>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Client:</span>
                      <span className={styles.detailValue}>{formData.name}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Email:</span>
                      <span className={styles.detailValue}>{formData.email}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Target Timeline:</span>
                      <span className={styles.detailValue}>{formData.timeline}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Status:</span>
                      <span className={styles.detailValue} style={{ color: '#10b981' }}>Queued for Architecture Review</span>
                    </div>
                  </div>

                  <button onClick={handleReset} className="btn btn-secondary" style={{ marginTop: '0.5rem' }}>
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Contact Channels, Location Map & Process */}
          <aside className={styles.infoColumn}>
            
            {/* Direct Communication Channels */}
            <div className={styles.infoCard}>
              <div className={styles.infoCardHeader}>
                <div className={styles.infoCardIcon}>
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className={styles.infoCardTitle}>Direct Channels</h3>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Immediate routes to reach our team
                  </span>
                </div>
              </div>

              <div className={styles.channelsList}>
                {/* Email Channel */}
                <div className={styles.channelItem}>
                  <Mail size={18} className={styles.channelIcon} />
                  <div className={styles.channelContent}>
                    <span className={styles.channelLabel}>Primary Email</span>
                    <a href="mailto:info@algorithyum.in" className={styles.channelValue}>
                      info@algorithyum.in
                    </a>
                    <div className={styles.channelSubtext}>
                      Monitored by our solutions engineering team
                    </div>
                    <div className={styles.channelActions}>
                      <button onClick={handleCopyEmail} className={styles.copyBtn} aria-label="Copy email address">
                        {emailCopied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                        {emailCopied ? 'Copied!' : 'Copy Email'}
                      </button>
                      <a
                        href="mailto:info@algorithyum.in?subject=Project%20Inquiry%20-%20Algorithyum"
                        className={styles.copyBtn}
                      >
                        <ExternalLink size={14} />
                        Write Email
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Channel */}
                <div className={styles.channelItem}>
                  <Phone size={18} className={styles.channelIcon} />
                  <div className={styles.channelContent}>
                    <span className={styles.channelLabel}>Telephone / WhatsApp</span>
                    <a href="tel:+919876543210" className={styles.channelValue}>
                      +91 98765 43210
                    </a>
                    <div className={styles.channelSubtext}>
                      Monday – Friday, 9:00 AM – 6:00 PM IST
                    </div>
                  </div>
                </div>

                {/* Office Location */}
                <div className={styles.channelItem}>
                  <MapPin size={18} className={styles.channelIcon} />
                  <div className={styles.channelContent}>
                    <span className={styles.channelLabel}>Engineering Hub &amp; Delivery</span>
                    <div className={styles.channelValue}>
                      New Delhi, India
                    </div>
                    <div className={styles.channelSubtext}>
                      Global Remote Pods serving US, Europe &amp; APAC clients
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className={styles.channelItem}>
                  <Clock size={18} className={styles.channelIcon} />
                  <div className={styles.channelContent}>
                    <span className={styles.channelLabel}>Business Hours</span>
                    <div className={styles.channelValue} style={{ fontSize: '0.95rem' }}>
                      Mon – Fri: 9:00 AM – 6:00 PM IST (UTC+5:30)
                    </div>
                    <div className={styles.channelSubtext}>
                      Urgent server alerts monitored 24/7 for active SLA clients
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className={styles.mapCard}>
              <div className={styles.mapHeader}>
                <div className={styles.mapTitleGroup}>
                  <MapPin size={18} style={{ color: 'var(--accent-light)' }} />
                  <h3 className={styles.mapTitle}>Our Hub</h3>
                </div>
                <a
                  href="https://maps.google.com/?q=New+Delhi+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapExternalLink}
                >
                  <span>Google Maps</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <div className={styles.mapFrameWrapper}>
                <iframe
                  title="Algorithyum Tech Hub Location"
                  className={styles.mapIframe}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754720078!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  loading="lazy"
                  allowFullScreen={false}
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className={styles.mapBadge}>
                  <MapPin size={12} color="var(--accent-light)" />
                  <span>Delhi NCR Tech Corridor &amp; Remote Delivery</span>
                </div>
              </div>
            </div>

            {/* Engagement Process Card */}
            <div className={styles.processCard}>
              <div className={styles.infoCardHeader}>
                <div className={styles.infoCardIcon}>
                  <FileCheck size={20} />
                </div>
                <div>
                  <h3 className={styles.infoCardTitle}>What Happens Next?</h3>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Our transparent 3-step onboarding
                  </span>
                </div>
              </div>

              <div className={styles.timelineList}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineNumber}>1</div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.timelineTitle}>Technical Scope Audit</h4>
                    <p className={styles.timelineDesc}>
                      Our leads review your constraints, stack compatibility, and performance requirements within 24 hours.
                    </p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineNumber}>2</div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.timelineTitle}>30-Min Strategy Call</h4>
                    <p className={styles.timelineDesc}>
                      A direct discovery session with a dedicated senior engineer to align on system architecture and milestones.
                    </p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineNumber}>3</div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.timelineTitle}>Custom Roadmap &amp; SOW</h4>
                    <p className={styles.timelineDesc}>
                      You receive a detailed milestone breakdown, sprint schedule, and fixed or agile pricing estimate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
