import React from "react";
import globby from "globby";

const EXTERNAL_DATA_URL = "https://jbz.vercel.app/posts";

const createSitemap = (posts, pages) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts
          .map(({ id }) => {
            return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
                    </url>
                `;
          })
          .join("")}
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
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const request = await fetch(EXTERNAL_DATA_URL);
    const posts = await request.json();
    const pages = await globby([
      "./pages/**/*{.js,.mdx}",
      "!./pages/_*.js",
      "!./pages/api",
      "!./pages/**/[slug]*{.js,.mdx}",
    ]);

    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(posts, pages));
    res.end();
  }
}

export default Sitemap;
