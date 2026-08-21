'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertTriangle, Info, Lightbulb, Copy, Printer, Share2, Check, Award, Sparkles, ArrowRight, Server } from 'lucide-react';

// 1. Info Cards
interface InfoCardsProps {
  items: { title: string; desc: string }[];
}
export const InfoCards: React.FC<InfoCardsProps> = ({ items }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '1.25rem 0 0' }}>
    {items.map((item, idx) => (
      <div key={idx} className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)', textAlign: 'left' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-light)', marginBottom: '0.75rem' }}>{item.title}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.desc}</p>
      </div>
    ))}
  </div>
);

// 2. Feature Cards
interface FeatureCardsProps {
  items: { title: string; desc: string; highlight?: boolean }[];
}
export const FeatureCards: React.FC<FeatureCardsProps> = ({ items }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '1.25rem 0 0' }}>
    {items.map((item, idx) => (
      <div 
        key={idx} 
        className="glass-panel" 
        style={{ 
          padding: '2rem', 
          borderRadius: 'var(--border-radius-sm)', 
          border: item.highlight ? '1px solid var(--accent)' : '1px solid var(--border-color)', 
          background: item.highlight ? 'rgba(0, 82, 255, 0.02)' : 'rgba(255, 255, 255, 0.01)',
          textAlign: 'left' 
        }}
      >
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{item.title}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.desc}</p>
      </div>
    ))}
  </div>
);

// 3. Timeline / Stepper
interface TimelineProps {
  steps: { step: string; title: string; desc: string }[];
}
export const Timeline: React.FC<TimelineProps> = ({ steps }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', margin: '1.5rem 0 0', position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--border-color)', textAlign: 'left' }}>
    {steps.map((item, idx) => (
      <div key={idx} style={{ position: 'relative' }}>
        <div style={{ 
          position: 'absolute', 
          left: 'calc(-2rem - 9px)', 
          top: '0.25rem', 
          width: '16px', 
          height: '16px', 
          borderRadius: '50%', 
          background: 'var(--accent)', 
          border: '4px solid var(--bg-primary)' 
        }} aria-hidden="true" />
        <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-light)', display: 'block', marginBottom: '0.25rem' }}>
          Step {item.step || idx + 1}
        </span>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{item.title}</h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.desc}</p>
      </div>
    ))}
  </div>
);

