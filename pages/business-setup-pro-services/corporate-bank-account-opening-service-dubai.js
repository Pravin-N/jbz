import SideBar from "../../components/SideBar";
import Link from "next/link";
import CTASection from "../../components/CTASection";
import Image from "next/image";
import Meta from "../../components/Layout/Meta";

const tags = [
  "Corporate bank account opening",
  "banking privacy dubai",
  "banking servics dubai",
  "Taxes",
  "adcb bank",
  "emirates nbd",
  "Rak bank",
  "Emirates islamic",
  "mashreq",
];

const BankAccount = () => {
  const metaData = {
    title:
      "Corporate & Business Bank account opening service in Dubai | a/c opening | Just Business",
    description:
      "Just Business can help you with opening your corporate bank account in any of the top international banks in UAE. Opening a business bank account has become extremely cumbersome for businesses in Dubai, Just Business by using internal connections within the banking industry can make this process extremely easy for you with much less documentation than normal.",
    keywords:
      "Corporate bank Account opening Dubai, corporate bank account, business account opening assistance, corporate banking current account, unable to open corporate bank account dubai",
    website: "https://jbz.vercel.app/",
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
      <section className="page-title-bg pt-250 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Corporate Bank A/c Opening Service in Dubai.</h2>
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
                  <li>Corporate Bank A/c Opening Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Title End */}

      {/* Service Details Begin */}
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 order-last order-lg-first">
              <SideBar tags={tags} />
            </div>
            <div className="col-lg-8">
              {/* Service Details Begin */}
              <div className="service-details">
                <h3 className="title">
                  Open Corporate Bank Account in Dubai, UAE
                </h3>
                <p>
                  Dubai is one of the top tier locations to do business in the
                  middle east. Many businesses from different industries operate
                  successfully in the region. One of the main factors of this is
                  the robust banking sector in Dubai. Top tier international
                  banks as well as local banks operate in Dubai and help
                  business fulfil thier financial needs and conduct business
                  operations smoothly.Banks that operate in UAE are some of the
                  largest banks in the region. if you operate a business in
                  Dubai you most probably need a bank account. Sometimes it can
                  be difficult for a business to get a bank account. This could
                  be because of various reasons like not have sufficient
                  documentations or not being a resident in the UAE, etc. Most
                  banks in the UAE permit non-residents to open savings bank
                  accounts only but it we can help you get a corporate account
                  through our connections within the industry.
                </p>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4 className="title">
                      How Just Business can help you get a corporate account for
                      your business?
                    </h4>
                    <p>
                      Usually businesses face problems with KYC requirements and
                      face other hurdles while opening bank accounts as banks
                      and financial institutions operate under KYC policies to
                      meet international standards. We at Just Business can help
                      any business get over this hurdle and comply with KYC
                      requirements to get a bank account in UAE. We have
                      extensive experience in setting up bank accounts for our
                      clients and know the ins and outs of the documentation
                      requirements.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <Image
                      src="/assets/img/corporate-Bank-account-opening-service.jpg"
                      alt="VAT Registration service dubai"
                      width="350"
                      height="350"
                    />
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <p></p>
                    <p>
                      We can make the process easier and hassle free by holding
                      your hand during the entire process and resolve any issues
                      immediately. We offer start to end corporate bank account
                      opening services in UAE. You can contact us on info@jbz.ae
                    </p>
                    <p></p>
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

export default BankAccount;
