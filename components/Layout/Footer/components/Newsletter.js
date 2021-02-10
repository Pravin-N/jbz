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
              Cuteness you exquisite ourselves now end forfeited. Enquire ye
              without it garrets himself. Interest our nor received followed
              was.
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
