import React from 'react';
import { ContentRenderer } from '../ContentRenderer';
import type { ContentBlock } from '../../data/types';

interface BlogContentProps {
  blocks: ContentBlock[];
  onOpenConsultation?: () => void;
}

export const BlogContent: React.FC<BlogContentProps> = ({ blocks, onOpenConsultation }) => {
  // Filter out hero block since we render it in BlogHeader
  // Filter out faq block since we render it in FAQSection
  const filteredBlocks = blocks.filter(
    block => block.type !== 'hero' && block.type !== 'faq'
  );

  return (
    <article className="blog-content" style={{ textAlign: 'left', width: '100%' }}>
      <ContentRenderer blocks={filteredBlocks} onOpenConsultation={onOpenConsultation} />
    </article>
  );
};
