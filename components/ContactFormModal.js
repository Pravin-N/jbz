import React from "react";
import { useState, useEffect } from "react";
import Validate from "./ValidateInfo";

const ContactFormModal = ({ submitForm }) => {
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
      {/* Appointment Form Begin */}
      <form
        className="appointment-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2 className="form-title">Get a Free Quote</h2>
        <input
          className="theme-input-style"
          type="text"
          name="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          className="theme-input-style"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          className="theme-input-style"
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          className="theme-input-style"
          type="text"
          name="company"
          placeholder="Company Name"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />

        {/* <select className="theme-input-style clearfix">
                      <option value="" disabled="" defaultValue="">
                        Select purpose
                      </option>
                      <option value="01">Business Setup</option>
                      <option value="01">PRO Services</option>
                      <option value="01">Other</option>
                    </select> */}

        <textarea
          className="theme-input-style"
          placeholder="Message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        ></textarea>
        {errors.message && <p>{errors.message}</p>}
        <button className="btn" type="submit">
          <span>Send request</span>
        </button>
      </form>
      {/* End Appointment Form End */}
    </>
  );
};

export default ContactFormModal;
