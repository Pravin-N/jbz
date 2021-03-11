import React from "react";
import SocialMedia from "./SocialMedia";

const Newsletter = () => {
  return (
    <>
      <div className="col-lg-4 col-sm-6">
        {/* Widget Newsletter Begin */}
        <div className="widget widget_newsletter">
          {/* Widget Title Begin  */}
          <div className="widget-title">
            <h4>Newsletter</h4>
          </div>
          {/* Widget Title End  */}

          <div className="newsletter-content">
            <p>
              Get the latest updates about business setup in UAE and our blogs
              on a weekly basis. Contact us via the phone or email if you need
              to get a free quote.
            </p>

            <form
              action="https://themelooks.us13.list-manage.com/subscribe/post?u=79f0b132ec25ee223bb41835f&amp;id=f4e0e93d1d"
              method="post"
              name="mc-embedded-subscribe-form"
              target="_blank"
              className="newsletter-form"
            >
              <div className="theme-input-group">
                <input type="text" placeholder="Your Email" />
                <button type="submit">
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
