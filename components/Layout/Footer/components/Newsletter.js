import React from "react";
import SocialMedia from "./SocialMedia";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      email,
    };
    fetch("/api/emailsub", {
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
        setEmail("");
      }
    });
  };
  return (
    <>
      <div className="col-lg-4 col-sm-6">
        {/* Widget Newsletter Begin */}
        <div className="widget widget_newsletter">
          {/* Widget Title Begin  */}
          <div className="widget-title">
            <h4>Get More Information</h4>
          </div>
          {/* Widget Title End  */}

          <div className="newsletter-content">
            <p>
              Get the latest updates about business setup in UAE and our blogs
              on a weekly basis. Contact us via the phone or email if you need
              to get a free quote.
            </p>

            <form
              name="mc-embedded-subscribe-form"
              target="_blank"
              className="newsletter-form"
            >
              <div className="theme-input-group">
                <input
                  type="text"
                  placeholder="Your Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Widget Newsletter End */}
        <SocialMedia />
      </div>
    </>
  );
};

export default Newsletter;
