import React from "react";
import ServiceInfo from "../../components/Service/ServiceInfo";
import SideBar from "../../components/SideBar";
import Link from "next/link";
import CTASection from "../../components/CTASection";

const tags = [
  "business setup dubai",
  "UAE",
  "startup",
  "mainland",
  "freezone",
  "DED",
  "company formation",
];

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
                <h2>Business Setup in UAE</h2>
                <ul className="list-inline">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/business-setup-pro-services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>Business Setup</li>
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
              <SideBar tags={tags} />
            </div>
            <div className="col-lg-8">
              <ServiceInfo />
            </div>
          </div>
        </div>
      </section>
      <CTASection />
      {/* Service details End */}
    </>
  );
};

export default BusinessSetup;
