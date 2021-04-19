// next.config.js
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

// next.config.js

module.exports = withCss(
  withPurgeCss({
    purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
  })
);
