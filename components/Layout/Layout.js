import React from "react";
import Footer from "./Footer/Footer";
import Meta from "./Meta";
import Navbar from "./Navbar.js/Navbar";
import Preloader from "./Preloader/Preloader";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Preloader />
      <Navbar />
      {children}
      <Footer />
      {/* <!-- Back to Top Begin --> */}
      <a href="#" className="back-to-top position-fixed">
        <div className="back-toop-tooltip">
          <span>Back To Top</span>
        </div>
        <div className="top-arrow"></div>
        <div className="top-line"></div>
      </a>
      {/* <!-- Back to Top End --> */}
    </>
  );
};

export default Layout;
