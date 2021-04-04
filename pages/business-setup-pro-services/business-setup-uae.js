import React from "react";

import SideBar from "../../components/SideBar";
import Link from "next/link";
import CTASection from "../../components/CTASection";
import Image from "next/image";

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
      <section className="page-title-bg pt-250 pb-100">
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
              {/* Service Details Begin */}
              <div className="service-details">
                <h3 className="title">
                  Business Setup and Licensing service in Dubai or any other
                  emirate in UAE.
                </h3>
                <p>
                  Business setup service is one of the main services we provide
                  at Just Business. We have extensive experience in business
                  setup. We have helped over 500 entrepreneurs to start their
                  business in Dubai. We help them get the required license for
                  the business activity. We have a quick turnaround time in
                  getting all the procedures completed and we make each step
                  extremely easy for you so you can focus on your business
                  rather than worry about the government regulations and
                  licensing needs and trying to fulfill all the requirements for
                  getting the right permissions to run your business.
                </p>

                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4 className="title">
                      Should you start a business in UAE?
                    </h4>
                    <p>
                      In the Middle East region there is only no other country
                      that has a more robust economy and more popularly known as
                      the business Hub of the region than UAE, more importantly
                      the emirate of Dubai within UAE. In the past 30 years,
                      Dubai and inturn UAE has seen exponential growth in the
                      economy that only few countries in the world see in the
                      same period. Economy of Dubai is so diversified that even
                      though it is oil rich, it only contributes to about 3% of
                      the economy.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <Image
                      src="/assets/img/business-setup in Dubai UAE service.png"
                      alt="business-setup service"
                      width="350"
                      height="350"
                    />
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <p></p>
                    <p>
                      Businesses that operate in UAE find it very easy to run
                      their business without much govt intervention. The country
                      provides some amazing infrastructure to support
                      businesses. The country also provides some great benefits
                      to businesses operating within the country like protection
                      of assets, limited liability, large tax benefits along
                      with confidentiality.
                    </p>
                    <p>
                      Policies of the the govt are always aimed at making the
                      region more stable and sustainable for business and this
                      has helped businesses flourish. It has location advantages
                      in the middle east region and easy access by sea and air
                      that help entrepreneurs travel in and out of the country
                      with limited difficulty.
                    </p>
                    <p></p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <Image
                      src="/assets/img/company formation dubai service image 2.png"
                      alt="company formation dubai uae service"
                      width="350"
                      height="300"
                    />
                  </div>
                  <div className="col-md-6">
                    <h4 className="title">
                      Key reasons to start a business in Dubai, UAE:
                    </h4>
                    <ul className="list-check">
                      <li>
                        <i className="fa fa-check"></i>Amazing facilities and
                        Infrastructure
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Tax Haven and other
                        Financial perks
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Relative ease to start a
                        business.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Favorable visa and
                        immigration laws.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Amazing growth
                        opportunities for any business.
                      </li>
                    </ul>
                  </div>
                </div>

                <h4 className="title">
                  Steps involved in setting up a business in UAE.
                </h4>

                <p>
                  There multiple steps involved in getting a business in UAE
                  depending on the location and the business activity. Below are
                  all the steps that Just Business can help you get your
                  business license.
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <Image
                      src="/assets/img/business setup dubai steps.png"
                      alt="business setup uae steps process"
                      width="350"
                      height="300"
                    />
                  </div>
                  <div className="col-md-6">
                    {/* <h4>Important Steps:</h4> */}
                    <ul className="list-check">
                      <li>
                        <i className="fa fa-check"></i>Local sponsor as partner,
                        if license in Mainland Dubai, UAE.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Preparing Memorandum of
                        association of the business and the activity and all
                        shareholders involved.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Initial Approval from
                        Department of Economic Development.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Trade Name Approval and
                        Office location Approval.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Issue Trade License from
                        relevant govt authorities.
                      </li>
                    </ul>
                  </div>
                </div>

                <h4 className="title">
                  Type of License and Under which Authority to get the License.
                </h4>

                <p>
                  There are three distinct types of licenses offered in Dubai or
                  any other emirate in UAE. You could apply for a commercial
                  license, professional license or a industrial license
                  depending on the business activity to be conducted. Another
                  important consideration is to determine the where to register
                  your business in UAE. There are 7 emirates and each emirate
                  has its own mainland authority and freezone authorities.
                  Deciding the license type and location within UAE can be
                  tedious task and could also end up being expensive if the
                  right one is not chosen. We at Just Business having years of
                  experience can help make this process a lot easier and cost
                  effective for you. Get in touch today.
                </p>
              </div>
              {/* Service Details End */}
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
