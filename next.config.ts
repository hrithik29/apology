/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/apology',
  assetPrefix: '/apology/',
  trailingSlash: true,
  distDir: 'out',
  reactStrictMode: true,
}

export default nextConfig
