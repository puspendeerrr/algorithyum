import React, { useState } from 'react';
import { Mail, Calendar, Check, Send, AlertTriangle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'software-development',
    budget: '15k-50k',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const servicesList = [
    { value: 'software-development', label: 'Software Development' },
    { value: 'ai', label: 'Artificial Intelligence & ML' },
    { value: 'seo', label: 'SEO Services' },
    { value: 'digital-marketing', label: 'Digital Marketing & CRO' },
    { value: 'cloud', label: 'Cloud Computing' },
    { value: 'cybersecurity', label: 'Cybersecurity & Auditing' },
    { value: 'devops', label: 'DevOps & GitOps' },
    { value: 'data-engineering', label: 'Data Engineering' },
    { value: 'mobile-app-development', label: 'Mobile App Development' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'ui-ux', label: 'UI/UX Design' },
    { value: 'it-consulting', label: 'IT Strategy Consulting' },
    { value: 'automation', label: 'Workflow Automation' },
    { value: 'branding', label: 'Branding Systems' }
  ];

  const budgetList = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: 'above-50k', label: '$50,000+' }
  ];

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid business email address.';
    }
    
    if (formData.phone.trim() && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid telephone format or leave blank.';
    }
    
    if (formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters.';
    }
    
    if (formData.message.trim().length < 10) {
      errors.message = 'Project details must be at least 10 characters.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Log every form field value before submission
    console.log('Contact form field values before submission:', {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      budget: formData.budget,
      subject: formData.subject,
      message: formData.message
    });

    const recipientEmail = formData.email.trim();
    if (!recipientEmail) {
      console.warn('Warning: Recipient email is empty!');
    }

    // Prepare template params mapping with multiple target fallbacks
    const templateParams = {
      // Clean prefix-free variables expected by template
      name: formData.name.trim(),
      email: recipientEmail,
      company: formData.company.trim() || 'Not Specified',
      phone: formData.phone.trim() || 'Not Provided',
      service: formData.service,
      budget: formData.budget,
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      time: new Date().toLocaleString(),

      // Legacy/Fallback variables with prefixes
      user_name: formData.name.trim(),
      user_company: formData.company.trim() || 'Not Specified',
      user_email: recipientEmail,
      to_email: 'info@algorithyum.in', // Direct the email to the company inbox
      to: 'info@algorithyum.in',       // Direct the email to the company inbox
      reply_to: recipientEmail,        // Allow admin to click reply to email customer
      user_phone: formData.phone.trim() || 'Not Provided',
      user_service: formData.service,
      user_budget: formData.budget,
      email_subject: formData.subject.trim(),
      email_message: formData.message.trim(),
      submission_time: new Date().toLocaleString()
    };

    // Print the complete templateParams object to the console before calling EmailJS
    console.log('Complete templateParams object sent to EmailJS:', templateParams);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
      const customerTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_djfthkb';
      const adminTemplateId = 'template_af14tdf';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !customerTemplateId || !publicKey) {
        throw new Error('EmailJS environment configurations are missing.');
      }

      // Send the Admin Notification email first
      await emailjs.send(serviceId, adminTemplateId, templateParams, publicKey);

      // After admin succeeds, send the Customer Auto Reply email
      await emailjs.send(serviceId, customerTemplateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'software-development',
        budget: '15k-50k',
        subject: '',
        message: ''
      });
      setValidationErrors({});
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(err.text || err.message || 'Failed to transmit secure message payload.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left' }}>
        
        {/* Page Header */}
        <header style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
            Secure Transmission
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }} className="text-gradient">
            Contact Engineering
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Submit your technical specifications or request screen-share briefings.
          </p>
        </header>

        {/* Contact form and instructions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
          
          {/* Form wrapper */}
          <div className="glass-panel" style={{ padding: '3rem', borderRadius: 'var(--border-radius-md)' }}>
            
            {/* Status Notifications */}
            {submitStatus === 'success' && (
              <div style={{ padding: '1.25rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', borderRadius: '6px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <Check size={20} />
                <span style={{ fontSize: '0.925rem', fontWeight: 600 }}>Message secure payload successfully delivered. Sprints coordinated shortly.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{ padding: '1.25rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '6px', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <AlertTriangle size={20} />
                <span style={{ fontSize: '0.925rem', fontWeight: 600 }}>Error: {errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} noValidate>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {/* Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="user-name">Full Name *</label>
                  <input
                    type="text"
                    id="user-name"
                    className="form-input"
                    required
                    aria-required="true"
                    aria-invalid={!!validationErrors.name}
                    aria-describedby={validationErrors.name ? 'name-error' : undefined}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Avery Smith"
                  />
                  {validationErrors.name && (
                    <span id="name-error" style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.35rem', display: 'block' }}>{validationErrors.name}</span>
                  )}
                </div>

                {/* Company */}
                <div className="form-group">
                  <label className="form-label" htmlFor="user-company">Corporate Entity</label>
                  <input
                    type="text"
                    id="user-company"
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Enterprise Ltd"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {/* Email */}
                <div className="form-group">
                  <label className="form-label" htmlFor="user-email">Business Email *</label>
                  <input
                    type="email"
                    id="user-email"
                    className="form-input"
                    required
                    aria-required="true"
                    aria-invalid={!!validationErrors.email}
                    aria-describedby={validationErrors.email ? 'email-error' : undefined}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="avery@enterprise.com"
                  />
                  {validationErrors.email && (
                    <span id="email-error" style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.35rem', display: 'block' }}>{validationErrors.email}</span>
                  )}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label className="form-label" htmlFor="user-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="user-phone"
                    className="form-input"
                    aria-invalid={!!validationErrors.phone}
                    aria-describedby={validationErrors.phone ? 'phone-error' : undefined}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                  />
                  {validationErrors.phone && (
                    <span id="phone-error" style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.35rem', display: 'block' }}>{validationErrors.phone}</span>
                  )}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {/* Service Dropdown */}
                <div className="form-group">
                  <label className="form-label" htmlFor="user-service">Technical Service Category *</label>
                  <select
                    id="user-service"
                    className="form-input"
                    style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    {servicesList.map((srv) => (
                      <option key={srv.value} value={srv.value}>{srv.label}</option>
                    ))}
                  </select>
                </div>

                {/* Budget Dropdown */}
                <div className="form-group">
                  <label className="form-label" htmlFor="user-budget">SOP Budget Allocation *</label>
                  <select
                    id="user-budget"
                    className="form-input"
                    style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    {budgetList.map((bg) => (
                      <option key={bg.value} value={bg.value}>{bg.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label className="form-label" htmlFor="email-subject">Inquiry Subject *</label>
                <input
                  type="text"
                  id="email-subject"
                  className="form-input"
                  required
                  aria-required="true"
                  aria-invalid={!!validationErrors.subject}
                  aria-describedby={validationErrors.subject ? 'subject-error' : undefined}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. mTLS service mesh audit / programmatic SEO schema mapping"
                />
                {validationErrors.subject && (
                  <span id="subject-error" style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.35rem', display: 'block' }}>{validationErrors.subject}</span>
                )}
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label" htmlFor="email-message">Project Specifications / Details *</label>
                <textarea
                  id="email-message"
                  className="form-textarea"
                  rows={4}
                  required
                  aria-required="true"
                  aria-invalid={!!validationErrors.message}
                  aria-describedby={validationErrors.message ? 'message-error' : undefined}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Define hosting clusters, legacy code sizes, or database tables to index..."
                />
                {validationErrors.message && (
                  <span id="message-error" style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.35rem', display: 'block' }}>{validationErrors.message}</span>
                )}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', cursor: isSubmitting ? 'not-allowed' : 'pointer' }} 
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? 'Transmitting Secure Data...' : 'Transmit Specification Payload'}
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Right Column: Informative details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left' }}>
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ color: 'var(--accent-light)' }}><Mail size={20} /></div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Direct Inquiries</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                For general technical queries, project requests, or corporate coordination:
              </p>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                info@algorithyum.in
              </span>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ color: 'var(--accent-light)' }}><Calendar size={20} /></div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Briefing Channels</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                We structure code reviews and project specs through secure screen-shares. We do not support physical offices or walk-in consultations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
