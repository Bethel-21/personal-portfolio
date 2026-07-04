# Implementation Plan - AI-Inspired Minimalist Portfolio

Create a complete, production-ready React portfolio application for a Backend Engineer & AI Enthusiast. The design will be clean, modern, and minimalist, inspired by OpenAI, Vercel, and Linear.

## Scope & Non-Goals
- **Scope**: Full React 19 frontend with TypeScript, Vite, Tailwind CSS, Framer Motion, and React Icons. All requested sections (Hero, About, Skills, Projects, Experience, Certifications, Blog, Contact, Footer) included.
- **Non-Goals**: No actual backend implementation (Contact form is frontend-only), no complex 3D/space themes, no real database connection (all data local/mocked).

## Assumptions & Open Questions
- **Assumption**: The user wants a single-page application (SPA) with smooth scrolling.
- **Assumption**: Dark/Light mode should be handled via a toggle in the header.
- **Open Question**: Are there specific project images? (Plan: Use high-quality Unsplash placeholders).

## Affected Areas
- **Configuration**: `package.json`, `vite.config.ts`, `tailwind.config.js` (if needed for v4 bridge, though project uses `@tailwindcss/vite`), `tsconfig.json`.
- **Frontend Architecture**:
  - `src/components/ui`: Atomic reusable components (buttons, cards, inputs).
  - `src/sections`: Main page sections (Hero, About, etc.).
  - `src/layouts`: Main layout wrapper with Header/Footer.
  - `src/data`: Centralized portfolio content for easy editing.
  - `src/hooks`: Theme and scroll hooks.

## Phases

### Phase 1: Environment & Foundation
- Update `package.json` with required dependencies: `framer-motion`, `react-icons`, `clsx`, `tailwind-merge`.
- Set up directory structure: `src/components`, `src/sections`, `src/layouts`, `src/hooks`, `src/data`, `src/types`.
- Configure global styles in `index.css` for the minimalist AI theme (soft gradients, glassmorphism).
- Define TypeScript interfaces for portfolio data.

### Phase 2: Data & Core Components
- Create `src/data/portfolio.ts` with realistic placeholder content (Backend Engineer focus).
- Build shared UI components: `Button`, `Card`, `SectionHeading`, `Badge`.
- Implement `ThemeContext` or a simple hook for Dark/Light mode toggle.

### Phase 3: Layout & Sections (Part 1)
- Build `Layout.tsx` with a sticky navigation header and footer.
- Implement **Hero Section**: High-impact minimalist typography, CTA buttons.
- Implement **About Section**: Professional bio with career transition focus.
- Implement **Skills Section**: Categorized tech stack with icons.

### Phase 4: Layout & Sections (Part 2)
- Implement **Featured Projects**: Responsive grid of cards with hover effects and glassmorphism.
- Implement **Experience Section**: Clean timeline for work history.
- Implement **Certifications**: Card layout for credentials.

### Phase 5: Layout & Sections (Part 3)
- Implement **Blog Preview**: Simple grid with recent "articles".
- Implement **Contact Section**: Professional form with validation (frontend-only logic).
- Implement **Footer**: Links and social icons.

### Phase 6: Refinement & Polish
- Add Framer Motion entrance animations (fade-in, slide-up).
- Ensure full responsiveness and WCAG accessibility (aria-labels, color contrast).
- Add smooth scrolling and active section highlighting in the nav.
- Final check of README and configuration files.

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the entire application structure and sections.
2. quick_fix_engineer — Final polish of text, CSS tweaks, and minor fixes if needed.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1-5
- **Scope:** Complete implementation of the React portfolio. 
- **Files:** `package.json`, `src/**/*`, `index.html`, `vite.config.ts`, `index.css`.
- **Depends on:** none
- **Acceptance criteria:**
  - App runs with `npm run dev`.
  - Dark/Light mode works perfectly.
  - All 9 requested sections are present and populated with realistic content.
  - Animations are smooth (Framer Motion).
  - Design matches "OpenAI/Vercel/Linear" minimalist aesthetic.
  - Responsive on mobile and tablet.
  - Contact form has comments for future Django integration.

### 2. quick_fix_engineer
- **Phases:** 6
- **Scope:** Review UI for any alignment issues, ensure typography is consistent, and fix any typos in the realistic placeholders.
- **Files:** `src/index.css`, `src/data/portfolio.ts`, `src/sections/*`.
- **Depends on:** frontend_engineer
- **Acceptance criteria:** UI is pixel-perfect and text is professional.
