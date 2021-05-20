import SideBar from "../../components/SideBar";
import Link from "next/link";
import CTASection from "../../components/CTASection";
import Image from "next/image";
import Meta from "../../components/Layout/Meta";

const tags = [
  "PRO Services Dubai",
  "Visa Services",
  "Document Clearing",
  "Immigration",
  "Labour Approval",
];

const ProService = () => {
  const metaData = {
    title: "PRO & Visa Services in Dubai, UAE | Just Business",
    description:
      "Just Business are experts in providing corporate PRO services and solutions to businesses in Dubai. From business visas, labour cards, employee visa, immigration & ministry of labour approvals Just Business provides end to end PRO services. We provide tailor made solutions to your PRO services needs.",
    keywords:
      "pro services in dubai,  best pro services in dubai,  best pro services company in dubai,  pro company in dubai,  corporate pro services company in dubai, employee visas dubai uae, immigration approval dubai, visa stamping dubai, labour card, ministry of labour approval.",
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
                <h2>PRO Services in Dubai</h2>
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
                  <li>PRO Services</li>
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
                <h1 className="title">Professional PRO services in Dubai</h1>
                <p>
                  Professional PRO services to get the required Visas and
                  complete other govt formalities for smooth running of your
                  business. Public Relations work is an integral and the most
                  essential activity of any company in UAE right from the
                  Business Setup and company formation procedures. PRO services
                  in Dubai require professional expertise that can successfully
                  manage the whole cycle of procedures and formalities.
                </p>

                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4 className="title">
                      Why choose Just Business for PRO work?
                    </h4>
                    <p>
                      Just Business Consultants will assist your company through
                      all the Business Setup stages with our wide range of PRO
                      services in Dubai and document clearing services. As our
                      work closely depends on liaising with the Dubai government
                      and officials of various ministries, we are best known as
                      the providers of the most-efficient PRO Services in Dubai.
                      Ultimately, you benefit from our PRO services in Dubai by
                      saving time as part of queues in government offices as
                      well as money. We ensure that clients are given maximum
                      support for their business in the UAE.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <Image
                      src="/assets/img/Pro services dubai uae.png"
                      alt="PRO services dubai UAE"
                      width="350"
                      height="350"
                    />
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <p></p>
                    <p>
                      We have experts that are skilled and well experienced with
                      legalities and the different formalities laid out by the
                      UAE Government. As our work is dependent on government
                      authorities, our strong ties with them facilitate quicker
                      document clearances for your business.
                    </p>

                    <p></p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <Image
                      src="/assets/img/pro services dubai uae imag2.png"
                      alt="PRO services dubai UAE- image2"
                      width="350"
                      height="300"
                    />
                  </div>
                  <div className="col-md-6">
                    <h4 className="title">
                      Key Points regarding our PRO Service.
                    </h4>
                    <ul className="list-check">
                      <li>
                        <i className="fa fa-check"></i>Quick Turnaround Time
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Cost Effective for any
                        Business
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Expert knowledge base for
                        any business requirement
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Pay as you need service.
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

export default ProService;
