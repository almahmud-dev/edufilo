const nextConfig = {
  allowedDevOrigins: ["192.168.0.104"],
  experimental: {
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
    deviceSizes: [320, 420, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;