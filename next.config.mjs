/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    async rewrites() {
      return [
        {
          source: '/yandex_6b19dac3327e96af.html',
          destination: '/public/yandex_6b19dac3327e96af.html',
        },
      ];
    },
  };