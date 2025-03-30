/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['web-picture.s3.us-east-1.amazonaws.com', 'allaboutmenextjs.netlify.app'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
