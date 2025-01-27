import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: undefined, // Disable Turbopack
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 's.espncdn.com',
        pathname: '/stitcher/**', // Example: Specific path on this domain
      },
      {
        protocol: 'https',
        hostname: '**', // Match all hostnames
        pathname: '/**'
      },
    ],
  },
};

export default nextConfig;
