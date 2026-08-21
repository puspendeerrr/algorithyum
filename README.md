# Algorithyum — Enterprise Digital Platform

Algorithyum is an enterprise digital platform engineered for software development, generative AI integration, cloud architectures, cybersecurity, and digital growth.

---

## 🚀 Architecture Overview

This codebase operates a **Parallel Next.js App Router + Vite SPA Architecture**:

- **Next.js App Router (`src/app/`)**: Full Server-Side Rendering (SSR) and Static Site Generation (SSG) with optimized SEO metadata, JSON-LD schemas, dynamic routes, and image optimization pipelines.
- **Vite SPA (`src/pages/`, `src/views/`)**: High-performance client-side Single Page Application baseline maintained as a parallel source of truth.

---

## 🛠️ Tech Stack & Tooling

- **Framework**: Next.js 15+ (App Router) & React 19
- **Build Engine**: Vite & Rolldown
- **Type System**: TypeScript (Strict Mode)
- **Styling**: Vanilla CSS Modules & CSS Design System Tokens (`lib/tokens/`)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Next Font Google (`Inter` & `Sora`)

---

## 📂 Project Structure

```
algorithyum/
├── lib/
│   ├── flags/          # Route-level feature flag engine
│   ├── metadata/       # Centralized SEO metadata generators
│   ├── schema/         # Structured JSON-LD schema builders
│   ├── tokens/         # Typed design system tokens
│   └── utils/          # Navigation & environment utilities
├── src/
│   ├── app/            # Next.js App Router Route Groups
│   │   ├── (marketing) # Marketing & Service routes
│   │   ├── (legal)     # Privacy, Terms & Cookie policies
│   │   └── (system)    # Sitemap & system routes
│   ├── components/     # Reusable UI & layout components
│   ├── data/           # Content engine & SEO registries
│   ├── pages/          # Vite SPA page implementations
│   └── views/          # Architectural view layouts
├── public/             # Static assets, sitemap.xml, robots.txt, rss.xml
├── next.config.mjs     # Next.js production configuration
├── vite.config.ts      # Vite bundler & alias configuration
└── tsconfig.app.json   # Path alias mappings (@/*)
```

---

## ⚙️ Development & Build Commands

```bash
# Start Next.js Development Server (Port 3000)
npm run dev

# Start Vite Development Server (Port 5173)
npx vite

# Run TypeScript Type Checker
npx tsc --noEmit

# Run Full Production Build & SEO Audit Pipeline
npm run build
```

---

## ✅ Quality & Verification

- **0 TypeScript Errors**: Enforced via `tsc --noEmit`.
- **0 Broken Links / 0 Duplicate Meta Tags**: Automated build-time validation via `scripts/seo-checks.ts`.
- **Pixel-Perfect UI/UX**: 100% visual and functional parity across all 59+ routes.
