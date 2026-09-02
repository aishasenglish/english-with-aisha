import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/#getting-started", permanent: true },
      { source: "/batches", destination: "/courses/ielts#availability", permanent: true },
      { source: "/free-diagnostic-test", destination: "/contact", permanent: true },
      { source: "/success-stories", destination: "/#student-experience", permanent: true },
    ];
  },
};

export default nextConfig;
