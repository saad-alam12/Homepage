
# Next.js Homepage Project

This is now a modern Next.js 15 project with:

## Tech Stack
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- next-themes (dark/light mode)
- Lucide React (icons)

## Development Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (static export)
- `npm run lint` - Run ESLint

## Deployment
- Configured for GitHub Pages with static export
- Auto-deploys via GitHub Actions on push to master
- Static files generated in `/out` directory

## Project Structure
- `/src/app/` - Next.js App Router pages
- `/src/components/` - Reusable React components
- `/src/providers/` - Context providers (theme)
- `/public/` - Static assets (icons, CV)
- `/.github/workflows/` - GitHub Actions for deployment