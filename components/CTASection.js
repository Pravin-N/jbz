import React from "react";

const CTASection = () => {
  return (
    <>
      {/* CTA Begin */}
      <section className="gradient-bg pt-30 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* CTA Content Begin */}
              <div className="cta-content text-center text-white">
                <h3>
                  Business setup & company formation services under one roof
                  <br />
                  Get your business license in 48 hours in Dubai.
                </h3>
                {/* <p>
                  Distrusts fulfilled happiness unwilling as explained of
                  difficult. No landlord of peculiar ladyship attended if
                  contempt ecstatic. Loud wish made on is am as hard. Court so
                  avoid in plate hence.
                </p> */}
                <a
                  href=""
                  className="btn btn-white"
                  data-toggle="modal"
                  data-target="#appointmentModalForm"
                >
                  <span>Contact Us Today</span>
                </a>
              </div>
              {/* CTA Content End */}
            </div>
          </div>
        </div>
      </section>
      {/* CTA End */}
    </>
  );
};

export default CTASection;
