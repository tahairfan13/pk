import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.tecaudex.com" },
      { protocol: "https", hostname: "fivestarfoam.com.pk" },
      { protocol: "https", hostname: "alkhairenterprises.pk" },
      { protocol: "https", hostname: "www.logoofficial.com" },
    ],
  },
};

export default nextConfig;
