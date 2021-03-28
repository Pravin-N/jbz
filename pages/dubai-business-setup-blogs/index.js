import React from "react";
import SingleBlogCard from "../../components/Blogs/SingleBlogCard";
import Pagination from "../../components/Blogs/Pagination";
import SideBar from "../../components/SideBar";

const Blogs = () => {
  return (
    <>
      {/* Page Title Begin TODO use the page header*/}
      <section
        className="page-title-bg pt-250 pb-100"
        data-bg-img="assets/img/section-pattern/page-title.png"
      >
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
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <SingleBlogCard />

                <Pagination />
              </div>
            </div>
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

export default Blogs;
