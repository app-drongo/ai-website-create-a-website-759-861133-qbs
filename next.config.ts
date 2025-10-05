import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Static export for CDN / R2 hosting
  output: "export",

  // ✅ Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**" },
    ],
  },

  // ✅ Keep consistent routing for static files
  trailingSlash: true,

  reactStrictMode: true,

  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },

  /**
   * ✅ Default asset prefix
   * Use "/" so Next exports `_next` relative to root
   * The Cloudflare Worker will rewrite asset URLs dynamically
   */
  assetPrefix: "/",
  basePath: "",

  webpack: (config) => {
    // Force static publicPath for export (used by JS chunks)
    config.output.publicPath = "/_next/";
    return config;
  },
};

export default nextConfig;
