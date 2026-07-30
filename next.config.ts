import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve the bundled images directly. This keeps local Windows development
  // independent of Cloudflare's hosted image-transformation binding.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
