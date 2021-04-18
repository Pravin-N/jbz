import glob from "glob";
import fs from "fs";
import { red } from "chalk";
import prettier from "prettier";
import prettierConfig from "./.prettierrc.js";

(() => {
  // default next js output is `out`
  // all the pages are guaranteed to be html
  glob("./out/**/*.html", (err, files) => {
    // If there's no files in the output, a build probably hasn't been run
    if (!files.length) {
      console.error(red("Could not find output directory"));
      process.exit(1);
    }

    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${files
              .map((page) => {
                const path = page.replace("./out", "").replace(".html", "");
                const route = path === "/index" ? "/" : path;

                return `
                        <url>
                            <loc>${`https://www.jbz.vercel.app${route}/`}</loc>
                            <changefreq>daily</changefreq>
                            <priority>0.7</priority>
                        </url>
                    `;
              })
              .join("\n")}
        </urlset>
    `;

    // Optional: you can remove this block if you aren't using prettier
    const formatted = prettier.format(sitemap, {
      ...prettierConfig,
      parser: "html",
    });

    fs.writeFileSync("./out/sitemap.xml", formatted);
  });
})();
