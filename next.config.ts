import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
	images: {
		domains: ["firebasestorage.googleapis.com"],
	},
};

export default nextConfig;
