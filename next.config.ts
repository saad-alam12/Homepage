import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  basePath: '/Homepage',
  assetPrefix: '/Homepage',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
