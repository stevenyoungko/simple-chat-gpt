/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: (config) => {
    if (!config.module) {
      return config;
    }
    config.module.rules?.push({
      test: /src\/app\/api/,
      loader: 'ignore-loader',
    });
    return config;
  },
};

export default nextConfig;
