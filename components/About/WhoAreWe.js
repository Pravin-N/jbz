import Image from "next/image";

const WhoAreWe = () => {
  return (
    <>
      {/* About Section Begin */}
      <section className="pt-60 pb-60 l-gray whowe">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h3>Who are we?</h3>
                <h1>
                  We are experts in Business Setup, PRO services <br />& other
                  Business Support services in Dubai, UAE
                </h1>
                {/* <p>
                  Met defective are allowance two perceived listening consulted
                  contained. It chicken oh colonel pressed excited suppose to
                  shortly.
                </p> */}
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Image
                src="/assets/img/business setup-company formation meeting1.jpg"
                alt="business setup - company formation - just business about us main image"
                width="1112"
                height="460"
                quality="80"
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="about-text mt-5">
                <p>
                  Just Business Corporate Services is a one-stop destination for
                  all your business start-up needs. Established in 2009, we have
                  more than 10 years of experience in Business Setup. We offer a
                  wide range of services designed to accommodate our client
                  requirements. Just Business Corporate Services has proudly
                  served a wide selection of clients from banks, general trading
                  companies to real estate firms. We are always committed to
                  offering the best customer service to our clients. Our
                  professionals are skilled experts and strive to present the
                  right information as fast as possible. We have teamed with
                  numerous companies from various other service sectors to
                  provide supplementary services to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
    </>
  );
};

export default WhoAreWe;
