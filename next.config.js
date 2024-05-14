/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['app'],
  },
  images: {
    domains: ['static.wixstatic.com'],
    formats: ['image/webp'],
  },
  webpack: (config, { isServer }) => {
    // Handle video files with file-loader
    config.module.rules.push({
      test: /\.(mp4|mov|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'videos/'
        }
      }
    });

    return config;
  }
};

module.exports = nextConfig;
