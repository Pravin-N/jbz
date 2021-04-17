import React from "react";

const PricingDetails = ({ detailList, approData, detailId }) => {
  return (
    <>
      <div
        className="tab-pane fadeInUp animated show active"
        id={detailId}
        role="tabpanel"
      >
        <div className="row">
          <div className="col-lg-6">
            {/* Tab Pane Text Begin */}
            <div className="tab-pane-text">
              <h3>What’s included in this package?</h3>
              <ul className="list-unstyled list-check">
                {detailList.map((detail, i) => {
                  return (
                    <li key={i}>
                      <i className="fa fa-check" aria-hidden="true"></i>
                      {detail}
                    </li>
                  );
                })}
                <li>
                  <p>
                    * Approx Costs - Depends on the type to business activity.
                  </p>
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
                {approData.map((data, i) => {
                  return (
                    <li key={i}>
                      <i className="fa fa-check" aria-hidden="true"></i>
                      {data}
                    </li>
                  );
                })}
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
    </>
  );
};

export default PricingDetails;
