/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    images: {
      unoptimized: true, // Deshabilita la optimización de imágenes
    },
    exportTrailingSlash: true,
    domains: ['web-picture.s3.us-east-1.amazonaws.com/myface.png', 'allaboutmenextjs.netlify.app'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
