import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing slash for better SEO
  trailingSlash: true,

  // Image optimization (unoptimized for compatibility)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
