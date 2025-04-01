/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Deshabilita la optimización de imágenes para compatibilidad con Netlify
    domains: [
      "web-picture.s3.us-east-1.amazonaws.com", // Debe ser solo el dominio, sin rutas
      "allaboutmenextjs.netlify.app"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  trailingSlash: true, // Corregido el nombre de la propiedad
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
