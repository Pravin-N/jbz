import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// TODO: change the see more button link to the page about us.
const AboutHome = ({ img }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* About Begin */}
      <section className="pt-120 pb-120 section-pattern ov-hidden about">
        <div className="container about-cont">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Begin */}
              <div className="section-title">
                <h3>Why Choose Just Business?</h3>
                <h2>
                  10+ yrs of Experience of Business Setup in UAE, You're in Safe
                  hands
                </h2>
                <p>
                  Having helped 100's of entrepreneurs get the necessary
                  approvals and license to start their businesses, we have
                  extensive expertise in Business Setup in UAE.
                </p>
              </div>
              {/* Section Title End */}

              {/* About Tabs Begin */}
              <div className="about-nav-tab">
                {/* Nav Tabs Begin */}
                <ul
                  className="nav nav-tabs"
                  role="tablist"
                  aria-owns="mission-tab vision-tab"
                >
                  <li className="nav-items" role="presentation">
                    <a
                      id="mission-tab"
                      className="nav-link active"
                      data-toggle="tab"
                      href="#mission"
                      role="tab"
                      aria-selected="true"
                    >
                      Our Mission
                    </a>
                  </li>
                  <li className="nav-items" role="presentation">
                    <a
                      id="vision-tab"
                      className="nav-link"
                      data-toggle="tab"
                      href="#vision"
                      role="tab"
                      aria-selected="false"
                    >
                      Our Vision
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
                      For us our clients comes first. We adapt ourselves to the
                      needs of our clients. We tailor our service as per the
                      requirements laid out by our clients. We provide extensive
                      services that make working with us easy and simple for
                      you.
                    </p>
                    <ul className="list-unstyled list-check">
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i>{" "}
                        Service level that beats our competitors in the
                        industry.
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> One
                        stop shop for all Business Setup needs in UAE.
                      </li>
                    </ul>
                    <Link href="/dubai-business-setup-about-jbz">
                      <a className="btn" aria-label="About Us Link">
                        <span>ABOUT US</span>
                      </a>
                    </Link>
                  </div>
                  {/* Mission Tab End */}

                  {/* Vission Tab Begin */}
                  <div className="tab-pane fade" id="vision" role="tabpanel">
                    <p>
                      Our vision is to become best in the industry for business
                      setup services in UAE. With our growing experience we want
                      to provide our clients all the relevant and correct
                      information as quickly as possible.
                    </p>

                    <ul className="list-unstyled list-check">
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i>{" "}
                        Maintain service level of excellence that dwarfs others.
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> Make
                        the Business Setup process for entrepreneurs as simple
                        as possible.
                      </li>
                      {/* <li><i className="fa fa-check" aria-hidden="true"></i> Customer dossier</li> */}
                    </ul>
                    <Link href="/dubai-business-setup-about-jbz">
                      <a className="btn" aria-label="About Us Link">
                        <span>ABOUT US</span>
                      </a>
                    </Link>
                  </div>
                  {/* Vission Tab End */}
                </div>
                {/* Tab Contents End */}
              </div>
              {/* About Tabs End */}
            </div>
            <div className="col-lg-6 video-area mt-50 mt-lg-0">
              <Image
                src={img}
                data-rjs="2"
                alt="About just business mission and vision"
                height="805"
                width="1003"
                // loading="lazy"
              />
              {/* <ModalVideo
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
              </button> */}
            </div>
          </div>
        </div>
      </section>
      {/* About End */}
    </>
  );
};

export default AboutHome;
