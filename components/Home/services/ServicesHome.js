import ServiceCard from "./ServiceCard";
import Link from "next/link";

// Todo: change the subtitle and description also the service left section.
const serviceData = [
  {
    title: "Business Setup",
    image: "assets/img/icons/service-1.png",
    description: "Any business license anywhere in UAE. Mainland or Freezone.",
    link: "/business-setup-pro-services/business-setup-uae",
  },
  {
    title: "PRO Services",
    image: "assets/img/icons/service-2.png",
    description: "Visa for employees and other govt related approvals",
    link: "/business-setup-pro-services/pro-service",
  },
  {
    title: "Business Center",
    image: "assets/img/icons/service-3.png",
    description:
      "Hire office desks, cabins to full fledged office with meeting rooms.",
    link: "/business-setup-pro-services/business-center-dubai-service",
  },
  {
    title: "VAT Registration",
    image: "assets/img/icons/service-4.png",
    description:
      "Register business under VAT, keep upto date with new regulations in UAE",
    link: "/business-setup-pro-services/vat-registration-service",
  },
];

const ServicesHome = () => {
  return (
    <>
      {/* Service Begin */}
      <section className="pt-120 pb-120 section-pattern services">
        <img src="/assets/img/wavyline.svg" className="wavySvg" />
        <img src="/assets/img/circle.svg" className="heroSvg4" />
        <img src="/assets/img/filled circle.svg" className="heroSvg3" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Begin */}
              <div className="section-title">
                <h3>Our Services</h3>
                <h2>
                  We Offer a Wide <br />
                  Range of Services <br />
                  to Kick Start Your Business in UAE.
                </h2>
                {/* <p>
                  We highest ye friends is exposed equally in. Ignorant had too
                  strictly followed. Astonished as travelling assistance or
                  unreserved oh pianoforte ye.
                </p> */}
              </div>
              {/* Section Title End */}

              {/* Button Begin */}
              <Link href="/business-setup-pro-services">
                <a className="btn">
                  <span>view All</span>
                </a>
              </Link>
              {/* Button End */}
            </div>

            <div className="col-lg-6">
              <div className="row mt-40 mt-lg-0">
                {serviceData.map(({ title, image, description, link }) => {
                  return (
                    <ServiceCard
                      title={title}
                      image={image}
                      description={description}
                      link={link}
                      key={title}
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
