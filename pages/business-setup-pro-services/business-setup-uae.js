import React from "react";
import ServiceInfo from "../../components/Service/ServiceInfo";
import SideBar from "../../components/SideBar";

const BusinessSetup = () => {
  return (
    <>
      {/* Page Title Begin  TODO: Head section to use the page header component*/}
      <section
        className="page-title-bg pt-250 pb-100"
        data-bg-img="assets/img/section-pattern/page-title.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Business campaign</h2>
                <ul className="list-inline">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>Business campaign</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Title End */}

      {/* Service Details Begin */}
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 order-last order-lg-first">
              <SideBar />
            </div>
            <div className="col-lg-8">
              <ServiceInfo />
            </div>
          </div>
        </div>
      </section>
      {/* Service details End */}
    </>
  );
};

export default BusinessSetup;
