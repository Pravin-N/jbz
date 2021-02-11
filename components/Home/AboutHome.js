import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const AboutHome = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* About Begin */}
      <section
        className="pt-120 pb-120 section-pattern ov-hidden"
        data-bg-img="assets/img/section-pattern/about-pattern.png"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Begin */}
              <div className="section-title">
                <h3>About Agency</h3>
                <h2>
                  We’re Expertise & <br />
                  Strategic Agency To Take <br />
                  Care Of Your Business
                </h2>
                <p>
                  Met defective are allowance two perceived listening consulted
                  contained. It chicken oh colonel pressed excited suppose to
                  shortly.
                </p>
              </div>
              {/* Section Title End */}

              {/* About Tabs Begin */}
              <div className="about-nav-tab">
                {/* Nav Tabs Begin */}
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-items">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#mission"
                      role="tab"
                      aria-selected="true"
                    >
                      Our Mission
                    </a>
                  </li>
                  <li className="nav-items">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#vission"
                      role="tab"
                      aria-selected="false"
                    >
                      Our Vission
                    </a>
                  </li>
                </ul>
                {/* Nav Tabs End */}

                {/* Tab Contents Begin */}
                <div className="tab-content">
                  {/* Mission Tab Begin */}
                  <div
                    className="tab-pane fade show active"
                    id="mission"
                    role="tabpanel"
                  >
                    <p>
                      Surprise not wandered speedily husbands although yet end.
                      Are court tiled cease young built fat one man taken. We
                      highest ye friends is exposed equally in. Ignorant had too
                      strictly followed.
                    </p>

                    <ul className="list-unstyled list-check">
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i>{" "}
                        Become successful & superior
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i>{" "}
                        Provide quick & good solution for business
                      </li>
                    </ul>

                    <a href="#" className="btn">
                      <span>SEE MORE</span>
                    </a>
                  </div>
                  {/* Mission Tab End */}

                  {/* Vission Tab Begin */}
                  <div className="tab-pane fade" id="vission" role="tabpanel">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters.
                    </p>

                    <ul className="list-unstyled list-check">
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i>{" "}
                        Become successful & superior
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i>{" "}
                        Provide quick & good solution for business
                      </li>
                      {/* <li><i className="fa fa-check" aria-hidden="true"></i> Customer dossier</li> */}
                    </ul>

                    <a href="#" className="btn">
                      <span>SEE MORE</span>
                    </a>
                  </div>
                  {/* Vission Tab End */}
                </div>
                {/* Tab Contents End */}
              </div>
              {/* About Tabs End */}
            </div>
            <div className="col-lg-5 video-area mt-50 mt-lg-0">
              <img
                src="assets/img/section-bg/about-feature.png"
                data-rjs="2"
                alt=""
              />
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="ctvlUvN6wSE"
                onClose={() => setOpen(false)}
              />
              <button
                // href="https://www.youtube.com/watch?v=ctvlUvN6wSE"
                className="vdo-btn popup-video"
                onClick={() => setOpen(true)}
              >
                <img src="assets/img/icons/play.svg" className="svg" alt="" />{" "}
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* About End */}
    </>
  );
};

export default AboutHome;
