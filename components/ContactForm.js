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
          setData({});
          submitForm();
        }
      });
    }
  }, [errors]);

  return (
    <>
      {/* Contact Info Begin */}
      <div className="col-lg-8">
        {/* Contact Form Begin */}
        <div className="contact-form-wrapper">
          <h3>Send Us a Message</h3>
          <p>
            One stop shop for all needs regarding Business Setup and PRO
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
                {errors.name && <p>{errors.name}</p>}
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
              </div>
              <div className="col-md-6">
                {errors.email && <p>{errors.email}</p>}
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
                {errors.message && <p>{errors.message}</p>}
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
      {/* Contact Info End */}
    </>
  );
};

export default ContactForm;
