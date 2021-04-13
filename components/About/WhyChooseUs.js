import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <>
      {/* About Section Begin */}
      <section className="pt-120 pb-120 l-gray whowe">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Image
                src="/assets/img/why choose just business for business setup.png"
                className="w-100"
                alt="why choose just business for business setup"
                width="540"
                height="540"
                quality="100"
              />
            </div>

            <div className="col-lg-6">
              {/* Section Title Begin */}
              <div className="section-title mb-4 mt-50 mt-lg-0">
                <h3>Why Choose Just Business</h3>
                <h2>
                  Understanding the needs of our clients and catering to those
                  needs is our topmost priority at Just Business.
                  <br />
                </h2>
                <p>
                  At Just Business, we come to work everyday because we want to
                  help people like yourself set up businesses without any
                  hassles. You know your business and we would like to focus on
                  that. Any information you need on where to set up a business,
                  the rules of the region, the costs involved, the process and
                  timeline is all available with us and we have the expertise to
                  execute the same with ease.
                </p>
              </div>
              {/* Section Title End */}

              {/* About Feature List Begin */}
              {/* <ul className="list-unstyled list-check">
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Become
                  successful & superior
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Provide
                  quick & good solution for business
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Use
                  opportunities to boost sales
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Planning &
                  executing projects
                </li>
              </ul> */}
              {/* About Feature List End */}
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
    </>
  );
};

export default WhyChooseUs;
