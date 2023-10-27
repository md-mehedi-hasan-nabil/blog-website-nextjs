/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "http://localhost:3000",
  // basePath: "https://blog-nabil.netlify.app",
  experimental: {
    appDir: true,
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
