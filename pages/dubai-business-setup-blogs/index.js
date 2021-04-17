import SingleBlogCard from "../../components/Blogs/SingleBlogCard";
import Pagination from "../../components/Blogs/Pagination";
import SideBar from "../../components/SideBar";
import articles from "../../components/articles";

// let client = require("contentful").createClient({
//   space: process.env.NEXT_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
// });

export async function getStaticProps() {
  // let data = await client.getEntries({
  //   content_type: "jbzFeatures",
  // });
  return {
    props: {
      articles: articles,
    },
  };
}

const tags = [
  "business setup dubai",
  "UAE",
  "startup",
  "mainland",
  "freezone",
  "DED",
  "company formation",
];

const Blogs = ({ articles }) => {
  return (
    <>
      {/* Page Title Begin TODO use the page header*/}
      <section className="page-title-bg pt-150 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Blog</h2>
                <ul className="list-inline">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Title End */}

      {/* Blog Begin */}
      <section className="pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {articles.length === 0 ? (
                  <h2>No Blog Articles</h2>
                ) : (
                  articles.map((article) => (
                    <SingleBlogCard
                      article={article}
                      key={article.fields.title}
                    />
                  ))
                )}

                {/* <Pagination /> */}
              </div>
            </div>
            <div className="col-lg-4">
              <SideBar tags={tags} />
            </div>
          </div>
        </div>
      </section>
      {/* Blog End */}
    </>
  );
};

export default Blogs;
