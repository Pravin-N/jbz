import React from "react";
import fs from "fs";
import globby from "globby";

const EXTERNAL_DATA_URL = "https://jbz.vercel.app/posts";

const pages = globby(["pages/**/*{.js,.mdx}", "!pages/_*.js", "!pages/api"]);

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
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
                    <loc>${`https://yoursitehere.com${route}`}</loc>
                </url>
            `;
      })
      .join("")}
        ${posts
          .map(({ id }) => {
            return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
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

    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(posts));
    res.end();
  }
}

export default Sitemap;
