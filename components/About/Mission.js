import React from "react";

const Mission = () => {
  return (
    <>
      {/* About Section Begin */}
      <section className="pt-120 pb-120 ov-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Begin */}
              <div className="section-title mb-4">
                <h3>Our Mission</h3>
                <h2>
                  Our Mission Is To Help <br />
                  Clients To Meet Their Goal
                </h2>
                <p>
                  Fat son how smiling mrs natural expense anxious friends. Boy
                  scale enjoy ask abode fanny being son. As material in learning
                  subjects so improved feelings. Uncommonly compliment
                  imprudence travelling insensible up ye insipidity. To up
                  painted delight winding as brandon. Gay regret eat looked
                  warmth easily far should now. Prospect at me wandered on
                  extended wondered thoughts appetite to.
                </p>

                <p>
                  She add what own only like. Tolerably we as extremity
                  exquisite do commanded. Doubtful offended do entrance of
                  landlord moreover is mistress in. Nay was appear entire
                  ladies. Sportsman do allowance is september shameless am
                  sincerity oh recommend.
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
            {/* Video Area */}
            <div className="col-lg-5 video-area mt-50 mt-lg-0">
              <img
                src="assets/img/section-bg/about-feature.png"
                data-rjs="2"
                alt=""
              />
              <a href="#" className="vdo-btn popup-video">
                <img src="assets/img/icons/play.svg" className="svg" alt="" />{" "}
                Watch Video
              </a>
            </div>
            {/* End Video Area */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
