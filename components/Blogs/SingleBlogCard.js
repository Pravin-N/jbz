import React from "react";
import Link from "next/link";

const SingleBlogCard = ({ article }) => {
  return (
    <>
      <div className="col-md-6">
        {/* Single Blog Item Begin */}
        <div className="single-blog-style--two position-relative">
          {/* Blog Bg Shape */}
          <div className="date-bg-shape position-absolute">
            <img
              src="assets/img/shapes/blog-date-shape.svg"
              className="svg"
              alt=""
            />
          </div>
          {/* End Blog Bg Shape */}
          <p className="posted-on position-absolute">18 Feb</p>
          {/* Blog Image Begin */}
          <div className="blog-image">
            <img src="assets/img/blog/blog-1.jpg" data-rjs="2" alt="" />
          </div>
          {/* Blog Image End */}

          {/* Blog Content Begin */}
          <div className="blog-content border">
            <p className="category">
              <a href="#">Corporate</a>
            </p>

            <h4 className="blog-title">
              <a href="#">How Can You Maximize Your Savings in the New Year</a>
            </h4>

            <ul className="post-meta list-inline">
              <li>
                Posted by: <a href="#">Admin</a>
              </li>
              <li>
                Comments: <span>05</span>
              </li>
            </ul>

            <p className="blog-excerpt">
              Rooms oh fully taken by worse do. To points afraid but may end law
              lasted was out laughter raptures .
            </p>
            <Link>
              <a href="#" className="btn-inline">
                Read More
              </a>
            </Link>
          </div>
          {/* Blog Content End */}
        </div>
        {/* Single Blog Item End */}
      </div>
    </>
  );
};

export default SingleBlogCard;
