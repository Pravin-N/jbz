import React from "react";
import glob from "glob";

const EXTERNAL_DATA_URL = "https://jbz.vercel.app/posts";

const createSitemap = (posts, pages) => `<?xml version="1.0" encoding="UTF-8"?>
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
    const pages = await glob("./**/*.html", (err, files) => {
      // If there's no files in the output, a build probably hasn't been run
      if (!files.length) {
        console.error(red("Could not find output directory"));
        process.exit(1);
      }
      return files;
    });
    console.log(pages);
    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(posts, pages));
    res.end();
  }
}

export default Sitemap;
