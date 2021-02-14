import React, { useEffect } from "react";

const Hero = () => {
  return (
    <>
      {/* Slider Begin */}
      <section
        className="banner section-pattern"
        data-bg-img="assets/img/section-pattern/slider-pattern.png"
      >
        {/* Banner Slider Begin */}
        <div
          id="carouselExampleControls"
          className="carousel slide banner-slider owl-carousel d-flex align-items-center justify-content-center"
          data-ride="carousel"
        >
          {/* Single Slide Begin */}
          <div className="carousel-inner">
            <div className="single-banner-slider carousel-item active">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    {/* Banner Content Begin */}
                    <div className="banner-content">
                      <h1>
                        We’re Driving <br />
                        <span>Customers</span> To <br />
                        Your Door
                      </h1>
                      <p>
                        Prospect humoured mistress to by proposal marianne
                        attended. Simplicity the far admiration preference
                        everything. Up help home head spot an he room in.
                      </p>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#appointmentModalForm"
                        className="banner-btn btn"
                      >
                        <span>Get Appointment</span>
                      </a>
                    </div>
                    {/* Banner Content End */}
                  </div>
                  <div className="col-lg-6">
                    {/* Banner Content Begin */}
                    <div className="banner-image mt-50 mt-lg-0 text-center text-lg-right">
                      <img
                        src="assets/img/banner/slider-1.png"
                        data-rjs="2"
                        alt=""
                      />
                    </div>
                    {/* Banner Content End */}
                  </div>
                </div>
              </div>
            </div>
            {/* Single Slide End */}

            {/* Single Slide Begin */}
            <div className="single-banner-slider carousel-item">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    {/* Banner Content Begin */}
                    <div className="banner-content">
                      <h1>
                        Our <span>Business</span> <br />
                        Is Your Business
                      </h1>
                      <p>
                        Tolerably we as extremity exquisite do commanded.
                        Doubtful offended do entrance of landlord moreover is
                        mistress in. Nay was appear entire ladies.
                      </p>
                      <a href="#" className="banner-btn btn">
                        <span>Get Appointment</span>
                      </a>
                    </div>
                    {/* Banner Content End */}
                  </div>
                  <div className="col-lg-6">
                    {/* Banner Content Begin */}
                    <div className="banner-image mt-50 mt-lg-0 text-center text-lg-right">
                      <img
                        src="assets/img/banner/slider-2.png"
                        data-rjs="2"
                        alt=""
                      />
                    </div>
                    {/* Banner Content End */}
                  </div>
                </div>
              </div>
            </div>
            {/* Single Slide End */}
          </div>
          <button
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
        {/* Banner Slider End */}
      </section>
      {/* Slider End */}
    </>
  );
};

export default Hero;
