import React from "react";
import Link from "next/link";

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
              <Link href="/dubai-business-setup-about-jbz">About JBZ</Link>
            </li>
            <li>
              <Link href="/business-setup-pro-services">Services We Offer</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/dubai-business-setup-blogs">Blog</Link>
            </li>
            <li>
              <Link href="/">Privacy policy</Link>
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
