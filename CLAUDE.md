# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Personal Homepage - Next.js Project

This is a modern, static-exported Next.js 15 personal homepage with strict black/white theming and purple accents. The site is specifically configured for GitHub Pages deployment and uses a basePath configuration.

## Tech Stack
- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** for styling with custom utility classes
- **Framer Motion** for smooth animations and micro-interactions
- **next-themes** for dark/light mode toggle with localStorage persistence
- **Lucide React** for consistent icon usage

## Development Commands
```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build for production (static export to /out)
npm run lint       # Run ESLint
npm run start      # Start production server (not used for static export)
```

## Architecture Overview

### GitHub Pages Configuration
- **Critical**: Uses `basePath: '/Homepage'` and `assetPrefix: '/Homepage'` in `next.config.ts`
- Static export configured with `output: 'export'` and `distDir: 'out'`
- All asset references must account for the basePath when linking to static files
- Images are unoptimized (`images.unoptimized: true`) for static hosting

### Theme System Architecture
- Custom `ThemeProvider` wrapper around `next-themes` with specific configuration:
  - `defaultTheme: 'dark'`
  - `enableSystem: false` (manual toggle only)
  - `disableTransitionOnChange: true` to prevent hydration issues
- `suppressHydrationWarning` on both `<html>` and `<body>` elements to handle next-themes DOM modifications
- Theme state persisted to localStorage with key `"theme"`

### Color System
- **Strict palette**: Only black (`#000000`), white (`#ffffff`), and purple (`#7c3aed`) colors
- **No grays**: All `gray-*` classes replaced with `black/white` equivalents
- **Consistent theming**: `bg-white dark:bg-black`, `text-black dark:text-white`, `border-black dark:border-white`
- **Purple accents**: Used sparingly for highlights, links, and interactive elements

### Animation System
- Framer Motion variants with proper TypeScript typing using `Variants` interface
- Staggered animations with `staggerChildren` for sequential reveals
- Hover animations using `whileHover` and `whileTap` for interactive feedback
- Custom CSS animations defined in `globals.css` (`fadeIn`, `fadeInUp`, `slideIn`)

### Component Architecture
- **Layout**: Root layout with font configuration (Fira Code) and theme provider setup
- **ThemeToggle**: Client component with mounting logic to prevent hydration mismatches
- **Page**: Single-page application with animated sections (Header, About, Projects, Contact)

## Critical Implementation Details

### Static Asset Handling
When referencing static files in the `/public` directory, use absolute paths with basePath:
```tsx
// Correct for GitHub Pages
href="/Homepage/filename.pdf"

// Incorrect - will 404 on GitHub Pages
href="/filename.pdf" or href="./filename.pdf"
```

### Theme Toggle Implementation
- Uses `resolvedTheme` or `theme` from `useTheme` hook
- Includes mounting check with `useState` and `useEffect` to prevent hydration errors
- Loading state displays placeholder element during client-side mounting

### Deployment Pipeline
- GitHub Actions workflow with separate build and deploy jobs
- Uses official GitHub Pages actions (`actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`)
- Requires `pages: write` and `id-token: write` permissions
- Deploys to `gh-pages` branch automatically on push to `master`

### Hydration Management
- `suppressHydrationWarning` strategically placed only where next-themes modifies DOM
- Theme provider configured to minimize client/server rendering differences
- Client components properly marked with `'use client'` directive

## Build Output Structure
- Static files exported to `/out` directory
- All assets prefixed with `/Homepage/` for GitHub Pages subdirectory hosting
- CSS and JS chunks automatically handled by Next.js build process
- Static assets (PDF, icons) copied to output directory during build