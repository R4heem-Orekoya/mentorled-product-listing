import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.lummi.ai",
        port: "",
        pathname: '/assets/**',
      }
    ]
  }
};

export default nextConfig;
