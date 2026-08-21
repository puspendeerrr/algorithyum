'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Layers, Smartphone, Cpu, BarChart3, 
  CheckCircle2, ArrowRight, ChevronDown, Sparkles, 
  Bot, ShieldCheck, Mail, Globe, Zap, Search, RefreshCw, 
  FileText, Users, Briefcase, Lock, CheckSquare, Settings, Server, Terminal
} from 'lucide-react';
import { useAppNavigation } from '@/lib/utils/useNavigation';

/* ==========================================================================
   1. COMPANY INTRODUCTION SECTION
   ========================================================================== */
export const CompanyIntro: React.FC = () => {
  const { navigate } = useAppNavigation();

  return (
    <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)', background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
          
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
              Who We Are &amp; What We Do
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2 }} className="text-gradient">
              A Software Development Company Focused on Real Business Results
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Algorithyum is a custom software development company. We partner with growing businesses, startups, manufacturers, retailers, schools, healthcare providers, and service companies to design and build high-quality software, custom ERP systems, websites, mobile applications, games, and AI solutions — and help them rank higher on search engines with technical SEO.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              We believe software development should be honest, maintainable, and straightforward. We don&apos;t use complex enterprise buzzwords or make promises we cannot keep. Instead, our software engineering team writes clean, well-tested code, communicates clearly at every stage, and delivers reliable digital products that help your business eliminate manual work and grow revenue.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/about')} className="btn btn-primary">
                Learn More About Algorithyum
                <ArrowRight size={16} />
              </button>
              <a href="mailto:info@algorithyum.in" className="btn btn-secondary">
                <Mail size={16} />
                Email Us (info@algorithyum.in)
              </a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ color: 'var(--accent-light)', marginBottom: '0.25rem' }}><Code size={24} /></div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Custom Software</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Bespoke business applications, SaaS products, customer portals, and admin panels.</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ color: 'var(--accent-light)', marginBottom: '0.25rem' }}><Layers size={24} /></div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>ERP Systems</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Inventory management, CRM, HRMS, manufacturing, school, hospital, and retail POS ERPs.</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ color: 'var(--accent-light)', marginBottom: '0.25rem' }}><Smartphone size={24} /></div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Mobile Apps</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Native Android, iOS, Flutter, and React Native mobile apps with store deployment.</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: 'var(--border-radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ color: 'var(--accent-light)', marginBottom: '0.25rem' }}><Cpu size={24} /></div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>AI &amp; SEO Services</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>AI chatbots, OpenAI API automation, workflow scripts, and technical SEO growth.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   2. DEDICATED CUSTOM SOFTWARE DEVELOPMENT SECTION
   ========================================================================== */
export const SoftwareDevHighlight: React.FC = () => {
  const { navigate } = useAppNavigation();

  return (
    <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Custom Software Engineering</span>
          <h2 className="section-title">Software Built Around Your Exact Business Workflows</h2>
          <p className="section-desc">
            Generic off-the-shelf software forces you to change how your business operates. We engineer custom web applications, SaaS platforms, internal software, and customer portals designed around your unique operational rules.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-light)' }}><Code size={28} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Internal Business Software</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Custom operational software that replaces messy spreadsheets and paper files. Centralize order handling, task assignments, client records, and daily team workflows under one reliable database system.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <li>• Operational task tracking &amp; assignment</li>
              <li>• Order management &amp; status logs</li>
              <li>• Role-based permission controls</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-light)' }}><Globe size={28} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>SaaS Product Development</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Full-cycle SaaS software engineering. We build multi-tenant web applications with secure subscription payments, user authentication, customer admin dashboards, and scalable API backend infrastructure.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <li>• Multi-tenant user architecture</li>
              <li>• Stripe &amp; payment gateway checkout</li>
              <li>• Scalable API backend controllers</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-light)' }}><Users size={28} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Customer Portals &amp; Admin Panels</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Self-service customer portals where clients can log in, view project status, download invoices, submit tickets, and update profile information without needing to call your staff.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <li>• Client login &amp; document downloads</li>
              <li>• Ticket submissions &amp; live updates</li>
              <li>• Intuitive admin management screens</li>
            </ul>
          </div>

        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={() => navigate('/services/software-development')} className="btn btn-primary">
            Explore Custom Software Development
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

/* ==========================================================================
   3. ERP SOLUTIONS LANDING-SECTION
   ========================================================================== */
