/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Sadiya_Deshmukh',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Sadiya_Deshmukh',
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' }
    ]
  }
};

module.exports = nextConfig;

