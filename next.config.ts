/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : '',
  trailingSlash: true,
  distDir: 'out',
  reactStrictMode: true,
  // Handle static assets
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: ['file-loader'],
    });
    return config;
  },
}

export default nextConfig
