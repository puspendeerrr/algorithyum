/**
 * Feature Flags - Granular Route Switching Control
 * Allows individual routes to be served by Next.js or fallback to Vite SPA.
 */
export const routeFlags = {
  enableNextHome: true,
  enableNextAbout: true,
  enableNextServices: true,
  enableNextSolutions: true,
  enableNextIndustries: true,
  enableNextTechnologies: true,
  enableNextBlog: true,
  enableNextGuides: true,
  enableNextCareers: true,
  enableNextContact: true,
  enableNextLegal: true,
} as const;

export type RouteFlagKey = keyof typeof routeFlags;
