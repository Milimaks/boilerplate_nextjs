import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
  },
  images: {
    formats: ["image/avif"],
  },
  /* config options here */
};

export default nextConfig;
