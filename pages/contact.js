import React from "react";

const contact = () => {
  return (
    <>
      {/* Page Title Begin TODO: Change the header section.*/}
      <section
        className="page-title-bg pt-250 pb-100"
        data-bg-img="assets/img/section-pattern/page-title.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Contact Us</h2>
                <ul className="list-inline">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Title End */}

      {/* Contact Info Begin */}
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* Contact Info Begin */}
              <div className="contact-info">
                <h3>Contact Info</h3>
                <p>
                  Continue new you declared differed learning bringing honoured.
                </p>

                <div className="row">
                  {/* Single Contact Info */}
                  <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                    <div className="image">
                      <img
                        src="assets/img/icons/location.svg"
                        className="svg"
                        alt=""
                      />
                    </div>
                    <div className="media-body">
                      <h4>Office Location</h4>
                      <p>
                        173 Collins Street West victoria, Melbourne, Australia
                      </p>
                    </div>
                  </div>
                  {/* End Single Contact Info */}

                  {/* Single Contact Info */}
                  <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                    <div className="image">
                      <img
                        src="assets/img/icons/phone.svg"
                        className="svg"
                        alt=""
                      />
                    </div>
                    <div className="media-body">
                      <h4>Business Phone</h4>
                      <p>
                        <a href="#">+0096665431</a> <a href="#">+0096667331</a>
                      </p>
                    </div>
                  </div>
                  {/* End Single Contact Info */}

                  {/* Single Contact Info */}
                  <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                    <div className="image">
                      <img
                        src="assets/img/icons/email.svg"
                        className="svg"
                        alt=""
                      />
                    </div>
                    <div className="media-body">
                      <h4>Business Email</h4>
                      <p>
                        <a href="#">bizidea@info.com</a>
                        <a href="#">bizidea@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  {/* End Single Contact Info */}

                  {/* Single Contact Info */}
                  <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                    <div className="image">
                      <img
                        src="assets/img/icons/email.svg"
                        className="svg"
                        alt=""
                      />
                    </div>
                    <div className="media-body">
                      <h4>Office Hours</h4>
                      <p>
                        Monday - Friday <br />
                        8:30 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                  {/* End Single Contact Info */}
                </div>
              </div>
              {/* Contact Info End */}
            </div>

            <div className="col-lg-8">
              {/* Contact Form Begin */}
              <div className="contact-form-wrapper">
                <h3>Send Us Message</h3>
                <p>
                  Our believe has request not how comfort evident. Up delight
                  cousins we feeling minutes. Genius has looked end piqued
                  spring. Down has rose feel find man.
                </p>

                <form
                  method="POST"
                  action="sendmail.php"
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="theme-input-style"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="theme-input-style"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="company"
                        className="theme-input-style"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        className="theme-input-style"
                        placeholder="Phone"
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        className="theme-input-style"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn">
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                  <div className="form-response"></div>
                </form>
              </div>
              {/* Contact Form End */}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info End */}

      {/* Start Map */}
      <div
        className="map"
        data-trigger="map"
        data-map-options='{"latitude": "40.6785635", "longitude": "-73.9664109", "zoom": "11"}'
      ></div>
      {/* End Map */}
    </>
  );
};

export default contact;
