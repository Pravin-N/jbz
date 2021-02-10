import React from "react";

const ClientsLogo = () => {
  return (
    <>
      {/* Brand Slider Begin */}
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Partners */}
              <div
                className="brand-logo owl-carousel"
                data-owl-items="6"
                data-owl-autoplay="false"
                data-owl-responsive='{"0": {"items": "2"},"575":{"items": "3"},"768": {"items": "4"},"992": {"items": "6"}}'
              >
                {/* Single Partner */}
                <a href="#" className="single-brand-logo">
                  <img src="assets/img/brand/brand-1.png" data-rjs="2" alt="" />
                </a>
                {/* End Single Partner */}

                {/* Single Partner */}
                <a href="#" className="single-brand-logo">
                  <img src="assets/img/brand/brand-2.png" data-rjs="2" alt="" />
                </a>
                {/* End Single Partner */}

                {/* Single Partner */}
                <a href="#" className="single-brand-logo">
                  <img src="assets/img/brand/brand-3.png" data-rjs="2" alt="" />
                </a>
                {/* End Single Partner */}

                {/* Single Partner */}
                <a href="#" className="single-brand-logo">
                  <img src="assets/img/brand/brand-4.png" data-rjs="2" alt="" />
                </a>
                {/* End Single Partner */}

                {/* Single Partner */}
                <a href="#" className="single-brand-logo">
                  <img src="assets/img/brand/brand-5.png" data-rjs="2" alt="" />
                </a>
                {/* End Single Partner */}

                {/* Single Partner */}
                <a href="#" className="single-brand-logo">
                  <img src="assets/img/brand/brand-6.png" data-rjs="2" alt="" />
                </a>
                {/* End Single Partner */}
              </div>
              {/* End of Partners */}
            </div>
          </div>
        </div>
      </section>
      {/* Brand Slider End */}
    </>
  );
};

export default ClientsLogo;
