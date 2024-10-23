/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co.com"],
  },

  experimental: {
    appDir: true, // If you're using the new app directory in Next.js 14
  },
};

export default nextConfig;
