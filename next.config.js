/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV || "development";

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
    production: "https://events-api-t.herokuapp.com",
  }[environment],
};

module.exports = nextConfig;
