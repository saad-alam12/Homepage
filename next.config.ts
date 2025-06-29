import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  // Comment out for local development, uncomment for GitHub Pages
  // basePath: '/Homepage',
  // assetPrefix: '/Homepage',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
