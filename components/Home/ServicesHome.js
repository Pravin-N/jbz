import React from "react";

const ServicesHome = () => {
  return (
    <>
      {/* Service Begin */}
      <section
        className="pt-120 pb-120 section-pattern"
        data-bg-img="assets/img/section-pattern/service-pattern.png"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Begin */}
              <div className="section-title">
                <h3>Service</h3>
                <h2>
                  We’re Providing <br />
                  Best Solutions <br />
                  For Your Business
                </h2>
                <p>
                  We highest ye friends is exposed equally in. Ignorant had too
                  strictly followed. Astonished as travelling assistance or
                  unreserved oh pianoforte ye.
                </p>
              </div>
              {/* Section Title End */}

              {/* Button Begin */}
              <a href="#" className="btn">
                <span>view All</span>
              </a>
              {/* Button End */}
            </div>

            <div className="col-lg-6">
              <div className="row mt-40 mt-lg-0">
                <div className="col-sm-6 single-service-wrapper">
                  {/* Single Service Begin */}
                  <div className="single-service text-center">
                    {/* Icon Begin */}
                    <div className="icon">
                      <img
                        src="assets/img/icons/service-1.png"
                        data-rjs="2"
                        alt=""
                      />
                    </div>
                    {/* Icon End  */}

                    {/* Content Begin */}
                    <div className="content">
                      <h4>Financial Planning</h4>
                      <p>
                        Saved he do fruit woody of to. Met defective are
                        allowance two.
                      </p>
                      <a href="#" className="btn-inline">
                        Read More
                      </a>
                    </div>
                    {/* Content End */}
                  </div>
                  {/* Single Service End */}
                </div>
                <div className="col-sm-6 single-service-wrapper">
                  {/* Single Service Begin */}
                  <div className="single-service text-center">
                    {/* Icon Begin */}
                    <div className="icon">
                      <img
                        src="assets/img/icons/service-2.png"
                        data-rjs="2"
                        alt=""
                      />
                    </div>
                    {/* Icon End  */}

                    {/* Content Begin */}
                    <div className="content">
                      <h4>Advanced Analytics</h4>
                      <p>
                        {" "}
                        Simplicity the far admiration preference thing.Up home
                        head.
                      </p>
                      <a href="#" className="btn-inline">
                        Read More
                      </a>
                    </div>
                    {/* Content End */}
                  </div>
                  {/* Single Service End */}
                </div>
                <div className="col-sm-6 single-service-wrapper">
                  {/* Single Service Begin */}
                  <div className="single-service text-center">
                    {/* Icon Begin */}
                    <div className="icon">
                      <img
                        src="assets/img/icons/service-3.png"
                        data-rjs="2"
                        alt=""
                      />
                    </div>
                    {/* Icon End  */}

                    {/* Content Begin */}
                    <div className="content">
                      <h4>Market Research</h4>
                      <p>
                        Front no party young abode state up. Saved he do fruit
                        woody of to.
                      </p>
                      <a href="#" className="btn-inline">
                        Read More
                      </a>
                    </div>
                    {/* Content End */}
                  </div>
                  {/* Single Service End */}
                </div>
                <div className="col-sm-6 single-service-wrapper">
                  {/* Single Service Begin */}
                  <div className="single-service text-center">
                    {/* Icon Begin */}
                    <div className="icon">
                      <img
                        src="assets/img/icons/service-4.png"
                        data-rjs="2"
                        alt=""
                      />
                    </div>
                    {/* Icon End  */}

                    {/* Content Begin */}
                    <div className="content">
                      <h4>Business Campaign</h4>
                      <p>
                        He improve started no we manners however effects.
                        Prospect humoured.
                      </p>
                      <a href="#" className="btn-inline">
                        Read More
                      </a>
                    </div>
                    {/* Content End */}
                  </div>
                  {/* Single Service End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service End */}
    </>
  );
};

export default ServicesHome;
