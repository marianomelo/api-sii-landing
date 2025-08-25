import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For Cloudflare Workers deployment via static assets
  // Generates `out/` using `next export` after build
  output: 'export',
};

export default nextConfig;
