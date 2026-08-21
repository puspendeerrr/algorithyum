'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, ArrowRight, ChevronLeft, AlertTriangle } from 'lucide-react';
import styles from './Modals.module.css';
import emailjs from '@emailjs/browser';

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
}

/* ==========================================================================
   1. CONSULTATION MODAL
   ========================================================================== */
export const ConsultationModal: React.FC<ModalBaseProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'ai', timeline: '3-months', detail: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email.';
    }
    if (formData.detail.trim().length < 10) {
      errors.detail = 'Please provide details of at least 10 characters.';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Log every form field value before submission
    console.log('Consultation modal field values before submission:', {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      timeline: formData.timeline,
      detail: formData.detail
    });

    const recipientEmail = formData.email.trim();
    if (!recipientEmail) {
      console.warn('Warning: Recipient email is empty!');
    }

    const templateParams = {
      // Clean prefix-free variables expected by template
      name: formData.name.trim(),
      email: recipientEmail,
      company: 'Not Specified',
      phone: 'Not Provided',
      service: formData.service,
      budget: `Timeline: ${formData.timeline}`,
      subject: 'Consultation Booking Request',
      message: formData.detail.trim(),
      time: new Date().toLocaleString(),

      // Legacy/Fallback variables with prefixes
      user_name: formData.name.trim(),
      user_company: 'Not Specified',
      user_email: recipientEmail,
      to_email: recipientEmail,
      to: recipientEmail,
      user_phone: 'Not Provided',
      user_service: formData.service,
      user_budget: `Timeline: ${formData.timeline}`,
      email_subject: 'Consultation Booking Request',
      email_message: formData.detail.trim(),
      submission_time: new Date().toLocaleString()
    };

    // Print the complete templateParams object to the console before calling EmailJS
    console.log('Complete templateParams object sent to EmailJS (Modal):', templateParams);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment configurations are missing.');
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSuccess(true);
      setValidationErrors({});
    } catch (err: any) {
      setErrorMessage(err.text || err.message || 'Failed to schedule consultation session.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMessage('');
    setFormData({ name: '', email: '', service: 'ai', timeline: '3-months', detail: '' });
    setValidationErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.modalOverlay} onClick={handleReset}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25 }}
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-modal-title"
          >
            <button className={styles.modalCloseBtn} onClick={handleReset} aria-label="Close modal">
              <X size={20} aria-hidden="true" />
            </button>

            {!isSuccess ? (
              <>
                <div>
                  <h3 className={styles.title} id="consultation-modal-title">Book Strategy Consultation</h3>
                  <p className={styles.subtitle}>Align with our senior software architects to review operational scopes and technology recommendations.</p>
                </div>

                {errorMessage && (
                  <div style={{ padding: '0.85rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '4px', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
                    <AlertTriangle size={16} />
                    <span>Error: {errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} noValidate>
                  <div className="form-group">
                    <label className="form-label" htmlFor="modal-name">Corporate Name *</label>
                    <input
                      type="text"
                      id="modal-name"
                      className="form-input"
                      required
                      aria-required="true"
                      aria-invalid={!!validationErrors.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alexis Carter"
                    />
                    {validationErrors.name && (
                      <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{validationErrors.name}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="modal-email">Corporate Email *</label>
                    <input
                      type="email"
                      id="modal-email"
                      className="form-input"
                      required
                      aria-required="true"
                      aria-invalid={!!validationErrors.email}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexis@company.com"
                    />
                    {validationErrors.email && (
                      <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{validationErrors.email}</span>
                    )}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="modal-service">Core Tech Focus *</label>
                      <select
                        id="modal-service"
                        className="form-input"
                        style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="custom-dev">Custom Software</option>
                        <option value="ai">Artificial Intelligence</option>
                        <option value="cloud">Cloud Migration</option>
                        <option value="sec">Cybersecurity</option>
                        <option value="analytics">Data Science</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="modal-timeline">Target Launch *</label>
                      <select
                        id="modal-timeline"
                        className="form-input"
                        style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      >
                        <option value="1-month">&lt; 1 Month</option>
                        <option value="3-months">1 - 3 Months</option>
                        <option value="6-months">3 - 6 Months</option>
                        <option value="indefinite">R&amp;D Roadmap</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="modal-detail">System Goals &amp; Limitations *</label>
                    <textarea
                      id="modal-detail"
                      className="form-textarea"
                      rows={3}
                      required
                      aria-required="true"
                      aria-invalid={!!validationErrors.detail}
                      value={formData.detail}
                      onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
                      placeholder="Outline system architecture needs..."
                    />
                    {validationErrors.detail && (
                      <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{validationErrors.detail}</span>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                    {isSubmitting ? 'Scheduling Session...' : 'Schedule Strategy Consultation'}
                    <Calendar size={18} />
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successWrapper}>
                <div className={styles.successIcon}>
                  <Check size={36} />
                </div>
                <h3 className={styles.title}>Consultation Scheduled</h3>
                <p className={styles.subtitle} style={{ maxWidth: '400px', margin: '0 auto 1.5rem' }}>
                  A confirmation invitation has been dispatched. Our tech directors will audit your system constraints and email you within 24 business hours.
                </p>
                <button onClick={handleReset} className="btn btn-secondary">
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ==========================================================================
   2. CAREERS MODAL
   ========================================================================== */
export const CareersModal: React.FC<ModalBaseProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.modalOverlay} onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25 }}
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="careers-modal-title"
          >
            <button className={styles.modalCloseBtn} onClick={onClose} aria-label="Close modal">
              <X size={20} aria-hidden="true" />
            </button>

            <div>
              <h3 className={styles.title} id="careers-modal-title">Join Our Engineering Pods</h3>
              <p className={styles.subtitle} style={{ marginBottom: '2rem' }}>
                Collaborate with developers, architects, and designers to build robust software systems.
              </p>
            </div>

            <div style={{ textAlign: 'left', border: '1px dashed var(--border-color)', padding: '2rem', borderRadius: 'var(--border-radius-sm)', background: 'rgba(255, 255, 255, 0.01)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--accent-light)' }}>
                Open Positions Coming Soon
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                We are currently not listing any active open full-time positions. However, we are always open to networking with experienced technical consultants, security auditors, or performance SEO consultants.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginTop: '1rem' }}>
                Please check back soon or send your inquiries and CV portfolio link directly through our contact form.
              </p>
            </div>
            
            <button onClick={onClose} className="btn btn-secondary" style={{ marginTop: '1.5rem', width: '100%' }}>
              Close Window
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};



/* ==========================================================================
   3. BLOG MODAL
   ========================================================================== */
interface Article {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

export const BlogModal: React.FC<ModalBaseProps> = ({ isOpen, onClose }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 'zero-trust',
      tag: 'Cybersecurity',
      title: 'Implementing Zero-Trust Architecture in Microservices',
      excerpt: 'Traditional firewall perimeters fail in modern cloud setups. Discover how to architect secure, node-authenticated networks.',
      date: 'July 2, 2026',
      readTime: '6 min read',
      content: (
        <div className={styles.readingContent}>
          <p>
            As software platforms move from monolithic structures to distributed microservices hosted across cloud platforms, the concept of a single trusted network perimeter is becoming obsolete. Firewalls alone can no longer secure enterprise APIs from internal and external threat vectors.
          </p>
          <h4>The Core Tenants of Zero-Trust</h4>
          <p>
            Zero-Trust architecture enforces a simple rule: **Never Trust, Always Verify**. Every connection request, user action, and service-to-service communication must be explicitly authenticated, authorized, and cryptographically verified.
          </p>
          <ul>
            <li>**Service Mesh Integration**: Leverage tools like Istio to establish Mutual TLS (mTLS) between Docker containers.</li>
            <li>**Identity Verification**: Integrate OAuth2 and JSON Web Tokens (JWT) containing cryptographic signing headers.</li>
            <li>**Network Segmentation**: Restrict node paths so services cannot discover database structures unless explicitly configured.</li>
          </ul>
          <h4>Resulting Enterprise Benefits</h4>
          <p>
            By wrapping backend routes in Zero-Trust constraints, security officers reduce system threat vectors, pass audits, and ensure client transactions remain safe.
          </p>
        </div>
      )
    },
    {
      id: 'llm-agents',
      tag: 'Artificial Intelligence',
      title: 'Optimizing LLM Agents for Enterprise Workflows',
      excerpt: 'Uncover strategies to structure LangChain agents, reduce hallucination, and run semantic database queries safely.',
      date: 'June 18, 2026',
      readTime: '8 min read',
      content: (
        <div className={styles.readingContent}>
          <p>
            Generative AI has shifted from basic chat interfaces to autonomous agents capable of making business decisions, triggering API endpoints, and generating structured reports. However, running LLMs within enterprise databases presents reliability and predictability issues.
          </p>
          <h4>Mitigating Model Hallucination</h4>
          <p>
            To deploy AI agents safely, engineers must restrict creative outputs. Using strict Retrieval-Augmented Generation (RAG) structures allows models to draw answers exclusively from authenticated local file stores.
          </p>
          <ul>
            <li>**Vector Indexes**: Store company files as semantic embeddings using tools like PostgreSQL (pgvector).</li>
            <li>**Agent Tool constraints**: Restrict LLMs to specific JSON parameter inputs so they cannot execute raw database scripts.</li>
            <li>**Output Validation**: Run output checkers (like Guardrails) to audit generated text before exposing it to frontend users.</li>
          </ul>
          <h4>Improving Core Operational Speeds</h4>
          <p>
            Restricting context sizes and caching vector queries reduces API costs and lowers query latencies from 3 seconds down to under 500ms.
          </p>
        </div>
      )
    },
    {
      id: 'k8s-scaling',
      tag: 'Cloud & DevOps',
      title: 'Designing Resilient Kubernetes Scaling Protocols',
      excerpt: 'Analyze automated node balancing structures, ingress configurations, and cost-effective scaling templates.',
      date: 'May 29, 2026',
      readTime: '7 min read',
      content: (
        <div className={styles.readingContent}>
          <p>
            High availability is the baseline of enterprise SaaS. When client request volumes surge unexpectedly, your virtual container orchestration must scale automatically without manual intervention.
          </p>
          <h4>Horizontal Pod Autoscaling (HPA)</h4>
          <p>
            Kubernetes HPA monitors CPU utilization and memory capacity. By writing custom Prometheus rules, operations teams can trigger pod scaling based on request latency rather than raw memory usage alone.
          </p>
          <ul>
            <li>**Auto-scaling nodes**: Link Kubernetes to AWS Auto Scaling Groups to spin up physical virtual instances when pods saturate.</li>
            <li>**Ingress Load Balancing**: Configure NGINX ingress traffic rules to distribute hits evenly across microservice layers.</li>
            <li>**Serverless Fallbacks**: Setup cloud functions to serve static cache layers when backend nodes are initializing.</li>
          </ul>
          <h4>Cost Efficiency Controls</h4>
          <p>
            Utilizing spot-instances for analytical workloads and setting strict namespace quotas prevents runaway computing bills while protecting core services.
          </p>
        </div>
      )
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.modalOverlay} onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25 }}
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: selectedArticle ? '750px' : '650px' }}
          >
            <button className={styles.modalCloseBtn} onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>

            {selectedArticle ? (
              // Full article read
              <>
                <div className={styles.readingHeader}>
                  <button onClick={() => setSelectedArticle(null)} style={{ background: 'transparent', border: 'none', color: 'var(--accent-light)', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', fontWeight: 600, padding: 0, marginBottom: '0.5rem' }}>
                    <ChevronLeft size={16} />
                    Back to Articles
                  </button>
                  <span className={styles.blogTag}>{selectedArticle.tag}</span>
                  <h3 className={styles.title} style={{ fontSize: '1.75rem' }}>{selectedArticle.title}</h3>
                  <div className={styles.jobMeta}>
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
                {selectedArticle.content}
              </>
            ) : (
              // Article list
              <>
                <div>
                  <h3 className={styles.title}>Blog Insights</h3>
                  <p className={styles.subtitle}>Quarterly engineering analysis, architectural breakdowns, and tech reports from our R&amp;D pods.</p>
                </div>

                <div className={styles.blogGrid}>
                  {articles.map((art) => (
                    <div key={art.id} className={styles.blogCard} onClick={() => setSelectedArticle(art)}>
                      <div className={styles.blogCardContent}>
                        <span className={styles.blogTag}>{art.tag}</span>
                        <h4 className={styles.blogTitle}>{art.title}</h4>
                        <p className={styles.blogExcerpt}>{art.excerpt}</p>
                        <div className={styles.blogMeta}>
                          <span>{art.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ==========================================================================
   4. CONTACT MODAL
   ========================================================================== */
export const ContactModal: React.FC<ModalBaseProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.modalOverlay} onClick={handleReset}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25 }}
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalCloseBtn} onClick={handleReset} aria-label="Close modal">
              <X size={20} />
            </button>

            {!isSuccess ? (
              <>
                <div>
                  <h3 className={styles.title}>Contact Algorithyum</h3>
                  <p className={styles.subtitle}>Connect with our global offices. Let us know how our engineering pods can help your project.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jordan Smith"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Corporate Email</label>
                    <input
                      type="email"
                      className="form-input"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jordan@company.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Cloud Scaling / AI Agent scoping"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Brief Description of Project</label>
                    <textarea
                      className="form-textarea"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can our engineering pod assist your team?"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                    {isSubmitting ? 'Transmitting details...' : 'Transmit Message'}
                    <ArrowRight size={18} />
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successWrapper}>
                <div className={styles.successIcon}>
                  <Check size={36} />
                </div>
                <h3 className={styles.title}>Message Transmitted</h3>
                <p className={styles.subtitle} style={{ maxWidth: '400px', margin: '0 auto 1.5rem' }}>
                  Your secure inquiry payload was successfully delivered. Our client relations staff will coordinate an introductory call shortly.
                </p>
                <button onClick={handleReset} className="btn btn-secondary">
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
