import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  // router.asPath
  const [navBar, setNavBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [offCanvas, setOffCanvas] = useState(false);

  const handleClick = () => {
    if (!offCanvas) {
      setOffCanvas(true);
    } else {
      setOffCanvas(false);
    }
  };

  const navSticky = () => {
    if (window.scrollY >= 20) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  /* SLIDE UP */
  let slideUp = (target, duration = 500) => {
    // target.style.transitionProperty = "height, margin, padding";
    // target.style.transitionDuration = duration + "ms";
    // target.style.boxSizing = "border-box";
    // target.style.height = target.offsetHeight + "px";
    // target.offsetHeight;
    // target.style.overflow = "hidden";
    // target.style.height = 0;
    // target.style.paddingTop = 0;
    // target.style.paddingBottom = 0;
    // target.style.marginTop = 0;
    // target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.removeAttribute("style");
      // target.style.display = "none";
      // target.style.removeProperty("height");
      // target.style.removeProperty("padding-top");
      // target.style.removeProperty("padding-bottom");
      // target.style.removeProperty("margin-top");
      // target.style.removeProperty("margin-bottom");
      // target.style.removeProperty("overflow");
      // target.style.removeProperty("transition-duration");
      // target.style.removeProperty("transition-property");
      // alert("!");
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

  const openMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      const mobileMenu = document.querySelector(".nav");
      slideDown(mobileMenu);
    } else {
      setMenuOpen(false);
      const mobileMenu = document.querySelector(".nav");
      slideUp(mobileMenu);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    const mobileMenu = document.querySelector(".nav");
    slideUp(mobileMenu);
  };

  const openSubMenu = () => {
    if (!subMenuOpen) {
      setSubMenuOpen(true);
      const subMenu = document.querySelector(".sub-menu");
      slideDown(subMenu);
    } else {
      setSubMenuOpen(false);
      const subMenu = document.querySelector(".sub-menu");
      slideUp(subMenu);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navSticky);

    // Show an element
    let show = function (elem) {
      elem.style.display = "block";
    };

    // Hide an element
    let hide = function (elem) {
      elem.style.display = "none";
    };
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
                        alt="Just Business Setup Dubai Logo"
                        width={200}
                        height={55}
                      />
                      <img
                        className="sticky-logo"
                        src="/assets/img/Just Business Dubai.png"
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
                  <div
                    id="menu-button"
                    onClick={openMenu}
                    className={menuOpen ? "menu-opened" : ""}
                  >
                    <span></span>
                  </div>
                  <ul
                    className={`nav align-items-center nav-menu ${
                      menuOpen ? "open" : ""
                    }`}
                  >
                    <li
                      className={`${
                        router.pathname == "/" ? "current-menu-parent" : ""
                      } menu-item-has-children`}
                      onClick={closeMenu}
                    >
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        router.pathname == "/dubai-business-setup-about-jbz"
                          ? "current-menu-parent"
                          : ""
                      } menu-item-has-children`}
                      onClick={closeMenu}
                    >
                      <Link href="/dubai-business-setup-about-jbz">
                        <a>About</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        router.pathname.includes("/business-setup-pro-services")
                          ? "current-menu-parent"
                          : ""
                      } menu-item-has-children has-sub-item`}
                    >
                      <Link href="/business-setup-pro-services">
                        <a>Services</a>
                      </Link>
                      <span
                        className={`submenu-button ${
                          subMenuOpen ? "submenu-opened" : ""
                        }`}
                        onClick={openSubMenu}
                      ></span>
                      <ul className={`sub-menu ${subMenuOpen ? "open" : ""}`}>
                        <li>
                          <Link href="/business-setup-pro-services/business-setup-uae">
                            <a>Business Setup / Licensing</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/business-setup-pro-services/business-center-dubai-service">
                            <a onClick={closeMenu}>Business Center</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/business-setup-pro-services/pro-service">
                            <a onClick={closeMenu}>PRO Services</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/business-setup-pro-services/vat-registration-service">
                            <a onClick={closeMenu}>VAT Registration</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/business-setup-pro-services/trademarks-patent-service">
                            <a onClick={closeMenu}>
                              Trademark & Patent Registration
                            </a>
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
                    <li
                      className={`${
                        router.pathname == "/dubai-business-setup-blogs"
                          ? "current-menu-parent"
                          : ""
                      } menu-item-has-children`}
                      onClick={openMenu}
                    >
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
                    <li
                      className={`${
                        router.pathname == "/contact"
                          ? "current-menu-parent"
                          : ""
                      } menu-item-has-children`}
                      onClick={closeMenu}
                    >
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                  <span
                    className="offcanvas-trigger text-right d-none d-lg-block"
                    onClick={handleClick}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  {offCanvas ? <Sidebar close={handleClick} /> : null}
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
