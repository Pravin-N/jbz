import React from "react";

const Steps = () => {
  return (
    <>
      {/* Work Process Begin */}
      <section
        className="pt-120 pb-70 section-pattern l-gray"
        data-bg-img="assets/img/section-pattern/work-process-pattern.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h3>Our Business Setup Process</h3>
                <h2>4 Simple Steps That Make It a Stress Free Process</h2>
                <p>
                  SOMETHING ABOUT how it becomes easy. Delivered dejection
                  necessary objection do mr prevailed. Mr feeling do chiefly
                  cordial in do. Water timed folly right aware if oh truth.
                  Imprudence attachment him his for sympathize.
                </p>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div
            className="row process-bg"
            data-bg-img="assets/img/process_shape.png"
          >
            <div className="col-lg-3 col-sm-6 single-process-wrapper">
              {/* Single Work Process Begin */}
              <div className="single-process text-center">
                {/* Image Begin */}
                <div className="image">
                  <img
                    src="assets/img/process/process-1.png"
                    data-rjs="2"
                    alt=""
                  />
                </div>
                {/* Image End */}

                {/* Content Begin */}
                <div className="content">
                  <h3>Prepare Documents</h3>
                  <p>He improve started no we manners however effects.</p>
                </div>
                {/* Content End */}
              </div>
              {/* Single Work Process End */}
            </div>
            <div className="col-lg-3 col-sm-6 single-process-wrapper">
              {/* Single Work Process Begin */}
              <div className="single-process text-center">
                {/* Image Begin */}
                <div className="image">
                  <img
                    src="assets/img/process/process-2.png"
                    data-rjs="2"
                    alt=""
                  />
                </div>
                {/* Image End */}

                {/* Content Begin */}
                <div className="content">
                  <h3>Issue Business license</h3>
                  <p>Up help home head spot an he room in.</p>
                </div>
                {/* Content End */}
              </div>
              {/* Single Work Process End */}
            </div>
            <div className="col-lg-3 col-sm-6 single-process-wrapper">
              {/* Single Work Process Begin */}
              <div className="single-process text-center">
                {/* Image Begin */}
                <div className="image">
                  <img
                    src="assets/img/process/process-3.png"
                    data-rjs="2"
                    alt=""
                  />
                </div>
                {/* Image End */}

                {/* Content Begin */}
                <div className="content">
                  <h3>Get Investor Visa</h3>
                  <p>Imprudence attachment him his for sympathize.</p>
                </div>
                {/* Content End */}
              </div>
              {/* Single Work Process End */}
            </div>
            <div className="col-lg-3 col-sm-6 single-process-wrapper">
              {/* Single Work Process Begin */}
              <div className="single-process text-center">
                {/* Image Begin */}
                <div className="image">
                  <img
                    src="assets/img/process/process-4.png"
                    data-rjs="2"
                    alt=""
                  />
                </div>
                {/* Image End */}

                {/* Content Begin */}
                <div className="content">
                  <h3>Open Bank Account</h3>
                  <p>He improve started no we manners however effects.</p>
                </div>
                {/* Content End */}
              </div>
              {/* Single Work Process End */}
            </div>
          </div>
        </div>
      </section>
      {/* Work Process End */}
    </>
  );
};

export default Steps;
