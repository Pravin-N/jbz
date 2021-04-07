import React from "react";
import ContactInfo from "./components/ContactInfo";
import Copyright from "./components/Copyright";
import Newsletter from "./components/Newsletter";
import QuickLinks from "./components/QuickLinks";
import RecentPosts from "./components/RecentPosts";
import { useState } from "react";
import FormSuccess from "../../../components/FormSuccess";

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  function formView() {
    setIsSubmitted(false);
  }
  return (
    <>
      {/* Footer Begin */}
      <footer className="footer footer-bg">
        {/* Footer Top Begin */}
        <div className="footer-top pt-60">
          <div className="container border-bottom">
            <div className="row footer">
              <ContactInfo />
              {/* <RecentPosts /> */}
              <QuickLinks />
              {!isSubmitted ? (
                <Newsletter submitForm={submitForm} />
              ) : (
                <FormSuccess />
              )}
            </div>
          </div>
        </div>
        {/* Footer Top End */}
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
