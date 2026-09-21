/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: process.env.VERCEL ? undefined : "standalone",
};

export default nextConfig;
