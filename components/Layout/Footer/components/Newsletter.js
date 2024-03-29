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
              Get the latest updates about Business Setup in UAE through our
              blogs section on a weekly basis. Contact us via a phone call or
              drop an email if you need to get a free quote.
            </p>

            <form
              name="mc-embedded-subscribe-form"
              target="_blank"
              className="newsletter-form"
              validate="true"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              {submitted ? (
                <>
                  <div className="">
                    <p>Thank you for submitting your email. </p>
                    <p>We will get back to you shortly. </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="theme-input-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />{" "}
                    <button type="submit" aria-label="Submit Email">
                      <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </button>
                  </div>
                </>
              )}
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
