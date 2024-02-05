/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['cdn.dummyjson.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
