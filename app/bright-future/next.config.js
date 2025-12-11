/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/bright-future',
          permanent: true,
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  