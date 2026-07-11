import React from 'react';
import { RefreshCw, Cpu, Layers, BarChart3, Calendar } from 'lucide-react';

interface SolutionsProps {
  onOpenConsultation: () => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onOpenConsultation }) => {
  const solutionData = [
    {
      title: 'Monolithic Legacy Modernization',
      icon: <RefreshCw size={24} />,
      challenge: 'Legacy codebases and siloed database systems are difficult to scale, leading to service faults and high developer maintenance costs.',
      delivery: 'We run codebase audits, refactor codebases into decoupled microservices, secure data migrations, and configure modern Docker containers.'
    },
    {
      title: 'Secure Generative AI Integration',
      icon: <Cpu size={24} />,
      challenge: 'Enterprises want to deploy generative large language models but cannot expose proprietary data to open public API registries.',
      delivery: 'We build private Retrieval-Augmented Generation (RAG) models, design autonomous agent tools, and deploy guards to prevent hallucinations.'
    },
    {
      title: 'Infrastructure Scaling & DevOps CI/CD',
      icon: <Layers size={24} />,
      challenge: 'Manual deployment pipelines slow feature launches, while static server structures cause downtime during traffic surges.',
      delivery: 'We configure GitOps CI/CD pipelines, provision Kubernetes networks, and write Terraform templates to automate cloud deployment.'
    },
    {
      title: 'Dynamic Organic Search Visibility (SEO)',
      icon: <BarChart3 size={24} />,
      challenge: 'Traditional ad platforms yield high client acquisition costs, while slow page speeds limit organic search indexing.',
      delivery: 'We build fast, accessible Next.js site templates, write dynamic JSON-LD schemas, and implement programmatic search visibility strategies.'
    }
  ];

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ textAlign: 'left', maxWidth: '900px' }}>
        
        {/* Page Header */}
        <header style={{ marginBottom: '4.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.15em' }}>
            Operational Alignments
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }} className="text-gradient">
            Business Solutions
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            We design secure software, optimize server loads, and scale digital visibility to solve actual business challenges.
          </p>
        </header>

        {/* Solutions Grid */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '5rem' }}>
          {solutionData.map((sol, idx) => (
            <div 
              key={idx} 
              className="glass-panel" 
              style={{ padding: '2.5rem 3rem', borderRadius: 'var(--border-radius-md)', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1.5rem', alignItems: 'flex-start' }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '8px', background: 'rgba(0, 82, 255, 0.1)', color: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
                {sol.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{sol.title}</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>The Challenge</span>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{sol.challenge}</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-light)', textTransform: 'uppercase' }}>Our Delivery</span>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: '1.6' }}>{sol.delivery}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Action Panel */}
        <div className="btn-secondary" style={{ padding: '3rem', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center', backdropFilter: 'blur(8px)' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Align your systems with modern technology solutions</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Book a virtual meeting to discuss legacy codebase migrations, custom AI layouts, or perform technical audits.
          </p>
          <button onClick={onOpenConsultation} className="btn btn-primary" aria-label="Book a virtual briefing session with our directors">
            Book Briefing Session
            <Calendar size={18} aria-hidden="true" />
          </button>
        </div>

      </div>
    </div>
  );
};