export const ErpHighlight: React.FC = () => {
  const { navigate } = useAppNavigation();

  const erpModules = [
    { title: 'Manufacturing ERP', desc: 'Production line tracking, raw material inventory, bill of materials (BOM), and factory order fulfillment.', target: 'Factory owners & manufacturers' },
    { title: 'Inventory Management System', desc: 'Real-time stock tracking, multi-warehouse management, QR/barcode scanning, low-stock alerts, and vendor purchase orders.', target: 'Distributors & warehouses' },
    { title: 'CRM Software', desc: 'Lead tracking, deal pipelines, customer communication history, quotation building, and sales team analytics.', target: 'Sales & service teams' },
    { title: 'HRMS Software', desc: 'Employee attendance tracking, leave requests, automated payroll calculations, performance logs, and staff management.', target: 'HR managers & company owners' },
    { title: 'School ERP', desc: 'Student admissions, fee collection, exam schedules, grading portals, library management, and automated SMS updates for parents.', target: 'Schools, colleges & academies' },
    { title: 'Hospital ERP', desc: 'Patient registration, clinic appointments, doctor schedules, pharmacy inventory, lab reports, and medical billing.', target: 'Hospitals, clinics & diagnostic labs' },
    { title: 'Retail & POS ERP', desc: 'Point-of-sale checkout software, thermal printing, barcode scanning, store sales tracking, and multi-branch inventory sync.', target: 'Retail stores & supermarkets' },
    { title: 'Billing & Invoicing Software', desc: 'Automated GST/tax invoices, client payment tracking, recurring billing, expense tracking, and ledger accounting reports.', target: 'Businesses & service firms' },
  ];

  return (
    <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)', background: 'rgba(0, 82, 255, 0.015)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">ERP System Development</span>
          <h2 className="section-title">Centralize Your Entire Business Operations in One Custom ERP</h2>
          <p className="section-desc">
            Managing sales, inventory, billing, manufacturing, and employees across disconnected software tools creates errors and wastes staff time. Our custom ERP solutions unify your whole company into one synchronized system.
          </p>
        </div>

        {/* Why Businesses Need ERP & Problems Solved */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '3.5rem' }}>
          
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-light)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={20} /> Why Growing Businesses Need Custom ERP
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              As a business grows, relying on spreadsheets, WhatsApp messages, and separate accounting software leads to stockouts, delayed orders, and inaccurate financial reporting. A custom ERP gives management instant visibility into stock levels, pending orders, cash flow, and team productivity in real-time.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-light)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={20} /> Key Problems Our ERP Systems Solve
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} /> Stock mismatches between warehouses and retail stores</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} /> Delayed customer invoicing and unpaid bill tracking</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} /> Lack of centralized employee attendance &amp; payroll records</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} /> Duplicate data entry across multiple non-connected software</li>
            </ul>
          </div>

        </div>

        {/* Types of ERP We Build */}
        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
          Custom ERP Modules We Build
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {erpModules.map((mod, idx) => (
            <div 
              key={idx} 
              className="glass-panel"
              style={{ padding: '1.5rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-light)' }}>
                <CheckCircle2 size={18} />
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{mod.title}</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                {mod.desc}
              </p>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-light)', fontWeight: 600 }}>
                Built for: {mod.target}
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={() => navigate('/services/erp')} className="btn btn-primary">
            Get Free Consultation for ERP Development
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

/* ==========================================================================
   4. MOBILE APP DEVELOPMENT HIGHLIGHT SECTION
   ========================================================================== */
export const MobileAppHighlight: React.FC = () => {
  const { navigate } = useAppNavigation();

  return (
    <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Mobile App Engineering</span>
          <h2 className="section-title">Android, iOS &amp; Cross-Platform Apps Built for Speed</h2>
          <p className="section-desc">
            We build native Android and iOS mobile applications, as well as cross-platform apps using Flutter and React Native. From initial UI designs to App Store publishing and post-launch maintenance, we handle the complete lifecycle.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-light)' }}><Smartphone size={32} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Android App Development</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Native Android apps engineered for speed, hardware compatibility, and smooth operation across diverse smartphone hardware and tablet devices.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <li>• Google Play Console setup &amp; publishing</li>
              <li>• Material UI responsive interface design</li>
              <li>• Local SQLite caching for offline usage</li>
              <li>• Push notification integration</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-light)' }}><Smartphone size={32} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>iOS App Development</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              iPhone and iPad mobile apps designed following Apple Human Interface Guidelines to ensure high performance, security, and quick App Store approval.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <li>• Apple App Store submission management</li>
              <li>• Clean, intuitive iOS navigation design</li>
              <li>• Apple Pay &amp; in-app purchasing integration</li>
              <li>• iOS biometric authentication support</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-light)' }}><Globe size={32} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Flutter &amp; React Native Apps</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Build one cross-platform app that runs seamlessly on both Android and iOS devices. Save time, reduce budget requirements, and maintain one shared backend API.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <li>• One codebase for Android &amp; iOS</li>
              <li>• Native-like 60fps UI performance</li>
              <li>• Unified backend server infrastructure</li>
              <li>• Shared codebase updates &amp; maintenance</li>
            </ul>
          </div>

        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={() => navigate('/services/cross-platform-app-development')} className="btn btn-primary">
            Explore Mobile App Development Services
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

/* ==========================================================================
   5. AI SOLUTIONS HIGHLIGHT SECTION
   ========================================================================== */
export const AiHighlight: React.FC = () => {
  const { navigate } = useAppNavigation();

  return (
    <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)', background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">AI Integration &amp; Automation</span>
          <h2 className="section-title">Integrate Smart AI &amp; Automate Manual Business Tasks</h2>
          <p className="section-desc">
            We help businesses integrate OpenAI APIs, build smart customer chatbots, create AI assistants, extract document data automatically, and streamline internal business operations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
          
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-md)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ color: 'var(--accent-light)' }}><Cpu size={32} /></div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>AI Integration &amp; Custom Chatbots</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Enhance your existing web application or software product with artificial intelligence. We build custom AI chatbots that answer customer questions using your private company files, assist staff with drafting responses, and power smart search tools.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} /> AI Customer Support Chatbots trained on your business data</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} /> OpenAI GPT-4 API &amp; LangChain integrations</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} /> Smart semantic search &amp; text summarization tools</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-md)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ color: 'var(--accent-light)' }}><Bot size={32} /></div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Document AI &amp; Workflow Automation</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Eliminate repetitive manual tasks like sorting incoming support emails, extracting invoice numbers, updating CRM leads, and reading PDF contracts using automated AI scripts.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} /> Invoice, receipt &amp; contract data extraction</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} /> Automated email triage &amp; ticket categorization</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} style={{ color: 'var(--accent-light)' }} /> Cross-app data sync triggers between CRM &amp; ERP</li>
            </ul>
          </div>

        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={() => navigate('/services/ai-integration')} className="btn btn-primary">
            Explore AI Solutions
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

