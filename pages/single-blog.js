import React from "react";
import BlogContent from "../components/Blog/BlogContent";
import SideBar from "../components/SideBar";

const singleBlog = () => {
  return (
    <>
      {/* Page Title Begin TODO: use Page Header component*/}
      <section
        className="page-title-bg pt-250 pb-100"
        data-bg-img="assets/img/section-pattern/page-title.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Funds Institutional Portfolios</h2>
                <ul className="list-inline">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>Funds Institutional Portfolios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Title End */}

      {/* Blog Begin */}
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <BlogContent />
            <div className="col-lg-4">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
      {/* Blog End */}
    </>
  );
};

export default singleBlog;
