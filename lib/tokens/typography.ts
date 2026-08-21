/**
 * Design System - Typography Tokens
 */
export const typography = {
  fontSans: "var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif)",
  fontHeading: "var(--font-heading, 'Sora', system-ui, -apple-system, sans-serif)",

  fontSizeDisplay: 'clamp(2.25rem, 5vw + 1rem, 4.5rem)',
  fontSizeH1: 'clamp(2rem, 4vw + 0.5rem, 3.5rem)',
  fontSizeH2: 'clamp(1.5rem, 2.5vw + 0.5rem, 2.75rem)',
  fontSizeH3: 'clamp(1.15rem, 1.5vw + 0.5rem, 1.75rem)',
  fontSizeH4: 'clamp(1rem, 1vw + 0.5rem, 1.4rem)',
  fontSizeBody: 'clamp(0.875rem, 0.5vw + 0.75rem, 1.125rem)',
  fontSizeBodyLg: 'clamp(0.95rem, 0.75vw + 0.5rem, 1.25rem)',
  fontSizeSmall: 'clamp(0.8rem, 0.3vw + 0.7rem, 0.95rem)',
  fontSizeXs: 'clamp(0.7rem, 0.25vw + 0.6rem, 0.875rem)',
} as const;
