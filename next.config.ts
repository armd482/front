import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'camera=*, microphone=*, display-capture=*',
          },
        ],
        source: '/(.*)', // 모든 경로에 적용
      },
    ];
  },
  turbopack: {
    rules: {
      '*.svg': {
        as: '*.js',
        loaders: ['@svgr/webpack'],
      },
    },
  },
};

export default nextConfig;
