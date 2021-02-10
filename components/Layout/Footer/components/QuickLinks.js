import React from "react";

const QuickLinks = () => {
  return (
    <>
      <div className="col-lg-2 col-sm-6">
        {/* Widget Quick Nav */}
        <div className="widget widget_nav_menu">
          {/* Widget Title Begin  */}
          <div className="widget-title">
            <h4>Quick Links</h4>
          </div>
          {/* Widget Title End  */}

          {/* Menu Begin */}
          <ul className="menu">
            <li>
              <a href="#">About Company</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Our Experts</a>
            </li>
            <li>
              <a href="#">Get Constultation</a>
            </li>
            <li>
              <a href="#">Terms & Condition</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
          {/* Menu End */}
        </div>
        {/* Widget Quick Nav */}
      </div>
    </>
  );
};

export default QuickLinks;
