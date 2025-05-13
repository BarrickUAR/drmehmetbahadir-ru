/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Görsellerin optimize edilmeden yüklenmesini sağlar.
  },
  output: "export", // Statik site oluşturulması için gerekli
};

export default nextConfig;
