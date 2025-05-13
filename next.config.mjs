/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Resim optimizasyonunu kapat
  },
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
