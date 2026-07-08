import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: [
      'pub-edd2122b0d1743e3b2e26959abba5654.r2.dev',
      'images.unsplash.com',
      'assets.aceternity.com',
    ],
  },
};

export default nextConfig;
