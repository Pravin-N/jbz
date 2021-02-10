import React from "react";

const Sidebar = () => {
  return (
    <>
      {/* Offcanvas Holder Trigger */}
      <span className="offcanvas-trigger text-right d-none d-lg-block">
        <span></span>
        <span></span>
        <span></span>
      </span>
      {/* Offcanvas Trigger End */}

      {/* Offcanvas Begin */}
      <div className="offcanvas-overlay fixed-top w-100 h-100"></div>
      <div className="offcanvas-wrapper bg-white fixed-top h-100">
        {/* Offcanvas Close Button Begin */}
        <div className="offcanvas-close position-absolute">
          <img src="assets/img/icons/close.svg" className="svg" alt="" />
        </div>
        {/* Offcanvas Close Button End */}

        {/* Offcanvas Content Begin */}
        <div className="offcanvas-content">
          {/* About Widget Begin */}
          <div className="widget widget_about">
            <div className="widget-logo">
              <img src="assets/img/logo.png" data-rjs="2" alt="" />
            </div>

            <div className="about-content">
              <p>
                Really regard excuse off ten pulled. Lady am room head so lady
                four or eyes an household behaviour.
              </p>
            </div>
          </div>
          {/* About Widget End */}

          {/* Flicker Widget Begin */}
          <div className="widget widget_flicker">
            {/* Widget Logo Begin */}
            <div className="widget-title">
              <h4>Latest Shots</h4>
            </div>
            {/* Widget Logo End */}

            <ul className="d-flex flex-wrap">
              <li>
                <a href="#">
                  <img src="assets/img/flicker/f1.png" data-rjs="2" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/flicker/f2.png" data-rjs="2" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/flicker/f3.png" data-rjs="2" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/flicker/f4.png" data-rjs="2" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/flicker/f5.png" data-rjs="2" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/flicker/f6.png" data-rjs="2" alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/* Flicker Widget End */}

          {/* Contact Widget Begin */}
          <div className="widget widget_contact_info">
            {/* Widget Logo Begin */}
            <div className="widget-title">
              <h4>Get in touch</h4>
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

          {/* Offcanvas Button Begin */}
          <div className="offcanvas-btn">
            <a href="#" className="btn">
              <span>Get Appointment</span>
            </a>
          </div>
          {/* Offcanvas Button End */}
        </div>
        {/* Offcanvas Content End */}
      </div>
      {/* Offcanvas End */}
    </>
  );
};

export default Sidebar;
