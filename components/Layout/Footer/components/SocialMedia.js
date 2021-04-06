import React from "react";

const SocialMedia = () => {
  return (
    <>
      {/* Widget Social Icon Begin */}
      <div className="widget widget_social_icon">
        <ul className="social_icon_list list-inline">
          <li>
            <a href="https://www.facebook.com/BusinessSetupUAE" target="_blank">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          {/* <li>
            <a href="https://www.facebook.com/BusinessSetupUAE" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li> */}
          <li>
            <a href="https://www.facebook.com/BusinessSetupUAE" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/justbusinessdubai/"
              target="_blank"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      {/* Widget Social Icon End */}
    </>
  );
};

export default SocialMedia;
