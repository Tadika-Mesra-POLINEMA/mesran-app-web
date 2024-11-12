import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://7pgq1bql-3000.asse.devtunnels.ms/",
        "localhost:3000",
      ],
    },
  },
};

export default nextConfig;
