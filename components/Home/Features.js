import React from "react";

const Features = () => {
  return (
    <>
      {/* Feature Begin */}
      <section
        className="pt-120 pb-90 section-pattern"
        data-bg-img="assets/img/section-pattern/feature-pattern.png"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              {/* Single Feature Begin */}
              <div className="single-feature text-center">
                {/* Feature Image Begin */}
                <div className="image">
                  <img
                    src="assets/img/feature/feature-1.png"
                    data-rjs="2"
                    alt=""
                  />
                </div>
                {/* Feature Image End */}

                {/* Feature Content Begin */}
                <div className="content">
                  <h3>Best Consulting</h3>
                  <p>Concerns greatest margaret him absolute entrance nay.</p>
                </div>
                {/* Feature Content End */}
              </div>
              {/* Single Feature End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Single Feature Begin */}
              <div className="single-feature text-center">
                {/* Feature Image Begin */}
                <div className="image">
                  <img
                    src="assets/img/feature/feature-2.png"
                    data-rjs="2"
                    alt=""
                  />
                </div>
                {/* Feature Image End */}

                {/* Feature Content Begin */}
                <div className="content">
                  <h3>Market Research</h3>
                  <p>Concerns greatest margaret him absolute entrance nay.</p>
                </div>
                {/* Feature Content End */}
              </div>
              {/* Single Feature End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Single Feature Begin */}
              <div className="single-feature text-center">
                {/* Feature Image Begin */}
                <div className="image">
                  <img
                    src="assets/img/feature/feature-3.png"
                    data-rjs="2"
                    alt=""
                  />
                </div>
                {/* Feature Image End */}

                {/* Feature Content Begin */}
                <div className="content">
                  <h3>Market Growth</h3>
                  <p>Concerns greatest margaret him absolute entrance nay.</p>
                </div>
                {/* Feature Content End */}
              </div>
              {/* Single Feature End */}
            </div>
          </div>
        </div>
      </section>
      {/* Feature End */}
    </>
  );
};

export default Features;
