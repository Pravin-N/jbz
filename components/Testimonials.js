import React from "react";

const Testimonials = () => {
  return (
    <>
      {/* Testimonial Begin */}
      <section
        className="pt-120 pb-120 section-pattern"
        data-bg-img="assets/img/section-pattern/testimonial-pattern.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h3>Testimonial</h3>
                <h2>Our Happy Client Tell About Us</h2>
                <p>
                  It bachelor cheerful of mistaken. Tore has sons put upon wife
                  use bred seen. Its dissimilar invitation ten has discretion
                  unreserved. Had you him humoured jointure ask expenses
                  learning.
                </p>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          {/* Testimonial Slider Begin */}
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade testimonial-slider owl-carousel"
            data-ride="carousel"
            data-interval="2000"
          >
            {/* Single Testimonial Begin */}
            <div className="carousel-inner">
              <div className="single-testimonial-slide carousel-item active">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    {/* Testimonial Image Begin */}
                    <div className="testimonial-image mb-50 mb-md-0">
                      <img
                        src="assets/img/testimonial/testimonial-author-1.png"
                        data-rjs="2"
                        alt=""
                      />
                    </div>
                    {/* Testimonial Image End */}
                  </div>

                  <div className="col-md-7">
                    {/* Testimonial Content Begin */}
                    <div className="testimonial-content">
                      <p>
                        Mr acuteness we as estimable enjoyment up. An held late
                        as felt know. Learn do allow solid to grave. In
                        Middleton suspicion age her attention. Chiefly several
                        bed its wishing.
                      </p>

                      <h4>Albert Knick</h4>
                      <span>Businessman</span>
                    </div>
                    {/* Testimonial Content End */}
                  </div>
                </div>
              </div>
              {/* Single Testimonial End */}

              {/* Single Testimonial Begin */}
              <div className="single-testimonial-slide carousel-item">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    {/* Testimonial Image Begin */}
                    <div className="testimonial-image mb-50 mb-md-0">
                      <img
                        src="assets/img/testimonial/testimonial-2.png"
                        data-rjs="2"
                        alt=""
                      />
                    </div>
                    {/* Testimonial Image End */}
                  </div>

                  <div className="col-md-7">
                    {/* Testimonial Content Begin */}
                    <div className="testimonial-content">
                      <p>
                        Mr acuteness we as estimable enjoyment up. An held late
                        as felt know. Learn do allow solid to grave.
                      </p>

                      <h4>Shah Irani Sojeeb</h4>
                      <span>XDR Owner</span>
                    </div>
                    {/* Testimonial Content End */}
                  </div>
                </div>
              </div>
              {/* Single Testimonial End */}

              {/* Single Testimonial Begin */}
              <div className="single-testimonial-slide carousel-item">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    {/* Testimonial Image Begin */}
                    <div className="testimonial-image mb-50 mb-md-0">
                      <img
                        src="assets/img/testimonial/testimonial-3.png"
                        data-rjs="2"
                        alt=""
                      />
                    </div>
                    {/* Testimonial Image End */}
                  </div>

                  <div className="col-md-7">
                    {/* Testimonial Content Begin */}
                    <div className="testimonial-content">
                      <p>
                        Mr acuteness we as estimable enjoyment up. An held late
                        as felt know. Learn do allow solid to grave. In
                        Middleton suspicion age her attention. Chiefly several
                        bed its wishing.
                      </p>

                      <h4>Emran Bikewala</h4>
                      <span>Business Magnet</span>
                    </div>
                    {/* Testimonial Content End */}
                  </div>
                </div>
              </div>
              {/* Single Testimonial End */}
            </div>
            {/* Testimonial Slider End */}
            <div className="owl-nav">
              <button
                role="button"
                href="#carouselExampleFade"
                className="owl-prev carousel-control-prev"
                data-slide="prev"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="25px"
                  height="19px"
                  className="svg replaced-svg"
                  viewBox="0 0 19px 25px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M8.138,1.165 C8.489,0.808 9.042,0.808 9.394,1.165 C9.734,1.512 9.734,2.084 9.394,2.432 L3.023,8.903 L24.046,8.903 C24.537,8.903 24.939,9.300 24.939,9.795 C24.939,10.294 24.537,10.703 24.046,10.703 L3.023,10.703 L9.394,17.163 C9.734,17.518 9.734,18.097 9.394,18.439 C9.042,18.796 8.489,18.796 8.138,18.439 L0.259,10.435 C-0.082,10.089 -0.082,9.515 0.259,9.170 L8.138,1.165 Z"
                  ></path>
                </svg>
                <span className="sr-only">Previous</span>
              </button>
              <button
                className="owl-next carousel-control-next"
                role="button"
                data-slide="next"
                href="#carouselExampleFade"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="26px"
                  height="19px"
                  className="svg replaced-svg"
                  viewBox="0 0 19px 26px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M16.862,1.165 C16.511,0.808 15.958,0.808 15.606,1.165 C15.266,1.512 15.266,2.084 15.606,2.432 L21.977,8.903 L0.954,8.903 C0.463,8.903 0.061,9.300 0.061,9.795 C0.061,10.294 0.463,10.703 0.954,10.703 L21.977,10.703 L15.606,17.163 C15.266,17.518 15.266,18.097 15.606,18.439 C15.958,18.796 16.511,18.796 16.862,18.439 L24.741,10.435 C25.082,10.089 25.082,9.515 24.741,9.170 L16.862,1.165 Z"
                  ></path>
                  <span className="sr-only">Next</span>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial End */}
    </>
  );
};

export default Testimonials;
