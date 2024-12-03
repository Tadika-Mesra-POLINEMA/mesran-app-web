import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://7pgq1bql-3001.asse.devtunnels.ms/",
        "localhost:3001",
      ],
    },
  },
};

export default nextConfig;
