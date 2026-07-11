/**
 * Reading Time Engine
 *
 * Automatically estimates reading time from a ContentBlock[] array.
 * Extracts all text fields from all block types and counts words
 * at an average reading speed of 200 words per minute.
 *
 * Used by DynamicPage to compute readTime when not explicitly set.
 */
import type { ContentBlock } from '../data/types';

const WORDS_PER_MINUTE = 200;

/**
 * Extract all readable text from a ContentBlock array.
 */
function extractText(blocks: ContentBlock[]): string {
  const parts: string[] = [];

  for (const block of blocks) {
    const b = block as any;

    if (b.title)    parts.push(b.title);
    if (b.subtitle) parts.push(b.subtitle);
    if (b.content)  parts.push(b.content);
    if (b.headline) parts.push(b.headline);
    if (b.desc)     parts.push(b.desc);
    if (b.badge)    parts.push(b.badge);

    // Arrays of strings
    if (Array.isArray(b.items)) {
      for (const item of b.items) {
        if (typeof item === 'string') {
          parts.push(item);
        } else if (typeof item === 'object' && item !== null) {
          if (item.title) parts.push(item.title);
          if (item.desc)  parts.push(item.desc);
          if (item.q)     parts.push(item.q);
          if (item.a)     parts.push(item.a);
          if (item.application) parts.push(item.application);
          if (item.example)     parts.push(item.example);
        }
      }
    }

    // Steps arrays
    if (Array.isArray(b.steps)) {
      for (const s of b.steps) {
        if (s.title) parts.push(s.title);
        if (s.desc)  parts.push(s.desc);
        if (s.label) parts.push(s.label);
      }
    }

    // Technologies
    if (Array.isArray(b.technologies)) {
      parts.push(...b.technologies);
    }

    // Stats grid
    if (Array.isArray(b.stats)) {
      for (const s of b.stats) {
        if (s.label)   parts.push(s.label);
        if (s.context) parts.push(s.context);
      }
    }

    // Metrics
    if (Array.isArray(b.metrics)) {
      for (const m of b.metrics) {
        if (m.label)   parts.push(m.label);
        if (m.context) parts.push(m.context);
      }
    }

    // Layers
    if (Array.isArray(b.layers)) {
      for (const l of b.layers) {
        if (l.label) parts.push(l.label);
        if (Array.isArray(l.components)) parts.push(...l.components);
      }
    }

    // Pricing tiers
    if (Array.isArray(b.tiers)) {
      for (const t of b.tiers) {
        if (t.name)        parts.push(t.name);
        if (t.description) parts.push(t.description);
        if (Array.isArray(t.features)) parts.push(...t.features);
      }
    }

    // References
    if (Array.isArray(b.resources)) {
      for (const r of b.resources) {
        if (r.title) parts.push(r.title);
        if (r.desc)  parts.push(r.desc);
      }
    }

    // Code blocks (count as 0 reading time — skip)
    // Architecture
    if (b.diagramPlaceholder) parts.push(b.diagramPlaceholder);

    // Related content
    if (Array.isArray(b.items)) {
      for (const item of b.items) {
        if (item && typeof item === 'object' && item.url === undefined) continue;
      }
    }
  }

  return parts.join(' ');
}

/**
 * Estimate reading time for a set of content blocks.
 * Returns a string like "5 min read".
 */
export function estimateReadingTime(blocks: ContentBlock[]): string {
  const text = extractText(blocks);
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
