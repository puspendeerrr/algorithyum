import React, { useState } from 'react';
import { 
  ArrowRight, 
  Briefcase, 
  Terminal, 
  Sparkles, 
  Mail, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Zap, 
  HeartHandshake, 
  Copy, 
  Check 
} from 'lucide-react';

interface CareersPageProps {
  onOpenContact?: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = () => {
  const [copied, setCopied] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@algorithyum.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const culturePerks = [
    {
      title: 'Engineer-First Environment',
      icon: <Terminal size={22} />,
      desc: 'Zero bureaucratic bloat. We prioritize clean codebases, static type safety, decoupled microservices, and practical architecture over unnecessary meetings.'
    },
    {
      title: 'Cutting-Edge AI & Cloud Tech',
      icon: <Cpu size={22} />,
      desc: 'Work directly on production-grade RAG systems, autonomous agent pipelines, micro-services on Kubernetes, and high-concurrency React/Node applications.'
    },
    {
      title: 'Remote-First Flexibility',
      icon: <Globe size={22} />,
      desc: 'Work from anywhere with asynchronous workflows, flexible working hours, and complete trust in your engineering deliverables.'
    },
    {
      title: 'Continuous R&D Allowance',
      icon: <Zap size={22} />,
      desc: 'Annual $2,500 budget for tech conferences, courses, books, and unrestricted access to enterprise AI models & cloud infrastructure for testing.'
    },
    {
      title: 'Competitive Pay & Bonus',
      icon: <ShieldCheck size={22} />,
      desc: 'Top-tier compensation packages with performance milestone bonuses, direct project profit sharing, and generous paid time off.'
    },
    {
      title: 'Health & Wellness Coverage',
      icon: <HeartHandshake size={22} />,
      desc: 'Comprehensive medical, dental, and vision insurance coverage for you and your dependents, plus gym & wellness reimbursements.'
    }
  ];

  const hiringProcess = [
    {
      step: '01',
      title: 'Resume & Portfolio Review',
      desc: 'Send your resume and GitHub / project links to info@algorithyum.in. We evaluate technical depth and codebase clarity.'
    },
    {
      step: '02',
      title: 'System Architecture Discussion',
      desc: 'A 45-minute technical conversation with a senior engineering pod lead covering system design, database schemas, and trade-offs.'
    },
    {
      step: '03',
      title: 'Hands-on Code Challenge',
      desc: 'Real-world practical pair programming exercise—no trick algorithmic puzzles or whiteboarding gimmicks.'
    },
    {
      step: '04',
      title: 'Offer & Rapid Onboarding',
      desc: 'Transparent salary offer, complete equipment setup allowance, and immediate integration into our engineering teams.'
    }
  ];

  const positions = [
    {
      id: 'ai-rag-lead',
      title: 'Senior AI Systems & RAG Engineer',
      department: 'AI & Data',
      location: 'Remote (Worldwide)',
      type: 'Full-Time',
      desc: 'Lead the design and deployment of enterprise autonomous AI agent workflows, retrieval-augmented generation (RAG) platforms, and custom vector database indexing engines.',
      responsibilities: [
        'Build production multi-agent orchestration frameworks using LangChain and LlamaIndex.',
        'Optimize vector embedding retrieval latency and hybrid keyword-semantic database search.',
        'Fine-tune private open-source LLM models for high-concurrency enterprise applications.'
      ],
      techStack: ['Python', 'LangChain', 'LlamaIndex', 'OpenAI', 'Pinecone', 'PostgreSQL', 'FastAPI']
    },
    {
      id: 'fullstack-architect',
      title: 'Senior Full Stack Architect (React / Node / TS)',
      department: 'Engineering',
      location: 'Remote (Worldwide)',
      type: 'Full-Time',
      desc: 'Architect high-concurrency Web applications and Node.js microservices with strict TypeScript typing, responsive modern interfaces, and optimized API layers.',
      responsibilities: [
        'Develop responsive modern web applications using React, Next.js, Vite, and Tailwind/Vanilla CSS.',
        'Build robust, type-safe REST and GraphQL APIs in Node.js / Express / NestJS.',
        'Optimize Core Web Vitals, browser bundle chunking, and client-side state management.'
      ],
      techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Vite', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      id: 'devops-cloud-lead',
      title: 'Cloud Infrastructure & DevOps Security Lead',
      department: 'Cloud & Infrastructure',
      location: 'Remote (Worldwide)',
      type: 'Full-Time',
      desc: 'Design zero-trust multi-cloud platforms across AWS and Google Cloud, automate infrastructure provisioning using Terraform, and maintain CI/CD pipelines.',
      responsibilities: [
        'Manage high-availability Kubernetes (EKS/GKE) clusters and automated autoscaling rules.',
        'Write modular Terraform IaC templates for enterprise cloud deployments.',
        'Implement zero-trust security postures, IAM policies, and automated vulnerability scanning.'
      ],
      techStack: ['AWS', 'Google Cloud', 'Terraform', 'Kubernetes', 'Helm', 'Docker', 'GitHub Actions']
    },
    {
      id: 'tech-seo-specialist',
      title: 'Technical SEO & Web Performance Specialist',
      department: 'Growth & Analytics',
      location: 'Remote (Worldwide)',
      type: 'Full-Time / Contract',
      desc: 'Audit and optimize web applications for 100/100 Lighthouse performance, implement structured JSON-LD schemas, and drive organic technical search authority.',
      responsibilities: [
        'Conduct deep technical SEO audits, site architecture crawl diagnostics, and canonical audits.',
        'Implement custom Schema.org JSON-LD microdata for rich search snippets.',
        'Optimize Core Web Vitals (LCP, CLS, INP) across complex dynamic web applications.'
      ],
      techStack: ['Technical SEO', 'Schema.org', 'Lighthouse 100', 'Next.js', 'Screaming Frog', 'Analytics']
    }
  ];

  const filteredPositions = selectedDepartment === 'All' 
    ? positions 
    : positions.filter(pos => pos.department === selectedDepartment);

  const departments = ['All', 'AI & Data', 'Engineering', 'Cloud & Infrastructure', 'Growth & Analytics'];

  return (
    <>
      <style>{`
        .careers-page {
          padding-top: 120px;
          min-height: 100vh;
          padding-bottom: 6rem;
          background: var(--bg-primary);
          color: var(--text-primary);
          position: relative;
        }
        .careers-ambient {
          position: absolute;
          top: 80px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 450px;
          background: radial-gradient(circle, rgba(122, 79, 240, 0.08) 0%, rgba(0, 82, 255, 0.03) 50%, transparent 80%);
          pointer-events: none;
          z-index: 0;
        }
        .email-callout-box {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 4.5rem;
          position: relative;
          z-index: 1;
          box-shadow: var(--glass-shadow);
        }
        .email-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.75rem 1.25rem;
          background: rgba(0, 82, 255, 0.08);
          border: 1px solid rgba(0, 82, 255, 0.25);
          border-radius: 12px;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--accent-light);
        }
        .job-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
          transition: all 0.3s ease;
          position: relative;
          box-shadow: var(--glass-shadow);
        }
        .job-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-light);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.12), 0 0 25px rgba(122, 79, 240, 0.18);
        }
        .department-btn {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .department-btn.active {
          background: var(--accent-gradient);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(122, 79, 240, 0.3);
        }
        .department-btn:hover:not(.active) {
          border-color: var(--accent-light);
          color: var(--text-primary);
        }
        @media (max-width: 768px) {
          .email-callout-box {
            flex-direction: column;
            text-align: center;
          }
          .email-pill {
            font-size: 0.95rem;
            width: 100%;
            justify-content: center;
          }
          .job-card {
            padding: 1.75rem;
          }
        }
      `}</style>

      <div className="careers-page">
        <div className="careers-ambient" />
        
        <div className="container">
          
          {/* Header */}
          <header style={{ marginBottom: '4rem', textAlign: 'left', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', borderRadius: '50px', background: 'rgba(122, 79, 240, 0.1)', border: '1px solid rgba(122, 79, 240, 0.25)', color: 'var(--accent-light)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
              <Sparkles size={14} /> Join Algorithyum Engineering Pods
            </div>

            <h1 className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 1rem 0' }}>
              Engineering Careers
            </h1>

            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '900px', margin: 0 }}>
              We build scalable AI engines, decoupled cloud infrastructure, and robust enterprise platforms. We are looking for senior engineers, AI architects, and systems specialists who value code integrity and operational perfection.
            </p>
          </header>

          {/* Resume Instruction Banner (Replaces Transmit CV) */}
          <div className="email-callout-box">
            <div style={{ textAlign: 'left', maxWidth: '650px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.35rem' }}>
                DIRECT APPLICATION INSTRUCTIONS
              </span>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 800, margin: '0 0 0.5rem 0' }}>
                Send Your Resume Directly to Our Engineering Team
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                Skip traditional application portals. Send your resume, CV details, and GitHub / portfolio link directly to our hiring inbox at <strong style={{ color: 'var(--text-primary)' }}>info@algorithyum.in</strong>.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', maxWidth: '380px' }}>
              <div className="email-pill">
                <Mail size={18} />
                <span>info@algorithyum.in</span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a 
                  href="mailto:info@algorithyum.in?subject=Application%20-%20Algorithyum%20Engineering" 
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem' }}
                >
                  <Mail size={16} />
                  <span>Send Resume</span>
                </a>

