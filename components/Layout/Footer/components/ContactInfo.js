import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="col-lg-3 col-sm-6">
        {/* Contact Widget Begin */}
        <div className="widget widget_contact_info">
          {/* Widget Logo Begin */}
          <div className="widget-logo">
            <img src="assets/img/footer_logo.png" data-rjs="2" alt="" />
          </div>
          {/* Widget Logo End */}

          {/* Widget Content Begin */}
          <div className="info-content">
            <div className="single-info">
              <span>Office Location</span>
              <p>173 Collins Street West victoria, Melbourne, Australia</p>
            </div>
            <div className="single-info">
              <span>Business Phone</span>
              <p>
                <a href="#">+0096665431</a>
                <a href="#">+0096667331</a>
              </p>
            </div>
            <div className="single-info">
              <span>Support mail</span>
              <p>
                <a href="#">bizidea@info.com</a>
                <a href="#">bizidea@gmail.com</a>
              </p>
            </div>
          </div>
          {/* Widget Content End */}
        </div>
        {/* About Widget End */}
      </div>
    </>
  );
};

export default ContactInfo;