// 4. Comparison Table
interface ComparisonTableProps {
  headers: string[];
  rows: { feature: string; val1: string; val2: string }[];
}
export const ComparisonTable: React.FC<ComparisonTableProps> = ({ headers, rows }) => (
  <div style={{ overflowX: 'auto', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', margin: '1.25rem 0 0', background: 'rgba(255,255,255,0.01)' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', minWidth: '500px' }}>
      <thead>
        <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border-color)' }}>
          {headers.map((h, i) => (
            <th key={i} style={{ padding: '1.25rem 1.5rem', textAlign: 'left', fontWeight: 800, color: i > 0 ? 'var(--accent-light)' : 'var(--text-primary)' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} style={{ borderBottom: idx < rows.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
            <td style={{ padding: '1.25rem 1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>{row.feature}</td>
            <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-secondary)' }}>{row.val1}</td>
            <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-secondary)' }}>{row.val2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// 5. Callout Box (Warning, Info, Tip, Recommendation, Best Practice)
interface CalloutBoxProps {
  type: 'info' | 'warning' | 'tip' | 'recommendation' | 'best-practice' | 'best_practice';
  message: string;
}
export const CalloutBox: React.FC<CalloutBoxProps> = ({ type, message }) => {
  const normalizedType = type === 'best_practice' ? 'best-practice' : type;
  const stylesMap = {
    info: { border: '1px solid var(--accent)', bg: 'rgba(0, 82, 255, 0.02)', color: 'var(--accent-light)', icon: <Info size={18} /> },
    warning: { border: '1px solid #eab308', bg: 'rgba(234, 179, 8, 0.02)', color: '#eab308', icon: <AlertTriangle size={18} /> },
    tip: { border: '1px solid #10b981', bg: 'rgba(16, 185, 129, 0.02)', color: '#10b981', icon: <Lightbulb size={18} /> },
    recommendation: { border: '1px solid #a855f7', bg: 'rgba(168, 85, 247, 0.02)', color: '#c084fc', icon: <Sparkles size={18} /> },
    'best-practice': { border: '1px solid #ec4899', bg: 'rgba(236, 72, 153, 0.02)', color: '#f472b6', icon: <Award size={18} /> }
  };

  const config = stylesMap[normalizedType] || stylesMap.info;

  return (
    <div style={{ 
      border: config.border, 
      background: config.bg, 
      borderRadius: 'var(--border-radius-sm)', 
      padding: '1.5rem 2rem', 
      display: 'flex', 
      gap: '1rem', 
      alignItems: 'flex-start', 
      margin: '1.25rem 0 0',
      textAlign: 'left'
    }}>
      <div style={{ color: config.color, flexShrink: 0, marginTop: '0.15rem' }}>{config.icon}</div>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{message}</p>
    </div>
  );
};

// 6. Checklist
interface ChecklistProps {
  items: string[];
}
export const Checklist: React.FC<ChecklistProps> = ({ items }) => (
  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '1.25rem 0 0', textAlign: 'left' }}>
    {items.map((item, idx) => (
      <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
        <CheckCircle2 size={18} style={{ color: 'var(--accent-light)', flexShrink: 0, marginTop: '0.15rem' }} aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// 7. Code Block
interface CodeBlockProps {
  code: string;
  language?: string;
}
export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => (
  <div style={{ position: 'relative', background: '#0a0b10', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', margin: '1.25rem 0 0', overflow: 'hidden' }}>
    {language && (
      <div style={{ background: '#0f111a', borderBottom: '1px solid var(--border-color)', padding: '0.5rem 1rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', textAlign: 'left' }}>
        {language}
      </div>
    )}
    <pre style={{ margin: 0, padding: '1.5rem', overflowX: 'auto', fontSize: '0.85rem', color: '#a6accd', fontFamily: 'monospace', textAlign: 'left', lineHeight: '1.5' }}>
      <code>{code.trim()}</code>
    </pre>
  </div>
);

// 8. Quote
interface QuoteProps {
  text: string;
  author?: string;
}
export const Quote: React.FC<QuoteProps> = ({ text, author }) => (
  <blockquote style={{ borderLeft: '4px solid var(--accent)', padding: '1rem 2rem', margin: '1.5rem 0 0', textAlign: 'left', background: 'rgba(255,255,255,0.01)', borderRadius: '0 var(--border-radius-sm) var(--border-radius-sm) 0' }}>
    <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: '1.6', margin: 0 }}>
      "{text}"
    </p>
    {author && (
      <cite style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginTop: '0.5rem', fontStyle: 'normal' }}>
        — {author}
      </cite>
    )}
  </blockquote>
);

// 9. Share Operations Widget (Est Reading Time, Last Updated, Share Button, Printer, Copy Link)
interface ShareWidgetProps {
  readingTime: string;
  lastUpdated: string;
  author: string;
  title: string;
}
export const ShareWidget: React.FC<ShareWidgetProps> = ({ readingTime, lastUpdated, author, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title, url: window.location.href });
    } else {
      handleCopyLink();
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      flexWrap: 'wrap', 
      gap: '1.5rem', 
      borderBottom: '1px solid var(--border-color)', 
      paddingBottom: '1.5rem', 
      marginBottom: '1.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      textAlign: 'left'
    }}>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <span><strong>Author:</strong> {author}</span>
        <span><strong>Reading Time:</strong> {readingTime}</span>
        <span><strong>Updated:</strong> {lastUpdated}</span>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }} className="no-print">
        <button 
          onClick={handleCopyLink} 
          style={{ background: 'transparent', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '0.4rem 0.8rem', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'pointer', transition: 'all var(--transition-fast)' }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-light)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
          aria-label="Copy page URL link"
        >
          {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
        <button 
          onClick={handlePrint} 
          style={{ background: 'transparent', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '0.4rem 0.8rem', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'pointer', transition: 'all var(--transition-fast)' }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-light)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
          aria-label="Print this page document"
        >
          <Printer size={14} />
          Print
        </button>
        <button 
          onClick={handleShare} 
          style={{ background: 'transparent', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '0.4rem 0.8rem', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'pointer', transition: 'all var(--transition-fast)' }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-light)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
          aria-label="Share this article page"
        >
          <Share2 size={14} />
          Share
        </button>
      </div>
    </div>
  );
};

// 10. Automatic Table of Contents Component (Runtime DOM Crawling with ScrollSpy)
export const AutoTOC: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Collect all section headers with an ID on the current page after render
    const h2Elements = document.querySelectorAll('h2[id]');
    const list = Array.from(h2Elements)
      .map(el => ({
        id: el.id,
        text: el.textContent || ''
      }))
      .filter(h => h.id && h.text && h.text !== 'On This Page' && h.text !== 'Technical Insights' && h.text !== 'Technical Documentation');
    
    setHeadings(list);

    if (list.length === 0) return;

    // ScrollSpy using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        // Find entries that are intersecting
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          // Sort by top coordinate ascending to get the uppermost visible
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -70% 0px', // Focus window: standard offset from top
        threshold: 0
      }
    );

    h2Elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)', textAlign: 'left' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Table of Contents</h3>
      <nav aria-label="Table of contents">
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {headings.map((h) => {
            const isActive = activeId === h.id;
            return (
              <li key={h.id}>
                <a 
                  href={`#${h.id}`} 
                  style={{ 
                    color: isActive ? 'var(--accent-light)' : 'var(--text-secondary)', 
                    textDecoration: 'none', 
                    fontSize: '0.9rem', 
                    fontWeight: isActive ? 700 : 500, 
                    transition: 'all var(--transition-fast)',
                    paddingLeft: isActive ? '0.5rem' : '0',
                    borderLeft: isActive ? '2px solid var(--accent)' : 'none',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--accent-light)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {h.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

// 11. Reading Progress Bar Indicator
export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const totalHeight = scrollHeight - clientHeight;
      if (totalHeight > 0) {
        setProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '80px', // Directly under the sticky navbar
      left: 0,
      width: `${progress}%`,
      height: '3px',
      background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 100%)',
      zIndex: 999,
      transition: 'width 0.05s linear',
    }} className="no-print" aria-hidden="true" />
  );
};

// 12. Interactive Architecture Layer Diagram
interface ArchitectureDiagramProps {
  layers?: { label: string; components: string[] }[];
  content: string;
  diagramPlaceholder?: string;
}
export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ layers, content, diagramPlaceholder }) => {
  const activeLayers = layers || [
    { label: 'Client Gateway', components: ['React Web Client', 'Mobile App', 'Edge CDN'] },
    { label: 'Application Ingress', components: ['Kong API Gateway', 'OAuth Identity Portal'] },
    { label: 'Service Cluster', components: ['Enterprise API Node', 'Workflow Engines', 'Cache Layer'] },
    { label: 'Persistence Storage', components: ['Transactional PostgreSQL', 'TimescaleDB Metrics'] }
  ];

  return (
    <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', margin: '1.5rem 0 0', textAlign: 'left' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
        {activeLayers.map((layer, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-light)' }}>
              Layer {idx + 1}: {layer.label}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {layer.components.map((c, i) => (
                <div 
                  key={i} 
                  style={{ 
                    padding: '0.5rem 1rem', 
                    background: 'rgba(0, 82, 255, 0.04)', 
                    borderRadius: '4px', 
                    fontSize: '0.85rem', 
                    fontWeight: 600, 
                    color: 'var(--text-primary)', 
                    border: '1px solid rgba(0, 82, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Server size={14} style={{ color: 'var(--accent-light)' }} />
                  {c}
                </div>
              ))}
            </div>
            {idx < activeLayers.length - 1 && (
              <div style={{
                position: 'absolute',
                bottom: '-1.25rem',
                left: '2rem',
                width: '2px',
                height: '1rem',
                background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)'
              }} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
        <strong>Architecture Overview:</strong> {content}
      </p>
      {diagramPlaceholder && (
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          💡 {diagramPlaceholder}
        </p>
      )}
    </div>
  );
};

// 13. Reusable Pricing and Tiers Grid Table
interface PricingTableProps {
  tiers: {
    name: string;
    price?: string;
    period?: string;
    description: string;
    features: string[];
    highlight?: boolean;
    cta?: string;
  }[];
  onOpenConsultation?: () => void;
}
export const PricingTable: React.FC<PricingTableProps> = ({ tiers, onOpenConsultation }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', margin: '1.5rem 0 0' }}>
      {tiers.map((tier, idx) => (
        <div 
          key={idx} 
          className="glass-panel" 
          style={{ 
            padding: '2.5rem 2rem', 
            borderRadius: 'var(--border-radius-md)', 
            border: tier.highlight ? '2px solid var(--accent)' : '1px solid var(--border-color)', 
            background: tier.highlight ? 'rgba(0, 82, 255, 0.02)' : 'rgba(255, 255, 255, 0.01)',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'relative'
          }}
        >
          {tier.highlight && (
            <span style={{ 
              position: 'absolute', 
              top: '1rem', 
              right: '1.5rem', 
              fontSize: '0.7rem', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              color: 'var(--bg-primary)', 
              background: 'var(--accent-light)',
              padding: '0.2rem 0.6rem',
              borderRadius: '999px'
            }}>
              Popular
            </span>
          )}
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>{tier.name}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, minHeight: '2.5rem' }}>{tier.description}</p>
          </div>
          {tier.price && (
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
              <span style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>{tier.price}</span>
              {tier.period && <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{tier.period}</span>}
            </div>
          )}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
            {tier.features.map((f, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-light)', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <button 
            onClick={onOpenConsultation}
            className={tier.highlight ? "btn btn-primary" : "btn btn-secondary"}
            style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
          >
            {tier.cta || 'Get Custom Proposal'}
            <ArrowRight size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

