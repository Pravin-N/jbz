import ServiceCard from "./ServiceCard";
import Link from "next/link";

// Todo: change the subtitle and description also the service left section.
const serviceData = [
  {
    title: "Business Setup",
    image: "/assets/img/icons/service-1.svg",
    description: "Any business license anywhere in UAE. Mainland or FreeZone.",
    link: "/business-setup-pro-services/business-setup-uae",
    alt: "Dubai Business setup service",
  },
  {
    title: "PRO Services",
    image: "/assets/img/icons/service-2.svg",
    description: "Visa for employees and other govt related approvals.",
    link: "/business-setup-pro-services/pro-service",
    alt: "Pro Services Dubai UAE",
  },
  {
    title: "Business Center",
    image: "/assets/img/icons/service-3.svg",
    description:
      "Hire office desks, cabins and even full-fledged offices with meeting rooms.",
    link: "/business-setup-pro-services/business-center-dubai-service",
    alt: "Business Center office Space Dubai",
  },
  {
    title: "Corporate Bank A/c",
    image: "/assets/img/icons/service-6.svg",
    description:
      "Start to end assistance with opening a corporate bank account in Dubai",
    link:
      "/business-setup-pro-services/corporate-bank-account-opening-service-dubai",
    alt: "Business Bank A/c Opening Service Dubai",
  },
];

const ServicesHome = () => {
  return (
    <>
      {/* Service Begin */}
      <section className="pt-120 pb-120 section-pattern services">
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
                <a className="btn" aria-label="Link to Services">
                  <span>View All</span>
                </a>
              </Link>
              {/* Button End */}
            </div>

            <div className="col-lg-6">
              <div className="row mt-40 mt-lg-0">
                {serviceData.map(({ title, image, description, link, alt }) => {
                  return (
                    <ServiceCard
                      title={title}
                      image={image}
                      description={description}
                      link={link}
                      alt={alt}
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
