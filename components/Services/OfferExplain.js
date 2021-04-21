import Image from "next/image";

const OfferExplain = () => {
  return (
    <>
      {/* Service Section Begin */}
      <section className="pt-60 pb-60 l-gray">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Begin */}
              <div className="section-title mb-4">
                <h3>What We Offer?</h3>
                <h1>
                  We offer a wide range of services to help you get your
                  business up and running in Dubai, UAE.
                </h1>
                <p>
                  From getting a business license for any business activity in
                  Dubai, UAE to getting visas for employees or flexi desk to
                  meet the office requirements. We make these process easier for
                  any aspiring entrepreneur. Our services are tailored as per
                  your requirements and our aim is to provide the best services
                  in the industry.{" "}
                </p>
              </div>
              {/* Section Title End */}

              {/* About Feature List Begin */}
              <ul className="list-unstyled list-check">
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Quick
                  turnaround time for any service.
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Tailor made
                  solutions for your business.
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Best in the
                  industry Business Setup services.
                </li>
              </ul>
              {/* About Feature List End */}
            </div>
            <div className="col-lg-6 mt-50 mt-lg-0">
              <Image
                src="/assets/img/just business services for dubai business setup.png"
                width="540"
                height="680"
                alt="just business services for dubai business setup"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
    </>
  );
};

export default OfferExplain;
