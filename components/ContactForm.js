import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Validate from "./ValidateInfo";

const ContactForm = ({ submitForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState({});

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sending");
    let input = {
      name,
      email,
      message,
      company,
      phone,
    };
    setData(input);
    setErrors(Validate(input));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setName("");
          setEmail("");
          setCompany("");
          setMessage("");
          setPhone("");
          setData({})
          submitForm();
        }
      });
    }
  }, [errors]);

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
      <section className="pt-120 pb-120">
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
                        <a href="mailto:faisal@jbz.ae">faisal@jbz.ae</a>
                        <a href="mailto:pranitha@jbz.ae">pranitha@jbz.ae</a>
                        <a href="mailto:info@jbz.ae">info@jbz.ae</a>
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
                <h3>Send Us a Message</h3>
                <p>
                  One stop shop for all needs regarding business setup and pro
                  services in Dubai, UAE.
                </p>

                <form
                  className="contact-form"
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="theme-input-style"
                        placeholder="Your Name"
                        value={name}
                        required
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                      {errors.name && <p>{errors.name}</p>}
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="theme-input-style"
                        placeholder="Your Email"
                        value={email}
                        required
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    {errors.email && <p>{errors.email}</p>}

                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        className="theme-input-style"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="company"
                        className="theme-input-style"
                        placeholder="Company Name"
                        value={company}
                        onChange={(e) => {
                          setCompany(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        className="theme-input-style"
                        required
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                      ></textarea>
                      {errors.message && <p>{errors.message}</p>}
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
    </>
  );
};

export default ContactForm;
