import React from "react";

const OfferExplain = () => {
  return (
    <>
      {/* Service Section Begin */}
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Begin */}
              <div className="section-title mb-4">
                <h3>What we offer</h3>
                <h2>
                  Wide Range of Result Oriented Leadership Support Services
                </h2>
                <p>
                  Enjoyed minutes related on .fanny dried as often me. Goodness
                  as reserved raptures to mistaken steepest oh he. Gravity he mr
                  sixteen esteems. Mile home new way with high said. Finished
                  horrible blessing landlord dwelling dissuade if. Rent fond am
                  he in on read. Anxious cordial demands settled entered in do
                  to colonel landlord dwelling dissuade.{" "}
                </p>
              </div>
              {/* Section Title End */}

              {/* About Feature List Begin */}
              <ul className="list-unstyled list-check">
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Become
                  successful & superior
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Provide
                  quick & good solution for business
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Use
                  opportunities to boost sales
                </li>
              </ul>
              {/* About Feature List End */}
            </div>
            <div className="col-lg-6 mt-50 mt-lg-0">
              <img src="assets/img/serviec-1.jpg" data-rjs="2" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
    </>
  );
};

export default OfferExplain;
