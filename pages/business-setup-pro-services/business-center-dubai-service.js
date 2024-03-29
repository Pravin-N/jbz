import SideBar from "../../components/SideBar";
import Link from "next/link";
import CTASection from "../../components/CTASection";
import Image from "next/image";
import Meta from "../../components/Layout/Meta";

const tags = ["flexi desk", "business center", "start-up", "office"];

const BusinessCenter = () => {
  const metaData = {
    title: "Business Center Services in Dubai, UAE | Just Business",
    description:
      "Just Business operates 2 Business Centers in Dubai's prime locations with all the facilities required to run a profitable business like reception facilities, conference rooms, concierge facilities and world class workstations all at affordable prices. Fully serviced offices and virtual office service also provided at these centers.",
    keywords:
      "rent shared office space in dubai, serviced offices, affordable office space in dubai for business license, office cabin on rent, business center in Dubai UAE ",
    website: "https://jbz.ae",
  };
  return (
    <>
      <Meta
        title={metaData.title}
        description={metaData.description}
        keywords={metaData.keywords}
        website={metaData.website}
      />
      {/* Page Title Begin  TODO: Head section to use the page header component*/}
      <section className="page-title-bg pt-150 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Business Center Services</h2>
                <ul className="list-inline">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/business-setup-pro-services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>Business Center</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Title End */}

      {/* Service Details Begin */}
      <section className="pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 order-last order-lg-first">
              <SideBar tags={tags} />
            </div>
            <div className="col-lg-8">
              {/* Service Details Begin */}
              <div className="service-details">
                <h1 className="title">
                  Best business center facilities in Dubai
                </h1>
                <p>
                  We, at Just Business, provide to our customers, unique
                  business environment to optimize clients' levels of
                  productivity in an inspiring and hospitable atmosphere. We
                  have 2 Business Centers on our panel, which are situated, in
                  the prominent areas of Dubai. Our Business Centers offer
                  stylish furnished offices of different sizes and capacities,
                  meeting rooms, stylish visitors' receptions, secretary
                  assistance, high-speed Wi-Fi and much more. Our virtual office
                  services include personalized telephone answering, mail
                  receipt, a prestigious business address, concierge services,
                  workstations and meeting rooms.
                </p>

                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4 className="title">
                      Why rent your next office in our business center?
                    </h4>
                    <p>
                      The wide range of facilities at our Center ensures that
                      you will find an ideal fit for your business. Our offices
                      are flexible, upgradable and comfortable, and can suit all
                      budgets or sizes with ease: entrepreneurs, small
                      start-ups, medium-sized businesses, and branch offices of
                      international corporations.
                    </p>
                  </div>

                  <div className="col-md-6">
                    <Image
                      src="/assets/img/business center dubai.png"
                      alt="business center office spaces dubai"
                      width="350"
                      height="300"
                    />
                  </div>
                </div>
                <p></p>
                <div className="row">
                  <div className="col-md-6">
                    <Image
                      src="/assets/img/business center conference room.png"
                      alt="business center conference rooms dubai"
                      width="350"
                      height="300"
                    />
                  </div>
                  <div className="col-md-6">
                    <h4 className="title">Facilities At Our Business Center</h4>
                    <ul className="list-check">
                      <li>
                        <i className="fa fa-check"></i>Flexi Desk
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Meeting & Conference
                        Rooms
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Concierge services
                      </li>
                      <li>
                        <i className="fa fa-check"></i>In-house secretary
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Reception facilities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Service Details End */}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
      {/* Service details End */}
    </>
  );
};

export default BusinessCenter;
