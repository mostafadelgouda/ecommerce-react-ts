import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    //domains: ["febe12.github.io"], // add your image domain here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "febe12.github.io",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },

};

export default nextConfig;
