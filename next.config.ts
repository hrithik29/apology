/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/apology' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/apology/' : '',
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
