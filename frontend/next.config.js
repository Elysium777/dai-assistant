const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true
  }
  // Make sure you don't have any incorrect export configurations here
};

module.exports = nextConfig;
