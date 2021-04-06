import React from "react";
import { useState, useEffect } from "react";

const ContactFormModal = ({ submitForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({});

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
    setErrors(validate(data));
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
          submitForm();
        }
      });
    }
  }, [errors]);

  return (
    <>
      {/* Modal Form Begin */}
      <div
        className="appointment-modal modal fade"
        id="appointmentModalForm"
        tabIndex="1"
        role="dialog"
        aria-labelledby="appointmentModalForm"
        aria-hidden="true"
      >
        <div className="modal-dialog d-flex align-items-center" role="document">
          <div className="container">
            <div className=" row justify-content-center">
              <div className="col-lg-8 col-12">
                {/* Modal Content Begin */}
                <div className="modal-content">
                  {/* Modal Close Button Begin */}
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <img src="assets/img/icons/close.svg" alt="" />
                  </button>
                  {/* End Modal Close End */}

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
                </div>
                {/* Modal Content End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Form End */}
    </>
  );
};

export default ContactFormModal;
