import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [navBar, setnavBar] = useState(false);

  /* SLIDE UP */
  let slideUp = (target, duration = 500) => {
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.boxSizing = "border-box";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.style.display = "none";
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      //alert("!");
    }, duration);
  };

  /* SLIDE DOWN */
  let slideDown = (target, duration = 500) => {
    target.style.removeProperty("display");
    let display = window.getComputedStyle(target).display;
    if (display === "none") display = "block";
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };

  let settings = {
    title: "<span></span>",
    format: "multitoggle",
    sticky: false,
  };

  const navSticky = () => {
    if (window.scrollY >= 20) {
      setnavBar(true);
    } else {
      setnavBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", function (event) {
      if (event.target.matches('.header-main a[href="#"]')) {
        event.preventDefault();
      }
    });

    window.addEventListener("scroll", navSticky);

    // Show an element
    let show = function (elem) {
      elem.style.display = "block";
    };

    // Hide an element
    let hide = function (elem) {
      elem.style.display = "none";
    };

    let appenderHtml = '<div id="menu-button">' + settings.title + "</div>";

    function menumaker(settings, appenderHtml, slideUp, slideDown, show, hide) {
      var mainMenu = document.querySelector(".main-menu");
      mainMenu.insertAdjacentHTML("afterbegin", appenderHtml);
      const menuButton = mainMenu.querySelector("#menu-button");
      menuButton.addEventListener("click", function () {
        menuButton.classList.toggle("menu-opened");
        let mainmenu = menuButton.nextElementSibling;
        if (mainmenu.classList.contains("open")) {
          slideUp(mainmenu);
          mainmenu.classList.remove("open");
        } else {
          slideDown(mainmenu);
          mainmenu.classList.add("open");
          if (settings.format === "dropdown") {
            let mainMenuUi = mainmenu.querySelector("ul");
            slideDown(mainMenuUi);
          }
        }
      });
      const el = mainMenu.querySelectorAll("li ul");
      el.forEach((elem) => {
        elem.parentNode.classList.add("has-sub-item");
      });
      const multiTg = function () {
        const subMenuParent = mainMenu.querySelectorAll(".has-sub-item");
        subMenuParent.forEach((elem) => {
          elem.insertAdjacentHTML(
            "afterbegin",
            '<span class="submenu-button"></span>'
          );
          const subMenuButt = elem.querySelector(".submenu-button");
          subMenuButt.parentElement.addEventListener("click", function () {
            subMenuButt.classList.toggle("submenu-opened");
            let ul = Array.prototype.filter.call(
              subMenuButt.parentNode.children,
              function (child) {
                return child !== subMenuButt;
              }
            );
            ul.forEach((elem) => {
              if (elem.tagName == "UL") {
                console.log(elem.tagName);
                if (elem.classList.contains("open")) {
                  elem.classList.remove("open");
                  slideUp(elem);
                } else {
                  elem.classList.add("open");
                  slideDown(elem);
                }
              }
            });
          });
        });
      };
      if (settings.format === "multitoggle") multiTg();
      else mainMenu.classList.add("dropdown");
      if (settings.sticky === true) mainMenu.style.position = "fixed";
      const resizeFix = function () {
        if (window.innerWidth > 992) {
          show(mainMenu.querySelector("ul"));
        }
        if (window.innerWidth < 992) {
          mainMenu.querySelector("ul").classList.remove("open");
          hide(mainMenu.querySelector("ul"));
        }
      };
      resizeFix();
      return window.addEventListener("resize", resizeFix);
    }

    menumaker(settings, appenderHtml, slideUp, slideDown, show, hide);
  }, []);

  return (
    <>
      {/* Header Begin */}
      <header className="header fixed-top">
        {/* Header Style One Begin */}
        <div
          className={
            navBar
              ? "fixed-top header-main style--one sticky animated fadeInDown"
              : "fixed-top header-main style--one"
          }
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-sm-4 col-8">
                {/* Logo Begin */}
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        className="default-logo"
                        src="/assets/img/Just Business Dubai.png"
                        data-rjs="2"
                        alt="Just Business Setup Dubai Logo"
                        width={200}
                        height={55}
                      />
                      <img
                        className="sticky-logo"
                        src="/assets/img/Just Business Dubai.png"
                        data-rjs="2"
                        alt="Just Business Setup Dubai Logo"
                        width={200}
                        height={55}
                      />
                    </a>
                  </Link>
                </div>
                {/* Logo End */}
              </div>

              <div className="col-lg-9 col-sm-8 col-4">
                {/* Main Menu Begin */}
                <div className="main-menu d-flex align-items-center justify-content-end">
                  <ul className="nav align-items-center">
                    <li className="current-menu-parent menu-item-has-children">
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/dubai-business-setup-about-jbz">
                        <a>About</a>
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/business-setup-pro-services">
                        <a>Services</a>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/business-setup-pro-services/business-setup-uae">
                            <a>Business Setup / Licensing</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/business-setup-pro-services/business-center-dubai-service">
                            <a>Business Center</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/business-setup-pro-services/pro-service">
                            <a>PRO Services</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/business-setup-pro-services/vat-registration-service">
                            <a>VAT Registration</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li className="menu-item-has-children">
                      <a href="#">Project</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="projects.html">Projects</a>
                        </li>
                        <li>
                          <a href="project-details.html">project details</a>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="menu-item-has-children">
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
                    </li> */}
                    <li className="menu-item-has-children">
                      <Link href="/dubai-business-setup-blogs">
                        <a>Blog</a>
                      </Link>
                      {/* <ul className="sub-menu">
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
                      </ul> */}
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
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