/* ==========================================================================
   6. SEO SERVICES HIGHLIGHT SECTION
   ========================================================================== */
export const SeoHighlight: React.FC = () => {
  const { navigate } = useAppNavigation();

  return (
    <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)', background: 'rgba(0, 82, 255, 0.015)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Search Engine Optimization</span>
          <h2 className="section-title">Technical SEO &amp; Google Search Visibility</h2>
          <p className="section-desc">
            Attracting organic business visitors on Google requires clean technical code, fast loading speeds, structured schema data, and properly targeted keywords. We optimize your website so Google crawlers index and rank your business high.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          
          <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ color: 'var(--accent-light)', marginBottom: '0.25rem' }}><Search size={24} /></div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Technical SEO &amp; Speed</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Optimizing Core Web Vitals, fixing crawl errors, setting canonical tags, and generating clean sitemaps.</p>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ color: 'var(--accent-light)', marginBottom: '0.25rem' }}><FileText size={24} /></div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>On-Page &amp; Schema SEO</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Formatting page titles, meta descriptions, H1 heading hierarchies, and JSON-LD structured data.</p>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ color: 'var(--accent-light)', marginBottom: '0.25rem' }}><Globe size={24} /></div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Local SEO Services</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Optimizing business directories and Google local map rankings to bring in nearby customers.</p>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ color: 'var(--accent-light)', marginBottom: '0.25rem' }}><BarChart3 size={24} /></div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Search Audits &amp; Indexing</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Auditing Google Search Console metrics to resolve index suppression issues and improve positions.</p>
          </div>

        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={() => navigate('/services/seo')} className="btn btn-primary">
            Explore SEO Services
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

/* ==========================================================================
   7. WHO WE WORK WITH SECTION
   ========================================================================== */
