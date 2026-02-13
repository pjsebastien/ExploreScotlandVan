import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force static export - 100% SSG
  output: 'export',

  // Trailing slash for better SEO
  trailingSlash: true,

  // Image optimization for static export
  images: {
    unoptimized: true,
  },

  // Prepare for future i18n
  // i18n will be enabled when needed
};

export default nextConfig;
