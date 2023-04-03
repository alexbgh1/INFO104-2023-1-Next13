/** @type {import('next').NextConfig} */

// Para utilizar imágenes de terceros, como imgur, se debe agregar el siguiente código en el archivo next.config.js
// (La parte de images{})

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
