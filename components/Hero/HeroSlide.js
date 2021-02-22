const HeroSlide = ({ line1, bold, line3, line4, para, contact, active }) => {
  return (
    <div
      className={
        active
          ? "single-banner-slider carousel-item active"
          : "single-banner-slider carousel-item"
      }
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Banner Content Begin */}
            <div className="banner-content">
              <h1>
                {line1}
                <span> {bold}</span> {line3}&nbsp;
                {line4}
              </h1>
              <p>{para}</p>
              <a
                href="#"
                data-toggle="modal"
                data-target="#appointmentModalForm"
                className="banner-btn btn"
              >
                <span>{contact}</span>
              </a>
            </div>
            {/* Banner Content End */}
          </div>
          <div className="col-lg-6">
            {/* Banner Content Begin */}
            <div className="banner-image mt-50 mt-lg-0 text-center text-lg-right">
              <img src="assets/img/banner/slider-1.png" alt="" />
            </div>
            {/* Banner Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
