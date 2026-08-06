import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Calendar } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FeatureCards, 
  Timeline, 
  ComparisonTable, 
  CalloutBox, 
  Checklist, 
  CodeBlock as RichCodeBlock, 
  Quote,
  ArchitectureDiagram,
  PricingTable
} from './RichComponents';
import type { ContentBlock, FAQItem } from '../data/types';
import { getRelatedContent } from '../engine/linking';

export function parseInlineMarkdown(text: string): React.ReactNode[] {
  if (!text) return [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|(\*\*[^*]+\*\*)/g;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.substring(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      const label = match[1];
      const url = match[2];
      const isInternal = url.startsWith('/');
      if (isInternal) {
        result.push(
          <Link key={match.index} to={url} style={{ color: 'var(--accent-light)', fontWeight: 600, textDecoration: 'underline' }}>
            {label}
          </Link>
        );
      } else {
        result.push(
          <a key={match.index} href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-light)', fontWeight: 600, textDecoration: 'underline' }}>
            {label}
          </a>
        );
      }
    } else if (match[3]) {
      const boldText = match[3].slice(2, -2);
      result.push(<strong key={match.index} style={{ color: 'var(--text-primary)' }}>{boldText}</strong>);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }

  return result;
}

interface ContentRendererProps {
  blocks: ContentBlock[];
  onOpenConsultation?: () => void;
  currentPageSlug?: string;
  currentPageTags?: string[];
  currentPageCategory?: string;
  currentPageRelatedTo?: string[];
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ 
  blocks, 
  onOpenConsultation,
  currentPageSlug,
  currentPageTags,
  currentPageCategory,
  currentPageRelatedTo
}) => {
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', width: '100%' }}>
      {blocks.map((block) => {
        switch (block.type) {
          case 'hero':
            return (
              <header key={block.id} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: '1.2' }}>{block.title}</h1>
                {block.subtitle && <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>{block.subtitle}</p>}
                {(block.primaryCta || block.secondaryCta) && (
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
                    {block.primaryCta && (
                      <button onClick={onOpenConsultation || (() => navigate('/contact'))} className="btn btn-primary">
                        {block.primaryCta.label}
                      </button>
                    )}
                    {block.secondaryCta && (
                      <button onClick={(e) => handleLinkClick(e as any, block.secondaryCta!.url)} className="btn btn-secondary">
                        {block.secondaryCta.label}
                      </button>
                    )}
                  </div>
                )}
              </header>
            );

          case 'overview':
          case 'text':
            return (
              <section key={block.id} style={{ textAlign: 'left' }}>
                {block.title && <h2 id={block.id}>{parseInlineMarkdown(block.title)}</h2>}
                {block.content.split('\n\n').map((para, i) => (
                  <p key={i} style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '1.25rem' }}>
                    {parseInlineMarkdown(para.trim())}
                  </p>
                ))}
              </section>
            );

          case 'capabilities':
          case 'features':
          case 'use-cases':
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                {block.subtitle && <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{block.subtitle}</p>}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
                  {block.items.map((item, idx) => (
                    <div key={idx} className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            );

          case 'feature-cards':
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                {block.subtitle && <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{block.subtitle}</p>}
                <FeatureCards items={block.items} />
              </section>
            );

          case 'comparison-table':
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                <ComparisonTable 
                  headers={block.columns.map(c => c.label)} 
                  rows={block.rows.map(r => {
                    const keys = block.columns.map(c => c.key);
                    return { feature: r[keys[0]] || '', val1: r[keys[1]] || '', val2: r[keys[2]] || '' };
                  })} 
                />
              </section>
            );

          case 'timeline':
          case 'process':
          case 'stepper':
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                <Timeline steps={(block as any).items || (block as any).steps} />
              </section>
            );

          case 'faq':
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                <FaqBlockComponent items={block.items} />
              </section>
            );

          case 'cta':
            return (
              <section key={block.id} style={{ marginTop: '3rem' }}>
                <div className="btn-secondary" style={{ padding: '3rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center', backdropFilter: 'blur(8px)' }}>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{block.headline}</h2>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '0.95rem', lineHeight: '1.6' }}>{block.desc}</p>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      if (onOpenConsultation) {
                        onOpenConsultation();
                      } else {
                        navigate('/contact');
                      }
                    }} 
                    className="btn btn-primary"
                  >
                    {block.buttonLabel || 'Consult with Our Engineers'}
                    <Calendar size={18} aria-hidden="true" />
                  </button>
                </div>
              </section>
            );

          case 'related-content': {
            const items = block.items && block.items.length > 0
              ? block.items
              : getRelatedContent(
                  currentPageSlug || '',
                  currentPageTags || [],
                  currentPageCategory || '',
                  currentPageRelatedTo || [],
                  block.contentType ?? '',
                  3
                );

            if (items.length === 0) return null;

            return (
              <section key={block.id} style={{ textAlign: 'left' }}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                  {items.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      onClick={(e) => handleLinkClick(e, item.url)}
                      className="glass-panel"
                      style={{ padding: '1.5rem 2rem', borderRadius: 'var(--border-radius-sm)', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-primary)', fontWeight: 700, transition: 'all var(--transition-fast)' }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span>{item.title}</span>
                        {item.desc && <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>{item.desc.length > 80 ? `${item.desc.substring(0, 80)}...` : item.desc}</span>}
                      </div>
                      <ArrowRight size={16} style={{ color: 'var(--accent-light)', flexShrink: 0, marginLeft: '1rem' }} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </section>
            );
          }

          case 'code-block':
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                <RichCodeBlock code={block.code} language={block.language} />
              </section>
            );

          case 'checklist':
          case 'business-problems':
          case 'solutions':
          case 'best-practices': {
            // All these block types have items: string[]
            const stringItems = (block as any).items as string[];
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                <Checklist items={stringItems} />
              </section>
            );
          }

          case 'callout':
            return (
              <section key={block.id}>
                <CalloutBox type={block.variant} message={block.content} />
              </section>
            );

          case 'quote':
            return (
              <section key={block.id}>
                <Quote text={block.quote} author={block.authorTitle ? `${block.author}, ${block.authorTitle}` : block.author} />
              </section>
            );

          case 'architecture':
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                <ArchitectureDiagram layers={block.layers} content={block.content} diagramPlaceholder={block.diagramPlaceholder} />
              </section>
            );

          case 'pricing-table':
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                {block.subtitle && <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{block.subtitle}</p>}
                <PricingTable tiers={block.tiers} onOpenConsultation={onOpenConsultation} />
              </section>
            );

          case 'stats-grid':
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center', margin: '2rem 0' }}>
                  {block.stats.map((stat, idx) => (
                    <div key={idx} className="glass-panel" style={{ padding: '2rem 1.5rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.01)' }}>
                      <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-light)', marginBottom: '0.5rem', background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{stat.label}</h4>
                      {stat.context && <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{stat.context}</p>}
                    </div>
                  ))}
                </div>
              </section>
            );

          case 'resource-card':
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', textAlign: 'left', margin: '2rem 0' }}>
                  {block.resources.map((res, idx) => (
                    <div key={idx} className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255,255,255,0.01)' }}>
                      <div>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-light)', display: 'inline-block', padding: '0.2rem 0.5rem', background: 'rgba(0, 82, 255, 0.05)', borderRadius: '4px', marginBottom: '0.75rem' }}>
                          {res.type}
                        </span>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>{res.title}</h3>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', flexGrow: 1, margin: 0 }}>{res.desc}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                        {res.size && <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Size: {res.size}</span>}
                        <a 
                          href={res.url || '#'} 
                          onClick={res.url ? undefined : (e) => { e.preventDefault(); if (onOpenConsultation) onOpenConsultation(); }}
                          className="btn btn-primary" 
                          style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', borderRadius: '4px' }}
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );

          case 'challenges': {
            const stringItems = Array.isArray(block.items) && typeof block.items[0] === 'string'
              ? block.items as string[]
              : null;
            if (stringItems) {
              return (
                <section key={block.id}>
                  {block.title && <h2 id={block.id}>{block.title}</h2>}
                  <Checklist items={stringItems} />
                </section>
              );
            }
            const cardItems = block.items as { title: string; desc: string }[];
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                {block.subtitle && <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{block.subtitle}</p>}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
                  {cardItems.map((item, idx) => (
                    <div key={idx} className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          case 'development-process':
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                <Timeline steps={(block as any).steps} />
              </section>
            );

          case 'industry-applications':
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                {block.subtitle && <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{block.subtitle}</p>}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
                  {block.items.map((item, idx) => (
                    <div key={idx} className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{item.industry}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '0.5rem' }}>{item.application}</p>
                      {item.example && <p style={{ fontSize: '0.8rem', color: 'var(--accent-light)', fontStyle: 'italic', margin: 0 }}>Example: {item.example}</p>}
                    </div>
                  ))}
                </div>
              </section>
            );

          case 'security-considerations':
          case 'objectives': {
            const stringItems = (block as any).items as string[];
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                <Checklist items={stringItems} />
              </section>
            );
          }

          case 'tech-stack':
            return (
              <section key={block.id}>
                {block.title && <h2 id={block.id}>{block.title}</h2>}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
                  {block.technologies.map((tech, idx) => (
                    <div key={idx} style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>
                      {tech}
                    </div>
                  ))}
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

// Internal FAQ Component with State
const FaqBlockComponent: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {items.map((faq, idx) => {
        const isActive = activeFaq === idx;
        return (
          <div
            key={idx}
            onClick={() => setActiveFaq(isActive ? null : idx)}
            className="glass-panel"
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--border-radius-sm)',
              cursor: 'pointer',
              border: isActive ? '1px solid var(--accent)' : '1px solid var(--border-color)',
              background: isActive ? 'rgba(0, 82, 255, 0.02)' : 'rgba(255, 255, 255, 0.01)',
              transition: 'all var(--transition-fast)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontWeight: 700, color: isActive ? 'var(--accent-light)' : 'var(--text-primary)' }}>{faq.q}</span>
              <ChevronDown 
                size={18} 
                style={{ 
                  color: isActive ? 'var(--accent-light)' : 'var(--text-muted)',
                  transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform var(--transition-fast)',
                  flexShrink: 0
                }} 
              />
            </div>
            {isActive && (
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
