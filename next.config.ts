import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.tecaudex.com" },
      { protocol: "https", hostname: "fivestarfoam.com.pk" },
      { protocol: "https", hostname: "www.logoofficial.com" },
      { protocol: "https", hostname: "www.tum.edu.pk" },
      { protocol: "https", hostname: "etihadtown.com.pk" },
      { protocol: "https", hostname: "jrcrs.riphah.edu.pk" },
      { protocol: "https", hostname: "www.turkplast.info" },
    ],
  },
};

export default nextConfig;
