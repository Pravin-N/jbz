import React from "react";

const BlogHome = () => {
  return (
    <>
      {/* Blog Begin */}
      <section
        className="pt-120 pb-120 section-pattern"
        id="l-gray"
        data-bg-img="assets/img/section-pattern/blog-pattern.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h3>Blogs</h3>
                <h2>Our Latest News On Business</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida risus commodo viverra
                  .
                </p>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              {/* Blog Slider Begin */}
              <div
                className="blog-slider owl-carousel custom-owl dots-horizontal"
                data-owl-items="2"
                data-owl-margin="30"
                data-owl-dots="true"
                data-owl-responsive='{"0": {"items": "1"},"992": {"items": "2"}}'
              >
                {/* Single Blog Item Begin */}
                <div className="single-blog-item position-relative">
                  {/* Blog Bg Shape */}
                  <div className="date-bg-shape position-absolute">
                    <img
                      src="assets/img/shapes/blog-date-shape.svg"
                      className="svg"
                      alt=""
                    />
                  </div>
                  {/* End Blog Bg Shape */}

                  {/* Blog Content Begin */}
                  <div className="blog-content">
                    <p className="posted-on">18 Feb</p>
                    <p className="category">Corporate</p>

                    <h3 className="blog-title">
                      How Can You Maximize Your Savings in the New Year
                    </h3>

                    <p className="blog-excerpt">
                      Rooms oh fully taken by worse do. To points afraid but may
                      end law lasted was out laughter raptures. Improved own
                      provided blessing may peculiar domestic.
                    </p>
                  </div>
                  {/* Blog Content End */}

                  {/* Blog Hover Begin */}
                  <div
                    className="blog-hover text-center text-white position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-overlay"
                    data-bg-img="assets/img/blog/blog-1.jpg"
                  >
                    <h3 className="blog-title">
                      <a href="#">
                        How Can You Maximize Your Savings in the New Year
                      </a>
                    </h3>
                  </div>
                  {/* Blog Hover End */}

                  {/* Blog Button Begin */}
                  <div
                    className="blog-button position-absolute w-100 d-flex align-items-center justify-content-center"
                    data-bg-img=""
                  >
                    <img
                      src="assets/img/shapes/blog-shape.svg"
                      className="svg"
                      alt=""
                    />
                    <a href="#" className="btn-inline">
                      Read More
                    </a>
                  </div>
                  {/* Blog Button End */}
                </div>
                {/* Single Blog Item End */}

                {/* Single Blog Item Begin */}
                <div className="single-blog-item position-relative">
                  {/* Blog Bg Shape */}
                  <div className="date-bg-shape position-absolute">
                    <img
                      src="assets/img/shapes/blog-date-shape.svg"
                      className="svg"
                      alt=""
                    />
                  </div>
                  {/* End Blog Bg Shape */}

                  {/* Blog Content Begin */}
                  <div className="blog-content">
                    <p className="posted-on">18 Feb</p>
                    <p className="category">Corporate</p>

                    <h3 className="blog-title">
                      Funds in Institutional Portfolios: Florida Retirement
                      System
                    </h3>

                    <p className="blog-excerpt">
                      Rooms oh fully taken by worse do. To points afraid but may
                      end law lasted was out laughter raptures. Improved own
                      provided blessing may peculiar domestic.
                    </p>
                  </div>
                  {/* Blog Content End */}

                  {/* Blog Hover Begin */}
                  <div
                    className="blog-hover text-center text-white position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-overlay"
                    data-bg-img="assets/img/blog/blog-2.jpg"
                  >
                    <h3 className="blog-title">
                      <a href="#">
                        Funds in Institutional Portfolios: Florida Retirement
                        System
                      </a>
                    </h3>
                  </div>
                  {/* Blog Hover End */}

                  {/* Blog Button Begin */}
                  <div
                    className="blog-button position-absolute w-100 d-flex align-items-center justify-content-center"
                    data-bg-img=""
                  >
                    <img
                      src="assets/img/shapes/blog-shape.svg"
                      className="svg"
                      alt=""
                    />
                    <a href="#" className="btn-inline">
                      Read More
                    </a>
                  </div>
                  {/* Blog Button End */}
                </div>
                {/* Single Blog Item End */}

                {/* Single Blog Item Begin */}
                <div className="single-blog-item position-relative">
                  {/* Blog Bg Shape */}
                  <div className="date-bg-shape position-absolute">
                    <img
                      src="assets/img/shapes/blog-date-shape.svg"
                      className="svg"
                      alt=""
                    />
                  </div>
                  {/* End Blog Bg Shape */}

                  {/* Blog Content Begin */}
                  <div className="blog-content">
                    <p className="posted-on">18 Feb</p>
                    <p className="category">Corporate</p>

                    <h3 className="blog-title">
                      How Can You Maximize Your Savings in the New Year
                    </h3>

                    <p className="blog-excerpt">
                      Rooms oh fully taken by worse do. To points afraid but may
                      end law lasted was out laughter raptures. Improved own
                      provided blessing may peculiar domestic.
                    </p>
                  </div>
                  {/* Blog Content End */}

                  {/* Blog Hover Begin */}
                  <div
                    className="blog-hover text-center text-white position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-overlay"
                    data-bg-img="assets/img/blog/blog-3.jpg"
                  >
                    <h3 className="blog-title">
                      <a href="#">
                        Funds in Institutional Portfolios: Florida Retirement
                        System
                      </a>
                    </h3>
                  </div>
                  {/* Blog Hover End */}

                  {/* Blog Button Begin */}
                  <div
                    className="blog-button position-absolute w-100 d-flex align-items-center justify-content-center"
                    data-bg-img=""
                  >
                    <img
                      src="assets/img/shapes/blog-shape.svg"
                      className="svg"
                      alt=""
                    />
                    <a href="#" className="btn-inline">
                      Read More
                    </a>
                  </div>
                  {/* Blog Button End */}
                </div>
                {/* Single Blog Item End */}
              </div>
              {/* Blog Slider End */}
            </div>
          </div>
        </div>
      </section>
      {/* Blog End */}
    </>
  );
};

export default BlogHome;
