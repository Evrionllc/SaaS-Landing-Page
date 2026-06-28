import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this folder so Next doesn't pick up an
  // unrelated lockfile higher in the filesystem.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