                <button 
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
                  title="Copy email address"
                >
                  {copied ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Why Join Us - Perks & Culture */}
          <section style={{ marginBottom: '5rem', textAlign: 'left' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                ENGINEERING CULTURE &amp; PERKS
              </span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0.35rem 0 0 0' }}>
                Why Build Your Career With Algorithyum?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {culturePerks.map((perk, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    background: 'var(--bg-secondary)', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: 'var(--border-radius-md)', 
                    padding: '2rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '1rem',
                    boxShadow: 'var(--glass-shadow)'
                  }}
                >
                  <div style={{ display: 'inline-flex', padding: '0.75rem', borderRadius: '12px', background: 'rgba(0, 82, 255, 0.1)', color: 'var(--accent-light)', width: 'fit-content' }}>
                    {perk.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>{perk.title}</h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{perk.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hiring Process */}
          <section style={{ marginBottom: '5rem', textAlign: 'left' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                4-STEP TRANSPARENT PROCESS
              </span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0.35rem 0 0 0' }}>
                How We Hire Engineers
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {hiringProcess.map((proc, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    background: 'var(--bg-secondary)', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: 'var(--border-radius-md)', 
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                    textAlign: 'left',
                    boxShadow: 'var(--glass-shadow)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#ffffff', background: 'var(--accent-gradient)', padding: '0.3rem 0.75rem', borderRadius: '50px', letterSpacing: '0.08em', boxShadow: '0 2px 10px rgba(0, 82, 255, 0.25)' }}>
                      STEP {proc.step}
                    </span>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>{proc.title}</h3>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{proc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions List */}
          <section style={{ marginBottom: '5rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  ACTIVE OPPORTUNITIES
                </span>
                <h2 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0.35rem 0 0 0' }}>
                  Open Engineering Positions
                </h2>
              </div>

              {/* Department Filter Pills */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {departments.map(dept => (
                  <button
                    key={dept}
                    className={`department-btn ${selectedDepartment === dept ? 'active' : ''}`}
                    onClick={() => setSelectedDepartment(dept)}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {filteredPositions.map(pos => (
                <div key={pos.id} className="job-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-light)', background: 'rgba(0, 82, 255, 0.08)', padding: '0.25rem 0.65rem', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {pos.department}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>• {pos.type}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>• {pos.location}</span>
                      </div>
                      <h3 style={{ fontSize: '1.65rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>{pos.title}</h3>
                    </div>

                    <a 
                      href={`mailto:info@algorithyum.in?subject=Application%20for%20${encodeURIComponent(pos.title)}`}
                      className="btn btn-primary"
                      style={{ fontSize: '0.85rem' }}
                    >
                      <span>Send Resume to info@algorithyum.in</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.65', margin: 0 }}>
                    {pos.desc}
                  </p>

                  <div>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                      Key Responsibilities:
                    </h4>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0, color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.65', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {pos.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>Tech Stack:</span>
                    {pos.techStack.map((tech, idx) => (
                      <span key={idx} style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Open Spontaneous Application Banner */}
          <div style={{ background: 'var(--bg-secondary)', border: '1.5px dashed var(--border-color)', borderRadius: 'var(--border-radius-md)', padding: '3.5rem 2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', boxShadow: 'var(--glass-shadow)' }}>
            <div style={{ padding: '1rem', borderRadius: '50%', background: 'rgba(0, 82, 255, 0.08)', color: 'var(--accent-light)' }}>
              <Briefcase size={36} />
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>
              Don't See Your Specific Role Listed?
            </h2>

            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', fontSize: '1.05rem', lineHeight: '1.65', margin: 0 }}>
              We are always open to networking with extraordinary systems architects, AI researchers, and cloud security engineers. If you build clean code and write reliable software, send your resume to <strong style={{ color: 'var(--text-primary)' }}>info@algorithyum.in</strong>.
            </p>

            <a 
              href="mailto:info@algorithyum.in?subject=Spontaneous%20Application%20-%20Algorithyum" 
              className="btn btn-primary"
              style={{ marginTop: '0.75rem', padding: '0.85rem 2rem', fontSize: '1rem' }}
            >
              <Mail size={18} />
              <span>Send Your Resume to info@algorithyum.in</span>
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </>
  );
};
