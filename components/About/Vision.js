import React from "react";

const Vision = () => {
  return (
    <>
      {/* About Section Begin */}
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="assets/img/about02.jpg"
                data-rjs="2"
                className="w-100"
                alt=""
              />
            </div>

            <div className="col-lg-6">
              {/* Section Title Begin */}
              <div className="section-title mb-4 mt-50 mt-lg-0">
                <h3>Our Vision</h3>
                <h2>
                  Our Vision Is To Provide <br />
                  Best Solution For Client
                </h2>
                <p>
                  Cordially convinced did incommode existence put out suffering
                  certainly. Besides another and saw ferrars limited ten say
                  unknown. On at tolerably depending do perceived. Luckily eat
                  joy see own shyness minuter.
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
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Planning &
                  executing projects
                </li>
              </ul>
              {/* About Feature List End */}
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
    </>
  );
};

export default Vision;
