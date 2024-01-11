/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,

  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "task",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          // specify exposed pages and components
          "./taskList": "./src/pages/index.jsx",
          "./taskDetail": "./src/pages/[id].jsx",
        },
        shared: {
          // "tailwindcss": {
          //   eager: true,
          //   requiredVersion: false,
          //   singleton: true,
          // },
        },
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
