import ServiceCard from "./ServiceCard";

// Todo: change the subtitle and description also the service left section.
const serviceData = [
  {
    title: "Business Setup",
    image: "assets/img/icons/service-1.png",
    description:
      "Saved he do fruit woody of to. Met defective are allowance two.",
  },
  {
    title: "PRO Services",
    image: "assets/img/icons/service-2.png",
    description:
      "Saved he do fruit woody of to. Met defective are allowance two.",
  },
  {
    title: "Business Center",
    image: "assets/img/icons/service-3.png",
    description:
      "Saved he do fruit woody of to. Met defective are allowance two.",
  },
  {
    title: "VAT Registration",
    image: "assets/img/icons/service-4.png",
    description:
      "Saved he do fruit woody of to. Met defective are allowance two.",
  },
];

const ServicesHome = () => {
  return (
    <>
      {/* Service Begin */}
      <section
        className="pt-120 pb-120 section-pattern"
        data-bg-img="assets/img/section-pattern/service-pattern.png"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Begin */}
              <div className="section-title">
                <h3>Our Services</h3>
                <h2>
                  We’re Providing <br />
                  Best Solutions <br />
                  For Your Business
                </h2>
                <p>
                  We highest ye friends is exposed equally in. Ignorant had too
                  strictly followed. Astonished as travelling assistance or
                  unreserved oh pianoforte ye.
                </p>
              </div>
              {/* Section Title End */}

              {/* Button Begin */}
              <a href="#" className="btn">
                <span>view All</span>
              </a>
              {/* Button End */}
            </div>

            <div className="col-lg-6">
              <div className="row mt-40 mt-lg-0">
                {serviceData.map(({ title, image, description }) => {
                  return (
                    <ServiceCard
                      title={title}
                      image={image}
                      description={description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service End */}
    </>
  );
};

export default ServicesHome;