export const WhoWeWorkWith: React.FC = () => {
  const clients = [
    { title: 'Small Businesses', desc: 'Helping local businesses modernize operations with simple custom tools, billing software, and local SEO.' },
    { title: 'Startups & Founders', desc: 'Helping tech founders build reliable MVPs, web apps, and mobile applications ready for market launch.' },
    { title: 'Growing Companies', desc: 'Replacing fragmented tools with custom business management software and ERP integrations.' },
    { title: 'Manufacturers', desc: 'Building custom Manufacturing ERP software to track factory output, raw materials, and orders.' },
    { title: 'Healthcare Providers', desc: 'Developing clinic ERPs, patient scheduling portals, and secure healthcare web applications.' },
    { title: 'Schools & Academies', desc: 'Creating custom School ERP systems for student management, fee collection, and grade reports.' },
    { title: 'Retail & Supermarkets', desc: 'Deploying POS billing software, retail ERPs, barcode scanning, and multi-branch inventory sync.' },
    { title: 'E-commerce Brands', desc: 'Building fast Next.js online stores, shopping apps, and automated inventory sync integrations.' },
  ];

  return (
    <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)', background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Our Clients &amp; Partners</span>
          <h2 className="section-title">Who We Build Software For</h2>
          <p className="section-desc">
            We partner with companies of all sizes across industries to design, build, and support software tailored to their exact goals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {clients.map((c, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '1.75rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ color: 'var(--accent-light)' }}><Briefcase size={22} /></div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>{c.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ==========================================================================
   8. PROJECT TYPES SECTION
   ========================================================================== */
export const ProjectTypes: React.FC = () => {
  const projects = [
    { title: 'Custom Business Software', tag: 'Web & Desktop' },
    { title: 'Manufacturing & Retail ERP', tag: 'Centralized ERP' },
    { title: 'CRM & Customer Management', tag: 'Sales Software' },
    { title: 'HRMS & Payroll Systems', tag: 'Staff Operations' },
    { title: 'Inventory & Warehouse Software', tag: 'Stock Control' },
    { title: 'Billing & POS Software', tag: 'Checkout Systems' },
    { title: 'Android & iOS Mobile Apps', tag: 'Mobile Platforms' },
    { title: '2D & Casual Mobile Games', tag: 'Gaming Apps' },
    { title: 'AI Integration & Chatbots', tag: 'Artificial Intelligence' },
    { title: 'Technical SEO Campaigns', tag: 'Search Growth' },
  ];

  return (
    <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Project Directory</span>
          <h2 className="section-title">Types of Software Projects We Deliver</h2>
          <p className="section-desc">
            Whether you need a custom business application, an ERP suite, a mobile app, or AI automation — we have the expertise to execute.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {projects.map((p, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.tag}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0.25rem 0 0 0', color: 'var(--text-primary)' }}>{p.title}</h3>
              </div>
              <CheckCircle2 size={18} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ==========================================================================
   9. TRUST BUILDING & METHODOLOGY SECTION
   ========================================================================== */
export const TrustAndMethodology: React.FC = () => {
  const standards = [
    { title: 'Clean, Tested Code', desc: 'We write structured code that is easy for developers to read, update, and maintain long after launch.', icon: <Terminal size={24} /> },
    { title: 'Clear Technical Documentation', desc: 'Every project comes with full developer setup instructions, API contracts, and user guides.', icon: <FileText size={24} /> },
    { title: 'Testing & Quality Assurance', desc: 'We run automated tests and manual QA before releasing code to production to prevent bugs.', icon: <CheckSquare size={24} /> },
    { title: 'Security Best Practices', desc: 'Data privacy controls, password hashing, role-based access rules, and secure API keys.', icon: <ShieldCheck size={24} /> },
    { title: 'Scalable Architecture', desc: 'Databases and APIs built to support growing user numbers and higher order volumes smoothly.', icon: <Server size={24} /> },
    { title: 'Ongoing Support & Maintenance', desc: 'Post-launch technical support, bug fixing, server monitoring, and feature updates.', icon: <Settings size={24} /> },
  ];

  return (
    <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)', background: 'rgba(0, 82, 255, 0.015)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Engineering Standards</span>
          <h2 className="section-title">How We Guarantee Software Quality</h2>
          <p className="section-desc">
            We follow disciplined software development practices to ensure your digital product is secure, well-documented, and built to last.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {standards.map((s, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ color: 'var(--accent-light)' }}>{s.icon}</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>{s.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ==========================================================================
   10. COMPREHENSIVE FAQ SECTION (18 FREQUENTLY ASKED QUESTIONS)
   ========================================================================== */
export const HomeFaq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What software development services does Algorithyum offer?',
      a: 'Algorithyum provides Custom Software Development, ERP System Development, Software Redesign & Modernization, Web Development, Android App Development, iOS App Development, Cross Platform App Development, Game Development, AI Integration, AI Automation, and SEO Services.'
    },
    {
      q: 'What types of custom ERP software do you build?',
      a: 'We build Manufacturing ERP, Inventory Management Systems, CRM Software, HRMS Software, School ERP, Hospital ERP, Warehouse Management Systems, Retail ERP, Billing Software, and POS Software.'
    },
    {
      q: 'How long does a custom software development project take to complete?',
      a: 'Smaller software tools or initial MVPs typically take 4 to 8 weeks. Comprehensive custom software applications or full ERP systems take 3 to 6 months. We provide clear milestone schedules before starting.'
    },
    {
      q: 'Do you build mobile applications for both Android and iOS?',
      a: 'Yes. We build native Android (Kotlin) and iOS (Swift) apps, as well as cross-platform mobile apps using Flutter and React Native to save development costs and launch faster.'
    },
    {
      q: 'Can AI features be integrated into our existing software?',
      a: 'Yes. We integrate OpenAI APIs, custom AI chatbots, smart search, and automated data processing directly into your existing web app or software product via secure API connectors.'
    },
    {
      q: 'What is Software Redesign & Modernization?',
      a: 'Software Modernization updates older, slow, or legacy software systems by rebuilding them with modern web frameworks (like React, Next.js, Node.js) to improve speed, security, and user experience.'
    },
    {
      q: 'How do your SEO services help our business get more customers?',
      a: 'Our SEO services resolve technical code errors, optimize page load speeds, format structured schema data, and optimize website content so Google crawlers index and rank your pages higher for targeted search terms.'
    },
    {
      q: 'What tech stack do you use for web and software development?',
      a: 'We build primarily with modern, reliable technologies including React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, Redis, OpenAI, LangChain, Flutter, and React Native.'
    },
    {
      q: 'Why should a business choose custom software over off-the-shelf templates?',
      a: 'Custom software fits your exact operational workflows, does not require recurring monthly subscription fees per user, and allows you to own your code and customer data completely.'
    },
    {
      q: 'What is the difference between Flutter and React Native for mobile apps?',
      a: 'Both allow building one app for Android and iOS simultaneously. Flutter uses Google Dart for high-speed UI rendering, while React Native uses JavaScript/TypeScript. We help you choose the best fit for your team.'
    },
    {
      q: 'Do you assist with publishing mobile apps to the Google Play Store and Apple App Store?',
      a: 'Yes. We handle the complete publishing process, including store developer accounts, app screenshots, build signing, privacy policies, and store review submissions.'
    },
    {
      q: 'Can custom ERP software connect with our existing POS hardware or accounting tools?',
      a: 'Yes. We build custom API connectors to sync data between your ERP, payment gateways, barcode scanners, thermal printers, and accounting software.'
    },
    {
      q: 'How do you ensure data security in custom software and ERP systems?',
      a: 'We enforce secure password hashing, SSL encryption, database access tokens, role-based user permissions, and secure API key management.'
    },
    {
      q: 'What happens after our software project is launched?',
      a: 'We provide post-launch technical support, bug fixing, server monitoring, user training, and continuous feature additions as your business grows.'
    },
    {
      q: 'How does Algorithyum handle project pricing and estimates?',
      a: 'We provide clear, upfront milestone pricing with detailed scope agreements before work starts. There are no hidden fees or unexpected surcharges.'
    },
    {
      q: 'Who owns the intellectual property and code of the custom software?',
      a: 'You do. Upon full project payment, you own 100% of the custom software codebase, database schemas, and intellectual property.'
    },
    {
      q: 'How does your software development team communicate during a project?',
      a: 'We provide regular updates through video calls, email summaries, and project management tools. You will always know what we are working on and what is coming next.'
    },
    {
      q: 'How can we get started on a project with Algorithyum?',
      a: 'Email us directly at info@algorithyum.in with your project details, budget, and timeline. We usually respond within 24 business hours to arrange a free consultation.'
    }
  ];

  return (
    <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        
        <div className="section-header">
          <span className="section-subtitle">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Clear, honest answers to the most common questions about custom software development, ERP systems, mobile apps, AI automation, and SEO services.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="glass-panel"
                style={{ 
                  borderRadius: 'var(--border-radius-sm)', 
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
              >
                <div style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                    {faq.q}
                  </h3>
                  <div style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: 'var(--accent-light)' }}>
                    <ChevronDown size={18} />
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', paddingTop: '1rem' }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
