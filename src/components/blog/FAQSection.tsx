import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <style>{`
        .faq-blog-section {
          margin-top: 4rem;
          border-top: 1px solid var(--border-color);
          padding-top: 3rem;
          text-align: left;
          width: 100%;
        }
        .faq-blog-title {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 2rem;
        }
        .faq-blog-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-blog-item {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .faq-blog-item:hover {
          border-color: var(--accent-light);
          background: rgba(255, 255, 255, 0.03);
        }
        .faq-blog-question {
          width: 100%;
          background: transparent;
          border: none;
          color: var(--text-primary);
          padding: 1.25rem 1.5rem;
          font-size: 1.05rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          transition: color 0.2s ease;
        }
        .faq-blog-question:hover {
          color: var(--accent-light);
        }
        .faq-blog-answer {
          padding: 0 1.5rem 1.25rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          animation: slideDown 0.2s ease-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <section className="faq-blog-section">
        <h3 className="faq-blog-title text-gradient">Frequently Asked Questions</h3>
        <div className="faq-blog-list">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-blog-item">
                <button 
                  className="faq-blog-question"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {isOpen && (
                  <div className="faq-blog-answer">
                    <p style={{ margin: 0 }}>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
