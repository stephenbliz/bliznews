import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: undefined, // Disable Turbopack
  },
};

export default nextConfig;
