// next.config.js

module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./pages/api/generate-sitemap");
    }
    return config;
  },
};
