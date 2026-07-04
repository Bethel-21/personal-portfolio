# AI-Inspired Minimalist Portfolio

A production-ready, minimalist portfolio application built for Backend Engineers and AI Enthusiasts. Designed with a focus on elegance, clean typography, and professional aesthetics similar to OpenAI, Vercel, and Linear.

## Features

- **React 19 & Vite**: Ultra-fast development and optimized production builds.
- **TypeScript**: Type-safety throughout the application.
- **Tailwind CSS 4**: Modern styling with native CSS variables and glassmorphism.
- **Framer Motion**: Smooth entrance animations and micro-interactions.
- **Dark/Light Mode**: Seamless theme switching with system preference detection.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **9 Core Sections**: Hero, About, Skills, Projects, Experience, Certifications, Blog, Contact, and Footer.
- **Professional Form**: Frontend contact form with validation and comments for backend integration.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

2. Start the development server:
   ```bash
   npm run dev
   # or
   bun dev
   ```

3. Build for production:
   ```bash
   npm run build
   # or
   bun build
   ```

## Folder Structure

- `src/components`: Reusable UI components and layout elements.
- `src/sections`: Main page sections.
- `src/data`: Centralized portfolio content for easy editing.
- `src/hooks`: Custom hooks for theme and interactions.
- `src/types`: TypeScript interfaces for data structures.

## Customization

To update the portfolio content, simply edit `src/data/portfolio.ts`. The design theme can be adjusted in `src/index.css`.

## Backend Integration

The contact form in `src/sections/contact.tsx` is currently frontend-only. It includes placeholders and comments for connecting to a Django or any other backend API.

## License

MIT
