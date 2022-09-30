/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/events",
        permanent: true,
      },
    ];
  },
  apiUrl: {
    development: "http://localhost:3005",
    // production: "https://events-app-2021.herokuapp.com",
  }[process.env.NODE_ENV],
};

module.exports = nextConfig;
