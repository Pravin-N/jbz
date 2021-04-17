import Prices from "./Prices";
import PricingDetails from "./PricingDetails";
import { useState } from "react";

const Pricing = () => {
  const data = [
    {
      id: "pricing-1",
      detailId: "Commercial",
      href: "#Commercial",
      license: "Commercial License",
      price: "AED 19,770*",
      detailList: [
        "Initial Approval - Trade Name Reservation",
        "Trade License Fee",
        "Annual Sponsorship Fee",
        "Establishment Card",
        "Labour Card",
        "Partner Visa",
        "JBZ Service Fee",
      ],
      approData: [
        "We layout all the details and the timeline of each of the tasks that would be completed once you hire us for business setup.",
        "Guide you throughout the process to make it easy during each step.",
        "With extensive experience working with mainland government authorities, we can complete the process of business setup with relative ease.",
      ],
    },
    {
      id: "pricing-2",
      href: "#Professional",
      detailId: "Professional",
      license: "Professional License",
      price: "AED 19,770*",
      detailList: [
        "Initial Approval - Trade Name Reservation",
        "Trade License Fee",
        "Annual Sponsorship Fee",
        "Establishment Card",
        "Labour Card",
        "1 Visa",
        "JBZ Service Fee",
      ],
      approData: [
        "We layout all the details and the timeline of each of the tasks that would be completed once you hire us for business setup.",
        "Guide you throughout the process to make it easy during each step.",
        "With extensive experience working with mainland government authorities, we can complete the process of business setup with relative ease.",
      ],
    },
    {
      id: "pricing-3",
      href: "#FreeZone",
      detailId: "FreeZone",
      license: "Free Zone License",
      price: "AED 25,700*",
      detailList: [
        "License Fees",
        "E-Channel",
        "Investor Visa",
        "Security Deposit",
        "JBZ Service Fee",
      ],
      approData: [
        "We layout all the details and the timeline of each of the tasks that would be completed once you hire us forbusiness setup.",
        "Guide you throughout the process to make it easy during each step.",
        "Guide you throughout the process to make it easy during each step.",
        "With extensive experience working with Free Zone authorities, we can complete the process of business setup with relative ease.",
      ],
    },
    {
      id: "pricing-4",
      href: "#Offshore",
      detailId: "Offshore",
      license: "Offshore License",
      price: "AED 8,000*",
      detailList: [
        "License Fees",
        "Offshore Agent Fee",
        "Security Deposit",
        "JBZ Service Fee",
      ],
      approData: [
        "We layout all the details and the timeline of each of the tasks that would be completed once you hire us forbusiness setup.",
        "Guide you throughout the process to make it easy during each step.",
        "Guide you throughout the process to make it easy during each step.",
        "With extensive experience working with Free Zone authorities, we can complete the process of business setup with relative ease.",
      ],
    },
  ];

  const [active, setActive] = useState(data[0].id);

  return (
    <>
      {/* Pricing Plan Begin */}
      <section className="pt-120 pb-120 section-pattern l-gray pricing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h3>License Costs</h3>
                <h2>Business Setup in Dubai</h2>
                <p>
                  License costs varies on many factors like business activity,
                  location of the business and the type of license. Below are
                  some approximate figures of the costs to open a business in
                  dubai depending on the type of license.
                </p>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          {/* Pricing NavTab Begin */}
          <div className="pricing-navtab">
            {/* Pricing Nav Begin */}
            <ul
              className="row nav nav-tabs"
              role="tablist"
              aria-owns="pricing-1 pricing-2 pricing-3 pricing-4"
            >
              {/* Single Nav Begin */}
              {data.map(({ license, price, href, id }) => {
                return (
                  <Prices
                    license={license}
                    price={price}
                    href={href}
                    id={id}
                    key={id}
                    active={id === active}
                    onClick={() => setActive(id)}
                  />
                );
              })}
            </ul>
            <div className="tab-content">
              {/* Single Content Begin */}
              {data.map((d) => {
                return d.id === active ? (
                  <PricingDetails
                    detailList={d.detailList}
                    approData={d.approData}
                    detailId={d.detailId}
                    key={d.id}
                  />
                ) : (
                  ""
                );
              })}

              {/* <div
                className="tab-pane fadeInUp animated show active"
                id="personal"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-6"> */}
              {/* Tab Pane Text Begin */}
              {/* <div className="tab-pane-text">
                      <h3>What’s included in this package?</h3>
                      <ul className="list-unstyled list-check">
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Initial Approval - Trade Name Reservation
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Trade License Fee
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Annual Sponsorship Fee
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Establishment Card
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>1
                          Labour Card
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>1
                          Partner Visa
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          JBZ Service Fee
                        </li>
                        <li>
                          <p>
                            * Approx Costs - Depends on the type to business
                            activity.
                          </p>
                        </li>
                      </ul>
                    </div> */}
              {/* Tab Pane Text End */}
              {/* </div>
                  <div className="col-lg-6"> */}
              {/* Tab Pane Text Begin */}
              {/* <div className="tab-pane-text mt-50 mt-lg-0">
                      <h3>Our Approach</h3>
                      <ul className="list-unstyled list-check">
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i> We
                          layout all the details and the timeline of each of the
                          tasks that would be completed once you hire us for
                          business setup.
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Guide you throughout the process to make it easy
                          during each step.
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          With extensive experience working with mainland
                          government authorities, we can complete the process of
                          business setup with relative ease.
                        </li>
                      </ul>
                      <a
                        href="#"
                        className="btn"
                        data-toggle="modal"
                        data-target="#appointmentModalForm"
                        aria-label="Contact Form"
                      >
                        <span>Get a free Quote</span>
                      </a>
                    </div> */}
              {/* Tab Pane Text End */}
              {/* </div>
                </div>
              </div> */}
              {/* Single Content End */}

              {/* Single Content Begin */}
              {/* <div
                className="tab-pane fadeInUp animated"
                id="startup"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-6"> */}
              {/* Tab Pane Text Begin */}
              {/* <div className="tab-pane-text">
                      <h3>What’s included in this package?</h3>
                      <ul className="list-unstyled list-check">
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          Initial Approval - Trade Name Reservation
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Trade License Fee
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Establishment Card
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>1
                          Labour Card
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>1
                          Employee Visa
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          JBZ Service Fee
                        </li>
                        <li>
                          <p>
                            * Approx Costs - Depends on the type to business
                            activity.
                          </p>
                        </li>
                      </ul>
                    </div> */}
              {/* Tab Pane Text End */}
              {/* </div>
                  <div className="col-lg-6"> */}
              {/* Tab Pane Text Begin */}
              {/* <div className="tab-pane-text mt-50 mt-lg-0">
                      <h3>Our Approach</h3>
                      <ul className="list-unstyled list-check">
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i> We
                          layout all the details and the timeline of each of the
                          tasks that would be completed once you hire us for
                          business setup.
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Guide you throughout the process to make it easy
                          during each step.
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          With extensive experience working with mainland
                          government authorities, we can complete the process of
                          business setup with relative ease.
                        </li>
                      </ul>
                      <a
                        href="#"
                        className="btn"
                        data-toggle="modal"
                        data-target="#appointmentModalForm"
                        aria-label="Contact Form"
                      >
                        <span>Get a free Quote</span>
                      </a>
                    </div> */}
              {/* Tab Pane Text End */}
              {/* </div>
                </div>
              </div> */}
              {/* Single Content End */}

              {/* Single Content Begin */}
              {/* <div
                className="tab-pane fadeInUp animated"
                id="business"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-6"> */}
              {/* Tab Pane Text Begin */}
              {/* <div className="tab-pane-text">
                      <h3>What’s included in this package?</h3>
                      <ul className="list-unstyled list-check">
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          License Fees
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          E-Channel
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Investor Visa
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Security Deposit
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i> UAE
                          JBZ Service Fee
                        </li>
                        <li>
                          <p>
                            * Approx Costs - Depends on the type to business
                            activity.
                          </p>
                        </li>
                      </ul>
                    </div> */}
              {/* Tab Pane Text End */}
              {/* </div>
                  <div className="col-lg-6"> */}
              {/* Tab Pane Text Begin */}
              {/* <div className="tab-pane-text mt-50 mt-lg-0">
                      <h3>Our Approach</h3>
                      <ul className="list-unstyled list-check">
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i> We
                          layout all the details and the timeline of each of the
                          tasks that would be completed once you hire us for
                          business setup.
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Guide you throughout the process to make it easy
                          during each step.
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          With extensive experience working with freezone
                          authorities, we can complete the process of business
                          setup with relative ease.
                        </li>
                      </ul>
                      <a
                        href="#"
                        className="btn"
                        data-toggle="modal"
                        data-target="#appointmentModalForm"
                        aria-label="Contact Form"
                      >
                        <span>Get a free Quote</span>
                      </a>
                    </div> */}
              {/* Tab Pane Text End */}
              {/* </div>
                </div>
              </div> */}
              {/* Single Content End */}

              {/* Single Content Begin */}
              {/* <div
                className="tab-pane fadeInUp animated"
                id="entrepreneur"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-6"> */}
              {/* Tab Pane Text Begin */}
              {/* <div className="tab-pane-text">
                      <h3>What’s included in this package?</h3>
                      <ul className="list-unstyled list-check">
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          License Fees
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Offshore Agent Fee
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Security Deposit
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i> UAE
                          JBZ Service Fee
                        </li>
                        <li>
                          <p>
                            * Approx Costs - Depends on the type to business
                            activity.
                          </p>
                        </li>
                      </ul>
                    </div> */}
              {/* Tab Pane Text End */}
              {/* </div>
                  <div className="col-lg-6"> */}
              {/* Tab Pane Text Begin */}
              {/* <div className="tab-pane-text mt-50 mt-lg-0">
                      <h3>Our Approach</h3>
                      <ul className="list-unstyled list-check">
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i> We
                          layout all the details and the timeline of each of the
                          tasks that would be completed once you hire us for
                          business setup.
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Guide you throughout the process to make it easy
                          during each step.
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          With extensive experience working with freezone
                          authorities, we can complete the process of business
                          setup of offshore license with relative ease.
                        </li>
                      </ul>
                      <a
                        href="#"
                        className="btn"
                        data-toggle="modal"
                        data-target="#appointmentModalForm"
                        aria-label="Contact Form"
                      >
                        <span>Get a free Quote</span>
                      </a>
                    </div> */}
              {/* Tab Pane Text End */}
              {/* </div> */}
              {/* </div> */}
              {/* </div> */}
              {/* Single Content End */}
            </div>
            {/* Pricing Tab Content End */}
          </div>
          {/* Pricing NavTab End */}
        </div>
      </section>
      {/* Pricing Plan End */}
    </>
  );
};

export default Pricing;
