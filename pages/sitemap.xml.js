import React from "react";
import FeaturePostData from "../components/data";
import articles from "../components/articles";

const MAIN_URL = "https://jbz.ae";
const FEATURE_URL = "https://jbz.ae/business-setup";
const BLOG_URL = "https://jbz.ae/dubai-business-setup-blogs";

const createSitemap = (
  features,
  blogs,
  pages
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        const path = page
          .replace("pages", "")
          .replace(".js", "")
          .replace(".mdx", "");
        let route;
        console.log(path);
        if (path === "/index") {
          route = "";
        } else if (path === "/business-setup-pro-services/index") {
          route = "/business-setup-pro-services";
        } else if (path === "/dubai-business-setup-blogs/index") {
          route = "/dubai-business-setup-blogs";
        } else {
          route = path;
        }

        return `
                <url>
                    <loc>${`${MAIN_URL}${route}`}</loc>
                </url>
            `;
      })
      .join("")}
        ${features
          .map((slug) => {
            return `
                    <url>
                        <loc>${`${FEATURE_URL}/${slug}`}</loc>
                    </url>
                `;
          })
          .join("")}
          ${blogs
            .map((slug) => {
              return `
                      <url>
                          <loc>${`${BLOG_URL}/${slug}`}</loc>
                      </url>
                  `;
            })
            .join("")}
          
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const features = FeaturePostData.map((data) => {
      return data.slug;
    });
    const blogs = articles.map((data) => {
      data.slug;
    });

    // const request = await fetch(EXTERNAL_DATA_URL);
    // const posts = await request.json();
    const pages = [
      "/index",
      "/dubai-business-setup-about-jbz",
      "/business-setup-pro-services/business-center-dubai-service",
      "/business-setup-pro-services/business-setup-uae",
      "/business-setup-pro-services/corporate-bank-account-opening-service-dubai",
      "/business-setup-pro-services/index",
      "/business-setup-pro-services/pro-service",
      "/business-setup-pro-services/trademarks-patent-service",
      "/business-setup-pro-services/vat-registration-service",
      "/privacy-policy",
      "/contact",
      "/dubai-business-setup-blogs/index",
    ];
    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(features, blogs, pages));
    res.end();
  }
}

export default Sitemap;
