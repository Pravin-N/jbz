// next.config.js

module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }
    return config;
  },
};
