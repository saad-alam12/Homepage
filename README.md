# Personal Homepage

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It serves as the personal homepage for Saad Alam, a physics student at the Technical University of Munich.

## Project Overview

The project is a simple, single-page website with a clean and modern design. It features a dark/light theme toggle and links to various social and professional profiles. The primary technologies used are Next.js, React, TypeScript, and Tailwind CSS.

## File Structure

The project follows a standard Next.js file structure:

```
/Users/saadalam/Homepage/
├───.gitignore
├───.nojekyll
├───CLAUDE.md
├───CNAME
├───eslint.config.mjs
├───LebenslaufSaadAlam2025.pdf
├───next.config.ts
├───package-lock.json
├───package.json
├───postcss.config.mjs
├───README.md
├───todo.md
├───tsconfig.json
├───.claude/
├───.cursor/
├───.git/
├───.github/
├───.next/
├───icons/
├───node_modules/
├───out/
├───public/
└───src/
    ├───app/
    ├───components/
    └───providers/
```

- **`.github/workflows/deploy.yml`**: This file contains the GitHub Actions workflow for deploying the website to GitHub Pages.
- **`icons/`**: This directory contains the SVG icons used in the project.
- **`public/`**: This directory contains static assets that are publicly accessible, such as images and documents.
- **`src/`**: This directory contains the source code for the application.
  - **`app/`**: This directory contains the core application files, including the layout and page components.
  - **`components/`**: This directory contains reusable React components.
  - **`providers/`**: This directory contains the theme provider component.

## Key Files and Components

### `next.config.ts`

This file contains the configuration for the Next.js application. It is used to define settings such as the build output directory and any custom webpack configurations.

### `postcss.config.mjs` & `tailwind.config.ts`

These files are used to configure Tailwind CSS, a utility-first CSS framework. `postcss.config.mjs` sets up the PostCSS plugins, while `tailwind.config.ts` is where you define your theme, plugins, and other customizations for Tailwind CSS.

### `src/app/layout.tsx`

This is the root layout for the application. It wraps all pages in a common HTML structure. Here's a breakdown of what it does:

- **Font Loading**: It imports and configures the `Fira_Code` font from Google Fonts using `next/font`.
- **Metadata**: It defines the default metadata for the website, such as the title and description.
- **Theme Provider**: It wraps the `children` (the page content) in the `ThemeProvider` component, which enables the dark/light theme functionality. The `suppressHydrationWarning` prop is added to the `<html>` tag to prevent errors related to server-side rendering and client-side rendering mismatches, which can occur when using themes that rely on browser-specific settings.

### `src/app/page.tsx`

This file represents the main page of the website. It contains the JSX (the markup) for the content that is displayed to the user, including the header, social links, and other sections.

### `src/providers/theme-provider.tsx`

This component is a wrapper around the `next-themes` library, which is a popular solution for managing themes in Next.js applications. It provides the necessary context for the `useTheme` hook, which is used in the `ThemeToggle` component to switch between dark and light modes.

- **`'use client'`**: This directive marks the component as a Client Component, which means it will be rendered on the client-side (in the browser) rather than on the server. This is necessary because the theme depends on the user's browser settings, which are only available on the client.
- **`NextThemesProvider`**: This is the core component from the `next-themes` library. It is configured with the following props:
  - **`attribute="class"`**: This tells the provider to apply the theme by adding a `class` to the `<html>` element (e.g., `<html class="dark">`).
  - **`defaultTheme="dark"`**: This sets the default theme to "dark".
  - **`enableSystem={false}`**: This disables the automatic detection of the user's system theme.
  - **`disableTransitionOnChange={false}`**: This enables transitions when the theme is changed.
  - **`storageKey="theme"`**: This specifies the key to use for storing the selected theme in the browser's local storage.

### `src/components/theme-toggle.tsx`

This component provides the UI for switching between the dark and light themes.

- **`'use client'`**: This is also a Client Component because it uses the `useTheme` hook, which relies on client-side state.
- **`useState` and `useEffect`**: These React hooks are used to ensure that the component is only rendered after the page has been "mounted" in the browser. This is another technique to prevent hydration mismatches, as the server doesn't have a concept of a "mounted" component.
- **`useTheme`**: This hook from `next-themes` provides the current `theme` and the `setTheme` function to update it.
- **Button Logic**: The button's `onClick` handler calls `setTheme` to toggle between `'light'` and `'dark'`. The icon inside the button (either a sun or a moon) changes based on the current theme.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.