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
            className="testimonial-slider owl-carousel"
            data-owl-nav="true"
            data-owl-autoplay="false"
            data-owl-animate-out="fadeOut"
            data-owl-animate-in="fadeIn"
            data-owl-margin="3"
          >
            {/* Single Testimonial Begin */}
            <div className="single-testimonial-slide">
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
                      Mr acuteness we as estimable enjoyment up. An held late as
                      felt know. Learn do allow solid to grave. In Middleton
                      suspicion age her attention. Chiefly several bed its
                      wishing.
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
            <div className="single-testimonial-slide">
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
                      Mr acuteness we as estimable enjoyment up. An held late as
                      felt know. Learn do allow solid to grave. In Middleton
                      suspicion age her attention. Chiefly several bed its
                      wishing.
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
            <div className="single-testimonial-slide">
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
                      Mr acuteness we as estimable enjoyment up. An held late as
                      felt know. Learn do allow solid to grave. In Middleton
                      suspicion age her attention. Chiefly several bed its
                      wishing.
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
        </div>
      </section>
      {/* Testimonial End */}
    </>
  );
};

export default Testimonials;
