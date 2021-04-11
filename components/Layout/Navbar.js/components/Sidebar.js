import { useRef, useEffect } from "react";

const Sidebar = ({ close }) => {
  const ref = useRef();
  const refx = useRef();

  const offCanvasOpen = () => {
    var el1 = document.querySelector(".offcanvas-wrapper");
    var el2 = document.querySelector(".offcanvas-overlay");
    el1.classList.add("active");
    el2.classList.add("show");
  };

  // const offCanvasClose = () => {
  //   // var el1 = document.querySelector(".offcanvas-wrapper");
  //   // var el2 = document.querySelector(".offcanvas-overlay");
  //   // el2.classList.remove("show");
  //   // el1.classList.remove("active");
  //   close();
  // };

  const menuClose = () => {
    close();
  };

  const handleClick = (e) => {
    if (!ref.current.contains(e.target) || refx.current.contains(e.target)) {
      var el1 = document.querySelector(".offcanvas-wrapper");
      var el2 = document.querySelector(".offcanvas-overlay");
      el2.classList.remove("show");
      el1.classList.remove("active");
      menuClose();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);

    offCanvasOpen();

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <>
      {/* Offcanvas Holder Trigger */}
      {/* <span
        className="offcanvas-trigger text-right d-none d-lg-block"
        onClick={offCanvasOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </span> */}
      {/* Offcanvas Trigger End */}

      {/* Offcanvas Begin */}
      <div className={`offcanvas-overlay fixed-top w-100 h-100 `}></div>
      <div className={`offcanvas-wrapper fixed-top h-100 `} ref={ref}>
        {/* Offcanvas Close Button Begin */}
        <div
          className="offcanvas-close position-absolute"
          // onClick={offCanvasClose}
          ref={refx}
        >
          <img src="assets/img/icons/close.svg" className="svg" alt="" />
        </div>
        {/* Offcanvas Close Button End */}

        {/* Offcanvas Content Begin */}
        <div className="offcanvas-content">
          {/* About Widget Begin */}
          <div className="widget widget_about">
            <div className="widget-logo">
              <img
                src="/assets/img/Just Business Dubai.png"
                data-rjs="2"
                alt="Just Business Setup Dubai Logo"
                width={200}
                height={55}
              />
            </div>

            <div className="about-content">
              <p>
                One stop shop for all needs regarding business setup and pro
                services in Dubai, UAE.
              </p>
            </div>
          </div>
          {/* About Widget End */}

          {/* Flicker Widget Begin */}
          <div className="widget widget_flicker">
            {/* Widget Logo Begin */}
            {/* <div className="widget-title">
              <h4>Latest Blogs</h4>
            </div> */}
            {/* Widget Logo End */}

            {/* <ul className="d-flex flex-wrap">
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
            </ul> */}
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
                <span>Our Office Location</span>
                <p>
                  103, Al Makhawi Building,
                  <br />
                  Oud Metha, Dubai, UAE
                </p>
              </div>
              <div className="single-info">
                <span>Call us On</span>
                <p>
                  <a href="tel:+971557572069">+971 55 757 2069</a>
                  <a href="tel:+971557780398">+971 55 778 0398</a>
                </p>
              </div>
              <div className="single-info">
                <span>Email</span>
                <p>
                  <a href="mailto:faisal@jbz.ae">faisal@jbz.ae</a>
                  <a href="mailto:pranitha@jbz.ae">pranitha@jbz.ae</a>
                </p>
              </div>
            </div>
            {/* Widget Content End */}
          </div>
          {/* About Widget End */}

          {/* Offcanvas Button Begin */}
          <div className="offcanvas-btn">
            <a
              href=""
              className="btn"
              data-toggle="modal"
              data-target="#appointmentModalForm"
            >
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
