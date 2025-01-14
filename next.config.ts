import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: undefined, // Disable Turbopack
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Match all hostnames
      },
    ],
  },
};

export default nextConfig;
