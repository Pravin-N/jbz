/* eslint-disable @typescript-eslint/no-var-requires */
import FeaturePostData from "../../components/data.js";
import articles from "../../components/articles.js";

const featuredata = FeaturePostData.map(
  (feature) => "/business-setup/" + feature.slug
);
const articleData = articles.map(
  (article) => "/dubai-business-setup-blogs/" + article.slug
);

const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    "pages/**/*{.js,.mdx}",
    "!pages/_*.js",
    "!pages/api",
    "pages/**/[slug]",
  ]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace("pages", "")
                  .replace(".js", "")
                  .replace(".mdx", "");
                const route = path === "/index" ? "" : path;

                return `

                        <url>
                            <loc>${`https://jbz.vercel.app${route}`}</loc>
                        </url>
                    `;
              })
              .join("")}

              ${featuredata
                .map((page) => {
                  return `
                          <url>
                              <loc>${`https://jbz.vercel.app${page}`}</loc>
                          </url>
                      `;
                })
                .join("")}
                ${articleData
                  .map((page) => {
                    return `
                              <url>
                                  <loc>${`https://jbz.vercel.app${page}`}</loc>
                              </url>
                          `;
                  })
                  .join("")}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  fs.writeFileSync("public/sitemap.xml", formatted);
})();
