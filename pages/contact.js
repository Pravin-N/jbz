import { useState } from "react";
import ContactForm from "../components/ContactForm";
import FormSuccess from "../components/FormSuccess";
import Link from "next/link";
import Meta from "../components/Layout/Meta";

const contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const metaData = {
    title:
      "Contact Us | Just Business - Helping clients to setup businesses in Dubai, UAE with ease",
    description:
      "Contact our Company Formation Specialists and Business setup Experts today to know more about setting up your company in the UAE. Call us at +971 55 757 2069, +971 55 778 0398",
    keywords:
      "Contact Just Business, Contact us for UAE Business Setup, Contact us for Dubai Business Setup, Assistance with your business licensing, Assistance with business visa requirements",
    website: "https://jbz.ae",
  };

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <Meta
        title={metaData.title}
        description={metaData.description}
        keywords={metaData.keywords}
        website={metaData.website}
      />
      {/* Page Title Begin TODO: Change the header section.*/}
      <section className="page-title-bg pt-150 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Contact Us</h2>
                <ul className="list-inline">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
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
      <section className="pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* Contact Info Begin */}
              <div className="contact-info">
                <h3>Contact Info</h3>
                <p>Get in touch for a free consultation today.</p>

                <div className="row">
                  {/* Single Contact Info */}
                  <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                    <div className="image">
                      <img
                        src="assets/img/icons/location.svg"
                        className="svg"
                        alt="location icon"
                      />
                    </div>
                    <div className="media-body">
                      <h4>Office Location</h4>
                      <p>103, Al Makhawi Building, Oud Metha, Dubai, UAE</p>
                    </div>
                  </div>
                  {/* End Single Contact Info */}

                  {/* Single Contact Info */}
                  <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                    <div className="image">
                      <img
                        src="assets/img/icons/phone.svg"
                        className="svg"
                        alt="phone icon"
                      />
                    </div>
                    <div className="media-body">
                      <h4>Call Us On</h4>
                      <p>
                        <a href="tel:+971557572069">+971 55 757 2069</a>{" "}
                        <a href="tel:+971557780398">+971 55 778 0398</a>
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
                        alt="email icon"
                      />
                    </div>
                    <div className="media-body">
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:info@jbz.ae">info@jbz.ae</a>
                        <a href="mailto:faisal@jbz.ae">faisal@jbz.ae</a>
                        <a href="mailto:pranitha@jbz.ae">pranitha@jbz.ae</a>
                      </p>
                    </div>
                  </div>
                  {/* End Single Contact Info */}
                </div>
              </div>
              {/* Contact Info End */}
            </div>

            {!isSubmitted ? (
              <ContactForm submitForm={submitForm} />
            ) : (
              // <FormSuccess />
              ""
            )}
          </div>
        </div>
      </section>
      <section className="section-maps">
        <div className=" map">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            style={{
              border: 0,
            }}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJFSMjeB9dXz4RbOFj8-OI9fI&key=AIzaSyAYfJDUC2lPuVm1VXRlxua6Fl6gPiYaquE"
          ></iframe>
        </div>
      </section>
      {/* Contact Info End */}
    </>
  );
};

export default contact;
