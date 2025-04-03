/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  trailingSlash: true,
};

module.exports = nextConfig;
