import React from "react";
import Sidebar from "./components/Sidebar";

const Navbar = () => {
  return (
    <>
      {/* Header Begin */}
      <header className="header fixed-top">
        {/* Header Style One Begin */}
        <div className="fixed-top header-main style--one">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-sm-4 col-8">
                {/* Logo Begin */}
                <div className="logo">
                  <a href="index.html">
                    <img
                      className="default-logo"
                      src="assets/img/logo.png"
                      data-rjs="2"
                      alt=""
                    />
                    <img
                      className="sticky-logo"
                      src="assets/img/sticky_logo.png"
                      data-rjs="2"
                      alt=""
                    />
                  </a>
                </div>
                {/* Logo End */}
              </div>

              <div className="col-lg-9 col-sm-8 col-4">
                {/* Main Menu Begin */}
                <div className="main-menu d-flex align-items-center justify-content-end">
                  <ul className="nav align-items-center">
                    <li className="current-menu-parent menu-item-has-children">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li className="current-menu-item">
                          <a href="index.html">Landing Page</a>
                        </li>
                        <li>
                          <a href="home-1.html">home v1</a>
                        </li>
                        <li>
                          <a href="home-2.html">home v2</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Services</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="service.html">service v1</a>
                        </li>
                        <li>
                          <a href="service-two.html">service v2</a>
                        </li>
                        <li>
                          <a href="service-details.html">service details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Project</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="projects.html">Projects</a>
                        </li>
                        <li>
                          <a href="project-details.html">project details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog Default</a>
                        </li>
                        <li>
                          <a href="blog-single-column.html">
                            Blog Single Colunm
                          </a>
                        </li>
                        <li>
                          <a href="blog-two-column.html">Blog two Colunm</a>
                        </li>
                        <li>
                          <a href="blog-with-sidebar.html">Blog with Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-details.html">blog details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                  <Sidebar />
                </div>
                {/* Main Menu ENd */}
              </div>
            </div>
          </div>
        </div>
        {/* Header Style One End */}
      </header>
      {/* Header End */}
    </>
  );
};

export default Navbar;
