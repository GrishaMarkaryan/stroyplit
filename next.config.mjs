/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/yandex_6b19dac3327e96af.html',
          destination: '/yandex_6b19dac3327e96af.html',
        },
      ];
    },
  };
  
  export default nextConfig;