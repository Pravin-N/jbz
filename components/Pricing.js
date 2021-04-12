const Pricing = () => {
  return (
    <>
      {/* Pricing Plan Begin */}
      <section className="pt-120 pb-120 section-pattern l-gray pricing">
        <img
          src="/assets/img/circle.svg"
          className="stepSvg1"
          alt="background shape 1"
        />
        <img
          src="/assets/img/circle.svg"
          className="heroSvg5"
          alt="background shape 2"
        />
        <img
          src="/assets/img/circle.svg"
          className="heroSvg4"
          alt="background shape 3"
        />
        <img
          src="/assets/img/filled circle.svg"
          className="heroSvg3"
          alt="background shape 4"
        />
        <img
          src="/assets/img/cross.svg"
          className="heroSvg2"
          alt="background shape 5"
        />
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
              <li className="nav-item col-lg-3 col-sm-6" role="presentation">
                <a
                  href="#personal"
                  className="nav-link text-center active"
                  data-toggle="tab"
                  aria-selected="true"
                  id="pricing-1"
                  role="tab"
                  aria-label="Commercial License"
                >
                  <h4>Commercial License</h4>
                  <h2>AED 28,970*</h2>
                </a>
              </li>

              {/* Single Nav End */}

              {/* Single Nav Begin */}
              <li className="nav-item col-lg-3 col-sm-6" role="presentation">
                <a
                  href="#startup"
                  className="nav-link text-center"
                  data-toggle="tab"
                  aria-selected="false"
                  id="pricing-2"
                  role="tab"
                  aria-label="Professional License"
                >
                  <h4>Professional License</h4>
                  <h2>AED 19,770*</h2>
                </a>
              </li>
              {/* Single Nav End */}

              {/* Single Nav Begin */}
              <li className="nav-item col-lg-3 col-sm-6" role="presentation">
                <a
                  href="#business"
                  className="nav-link text-center"
                  data-toggle="tab"
                  aria-selected="false"
                  id="pricing-3"
                  role="tab"
                  aria-label="Freezone License"
                >
                  <h4>Freezone License</h4>
                  <h2>AED 25,700*</h2>
                </a>
              </li>
              {/* Single Nav End */}

              {/* Single Nav Begin */}
              <li className="nav-item col-lg-3 col-sm-6" role="presentation">
                <a
                  href="#entrepreneur"
                  className="nav-link text-center"
                  data-toggle="tab"
                  aria-selected="false"
                  id="pricing-4"
                  role="tab"
                  aria-label="Offshore License"
                >
                  <h4>Offshore License</h4>
                  <h2>AED 8,000*</h2>
                </a>
              </li>
              {/* Single Nav End */}
            </ul>
            {/* Pricing Nav End */}

            {/* Pricing Tab Content Begin */}
            <div className="tab-content">
              {/* Single Content Begin */}
              <div
                className="tab-pane fadeInUp animated show active"
                id="personal"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-6">
                    {/* Tab Pane Text Begin */}
                    <div className="tab-pane-text">
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
                          <h6>
                            * Approx Costs - Depends on the type to business
                            activity.
                          </h6>
                        </li>
                      </ul>
                    </div>
                    {/* Tab Pane Text End */}
                  </div>
                  <div className="col-lg-6">
                    {/* Tab Pane Text Begin */}
                    <div className="tab-pane-text mt-50 mt-lg-0">
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
                    </div>
                    {/* Tab Pane Text End */}
                  </div>
                </div>
              </div>
              {/* Single Content End */}

              {/* Single Content Begin */}
              <div
                className="tab-pane fadeInUp animated"
                id="startup"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-6">
                    {/* Tab Pane Text Begin */}
                    <div className="tab-pane-text">
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
                          <h6>
                            * Approx Costs - Depends on the type to business
                            activity.
                          </h6>
                        </li>
                      </ul>
                    </div>
                    {/* Tab Pane Text End */}
                  </div>
                  <div className="col-lg-6">
                    {/* Tab Pane Text Begin */}
                    <div className="tab-pane-text mt-50 mt-lg-0">
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
                    </div>
                    {/* Tab Pane Text End */}
                  </div>
                </div>
              </div>
              {/* Single Content End */}

              {/* Single Content Begin */}
              <div
                className="tab-pane fadeInUp animated"
                id="business"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-6">
                    {/* Tab Pane Text Begin */}
                    <div className="tab-pane-text">
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
                          <h6>
                            * Approx Costs - Depends on the type to business
                            activity.
                          </h6>
                        </li>
                      </ul>
                    </div>
                    {/* Tab Pane Text End */}
                  </div>
                  <div className="col-lg-6">
                    {/* Tab Pane Text Begin */}
                    <div className="tab-pane-text mt-50 mt-lg-0">
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
                    </div>
                    {/* Tab Pane Text End */}
                  </div>
                </div>
              </div>
              {/* Single Content End */}

              {/* Single Content Begin */}
              <div
                className="tab-pane fadeInUp animated"
                id="entrepreneur"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-6">
                    {/* Tab Pane Text Begin */}
                    <div className="tab-pane-text">
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
                          <h6>
                            * Approx Costs - Depends on the type to business
                            activity.
                          </h6>
                        </li>
                      </ul>
                    </div>
                    {/* Tab Pane Text End */}
                  </div>
                  <div className="col-lg-6">
                    {/* Tab Pane Text Begin */}
                    <div className="tab-pane-text mt-50 mt-lg-0">
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
                    </div>
                    {/* Tab Pane Text End */}
                  </div>
                </div>
              </div>
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
