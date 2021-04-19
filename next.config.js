// next.config.js
const withPurgeCss = require("next-purgecss");

module.exports = withCss(withPurgeCss());

// {
//   images: {
//     domains: ["images.ctfassets.net"],
//   },
// webpack: (config, { isServer }) => {
//   if (isServer) {
//     require("./scripts/generate-sitemap");
//   }

//   return config;
// },
// };
