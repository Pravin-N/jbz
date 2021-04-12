import { useEffect } from "react";
import Footer from "./Footer/Footer";
import Meta from "./Meta";
import Navbar from "./Navbar.js/Navbar";
import ModalForm from "../../components/ModalForm";
import WhatsApp from "./WhatsApp";

import dynamic from "next/dynamic";

const ChatWithNoSSR = dynamic(() => import("../Chat"), {
  ssr: false,
});

const Layout = ({ children }) => {
  // TODO: Remove all the background images and replace it with svg.
  useEffect(() => {
    var backToTopBtn = document.querySelector(".back-to-top");

    if (backToTopBtn) {
      var scrollTrigger = 400, // px
        backToTop = function () {
          var scrollTop = window.scrollY;
          if (scrollTop > scrollTrigger) {
            backToTopBtn.classList.add("show");
          } else {
            backToTopBtn.classList.remove("show");
          }
        };

      backToTop();

      window.addEventListener("scroll", function () {
        backToTop();
      });

      const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(-15, c - c / 12);
        }
      };

      backToTopBtn.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToTop();
      });
    }
  }, []);

  return (
    <>
      <Meta />
      <Navbar />
      <ModalForm />
      {children}
      <WhatsApp />
      <ChatWithNoSSR />
      <Footer />
      {/* <!-- Back to Top Begin --> */}
      <a
        href=""
        className="back-to-top position-fixed"
        aria-label="Navigate - top of page"
      >
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
