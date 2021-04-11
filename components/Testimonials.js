import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      {/* Testimonial Begin */}
      <section className="pt-120 pb-120 section-pattern l-gray testimon">
        <img src="/assets/img/circle.svg" className="stepSvg1" />
        <img src="/assets/img/circle.svg" className="heroSvg3" />
        <img src="/assets/img/filled circle.svg" className="heroSvg5" />
        <img src="/assets/img/cross.svg" className="heroSvg4" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h3>Testimonials</h3>
                <h2>What our clients say about us.</h2>
                <p>
                  Aspiring entrepreneurs entrust us with the responsibility of
                  business setup in Dubai and other govt related work. We strive
                  hard to make sure our clients are happy with the service and
                  results.
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
            data-interval="3000"
          >
            {/* Single Testimonial Begin */}
            <div className="carousel-inner">
              <div className="single-testimonial-slide carousel-item active">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    {/* Testimonial Image Begin */}
                    <div className="testimonial-image mb-50 mb-md-0">
                      <Image
                        src="/assets/img/testimonial/Saleem Khokhar-Peritus Software.JPG"
                        alt=""
                        height="391"
                        width="435"
                      />
                    </div>
                    {/* Testimonial Image End */}
                  </div>

                  <div className="col-md-7">
                    {/* Testimonial Content Begin */}
                    <div className="testimonial-content">
                      <p>
                        "Just Business helped us immensely in setting up our
                        business in Dubai. Right from incorporation,
                        registration and licensing to establishing your office
                        space. They have Strong commitment to high quality
                        professionalism, comprehensive capability across varied
                        segments of disciplines. I would highly recommend them
                        for all your business setup needs."
                      </p>
                      <h4>Saleem Khokhar</h4>
                      <span>Business Magnet</span>
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
                      <Image
                        src="/assets/img/testimonial/Zeeshan Gaffar Khan-Al Hayat Al Mudisha.jpeg"
                        alt=""
                        height="391"
                        width="435"
                      />
                    </div>
                    {/* Testimonial Image End */}
                  </div>

                  <div className="col-md-7">
                    {/* Testimonial Content Begin */}
                    <div className="testimonial-content">
                      <p>
                        "Highly satisfied with the experienced consultation for
                        business setup. The professionalism, honesty, knowledge,
                        experience, and most importantly the rates/charges are
                        transparent and affordable. Definitely recommend for PRO
                        services as well."
                      </p>

                      <h4>Zeeshan Gaffar Khan</h4>
                      <span>Al Hayat Al Mudisha</span>
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
                      <Image
                        src="/assets/img/testimonial/Usman Mehmood- Creations General Trading L.L.C.JPG"
                        alt=""
                        height="391"
                        width="435"
                      />
                    </div>
                    {/* Testimonial Image End */}
                  </div>

                  <div className="col-md-7">
                    {/* Testimonial Content Begin */}
                    <div className="testimonial-content">
                      <p>
                        "We have been using this Just Business company for some
                        years now and we have found both professionalism and
                        great service within this firm. We highly recommend them
                        to any individual or company who is looking to get their
                        business setup off on the right start. Thank you!"
                      </p>

                      <h4>Usman Mehmood</h4>
                      <span>Business Magnet</span>
                    </div>
                    {/* Testimonial Content End */}
                  </div>
                </div>
              </div>

              <div className="single-testimonial-slide carousel-item">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    {/* Testimonial Image Begin */}
                    <div className="testimonial-image mb-50 mb-md-0">
                      <Image
                        src="/assets/img/testimonial/Abdullah Madni- Nox Health General Trading L.L.C.JPG"
                        alt=""
                        height="391"
                        width="435"
                      />
                    </div>
                    {/* Testimonial Image End */}
                  </div>

                  <div className="col-md-7">
                    {/* Testimonial Content Begin */}
                    <div className="testimonial-content">
                      <p>
                        "Just Business Corporate Services conveyed us the permit
                        to operate that no other specialist had the option to do
                        as such. We are really thankful and have been on task
                        for as long as 4 years. Long may it proceed."
                      </p>
                      <h4>Abdullah Madni</h4>
                      <span>Nox Health General Trading</span>
                    </div>
                    {/* Testimonial Content End */}
                  </div>
                </div>
              </div>

              <div className="single-testimonial-slide carousel-item">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    {/* Testimonial Image Begin */}
                    <div className="testimonial-image mb-50 mb-md-0">
                      <Image
                        src="/assets/img/testimonial/Robert Reynolds-Mayfair Wrapping.jpg"
                        data-rjs="2"
                        alt=""
                        height="391"
                        width="435"
                      />
                    </div>
                    {/* Testimonial Image End */}
                  </div>

                  <div className="col-md-7">
                    {/* Testimonial Content Begin */}
                    <div className="testimonial-content">
                      <p>
                        "Just Business corporate services has helped me open up
                        my own business in difficult times through 2020.
                        Pranitha and her team are all brilliant and provide
                        excellent guidance and help with any of my company
                        needs. Really recommend their service."
                      </p>
                      <h4>Robert Reynolds</h4>
                      <span>Mayfair Wrapping Services</span>
                    </div>
                    {/* Testimonial Content End */}
                  </div>
                </div>
              </div>

              <div className="single-testimonial-slide carousel-item">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    {/* Testimonial Image Begin */}
                    <div className="testimonial-image mb-50 mb-md-0">
                      <Image
                        src="/assets/img/testimonial/Taimur Rehman-Dream Home Technical Services.jpeg"
                        alt=""
                        height="391"
                        width="435"
                      />
                    </div>
                    {/* Testimonial Image End */}
                  </div>

                  <div className="col-md-7">
                    {/* Testimonial Content Begin */}
                    <div className="testimonial-content">
                      <p>
                        "Just business has been professional & efficient with
                        everything they've done for my company. They understood
                        everything and got it done so smoothly and effortlessly,
                        all in a very short time period. It also helped knowing
                        that they've helped set up other well known companies.
                        Definitely a place I'd recommend to any start up. Very
                        happy with them!"
                      </p>

                      <h4>Taimur Rehman</h4>
                      <span>Business Magnet</span>
                    </div>
                    {/* Testimonial Content End */}
                  </div>
                </div>
              </div>
              <div className="single-testimonial-slide carousel-item">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    {/* Testimonial Image Begin */}
                    <div className="testimonial-image mb-50 mb-md-0">
                      <Image
                        src="/assets/img/testimonial/sonal.jpg"
                        alt=""
                        height="391"
                        width="435"
                      />
                    </div>
                    {/* Testimonial Image End */}
                  </div>

                  <div className="col-md-7">
                    {/* Testimonial Content Begin */}
                    <div className="testimonial-content">
                      <p>
                        I have 5 companies and wanted someone to take care of my
                        Government Related work. Could not find more
                        satisfactory people to take care of all my works. Great
                        Service!
                      </p>

                      <h4>Sonal Parag</h4>
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
                  viewBox="0 0 19 25"
                  aria-hidden="true"
                >
                  <path
                    // fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    opacity="1"
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
                  viewBox="0 0 19 25"
                  aria-hidden="true"
                >
                  <path
                    // fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    opacity="1"
                    d="M16.862,1.165 C16.511,0.808 15.958,0.808 15.606,1.165 C15.266,1.512 15.266,2.084 15.606,2.432 L21.977,8.903 L0.954,8.903 C0.463,8.903 0.061,9.300 0.061,9.795 C0.061,10.294 0.463,10.703 0.954,10.703 L21.977,10.703 L15.606,17.163 C15.266,17.518 15.266,18.097 15.606,18.439 C15.958,18.796 16.511,18.796 16.862,18.439 L24.741,10.435 C25.082,10.089 25.082,9.515 24.741,9.170 L16.862,1.165 Z"
                  ></path>
                </svg>
                <span className="sr-only">Next</span>
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
