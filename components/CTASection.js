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
                  Business Setup & Company Formation services under one
                  roof.&nbsp;
                  <br />
                  Get your business license within 48 hours in Dubai.
                </h3>
                {/* <p>
                  Distrusts fulfilled happiness unwilling as explained of
                  difficult. No landlord of peculiar ladyship attended if
                  contempt ecstatic. Loud wish made on is am as hard. Court so
                  avoid in plate hence.
                </p> */}

                <a
                  href="#"
                  className="btn btn-white"
                  data-toggle="modal"
                  data-target="#appointmentModalForm"
                  aria-label="Contact Form"
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
