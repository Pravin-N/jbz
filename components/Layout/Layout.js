import { useEffect } from "react";
import Footer from "./Footer/Footer";
import Meta from "./Meta";
import Navbar from "./Navbar.js/Navbar";
import ModalForm from "../../components/ModalForm";

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

    // var imgSvg = document.querySelectorAll("img.svg");

    // imgSvg.forEach(async (element) => {
    //   var imgElem = element;
    //   var imgID = imgElem.getAttribute("id");
    //   var imgClass = imgElem.getAttribute("class");
    //   var imgURL = imgElem.getAttribute("src");

    //   await fetch(imgURL)
    //     .then((response) => response.text())
    //     .then((html) => {
    //       // Convert the HTML string into a document object
    //       var parser = new DOMParser();
    //       var doc = parser.parseFromString(html, "text/html");
    //       var svg = doc.querySelector("svg");

    //       if (typeof imgID !== "null") {
    //         svg.setAttribute("id", imgID);
    //       }
    //       if (typeof imgClass !== "null") {
    //         svg.setAttribute("class", imgClass + " replaced-svg");
    //       }
    //       svg.removeAttribute("xmlns:a");

    //       if (
    //         !svg.getAttribute("viewBox") &&
    //         svg.getAttribute("height") &&
    //         svg.getAttribute("width")
    //       ) {
    //         svg.setAttribute(
    //           "viewBox",
    //           "0 0 " +
    //             svg.getAttribute("height") +
    //             " " +
    //             svg.getAttribute("width")
    //         );
    //       }
    //       imgElem.parentNode.replaceChild(svg, imgElem);
    //     });
    // });
  }, []);

  return (
    <>
      <Meta />
      <Navbar />
      <ModalForm />
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
