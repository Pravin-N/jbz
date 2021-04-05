import React from "react";
import Link from "next/link";
import { useState } from "react";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
      company,
      phone,
    };
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
        setSubmitted(true);
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setPhone("");
      }
    });
  };

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

                <for className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="theme-input-style"
                        placeholder="Your Name"
                        required
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="theme-input-style"
                        placeholder="Your Email"
                        required
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="company"
                        className="theme-input-style"
                        placeholder="Company Name"
                        onChange={(e) => {
                          setCompany(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        className="theme-input-style"
                        placeholder="Phone"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        className="theme-input-style"
                        required
                        placeholder="Your Message"
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn"
                        onClick={(e) => {
                          handleSubmit(e);
                        }}
                      >
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                  <div className="form-response"></div>
                </for>
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

export default contact;
