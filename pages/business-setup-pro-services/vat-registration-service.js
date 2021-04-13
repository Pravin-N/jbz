import SideBar from "../../components/SideBar";
import Link from "next/link";
import CTASection from "../../components/CTASection";
import Image from "next/image";
import Meta from "../../components/Layout/Meta";

const tags = [
  "Trademark Registration",
  "Patent Registration",
  "startup",
  "mainland",
  "freezone",
  "DED",
  "company formation",
];

const Vat = () => {
  const metaData = {
    title:
      "VAT Registration Service in Dubai | Business Tax Dubai | Just Business",
    description:
      "Just business can help you with VAT registration and help you get your Tax Registration Number. VAT registration has become a requirement to operate a business in UAE. Tax rate can vary from 0%-5% depending on the goods and services being given. contact us today to get your business VAT registered.",
    keywords:
      "VAT Registration Dubai, Tax formalities Dubai, Mandatory VAT registration, Tax Registration Number (TRN), Register your business with FTA, TRN number, VAT Registration system",
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
                <h2>Value Added Tax Registration in Dubai</h2>
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
                  <li>VAT Registration</li>
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
                <h3 className="title">VAT Registration services in Dubai</h3>
                <p>
                  The UAE has implemented a Value Added Tax (VAT) from January
                  1, 2018. Businesses with Dhs 375,000 or more annual return are
                  expected to register as a vendor and charge VAT on the
                  provision of their goods and services, except those goods and
                  services that are categorized under exemption of VAT. Contact
                  us to know if your business is exempted from VAT.
                </p>

                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4 className="title">
                      Some points to remember while registering your business
                      under VAT.
                    </h4>
                    <p>
                      The first step is to decide whether you are registering
                      your company or are you registering yourself as an
                      individual. If you have more than one companies in
                      operation, will you be registering them separately or as a
                      Tax Group? Once you decide to register for VAT, what are
                      the documents that are needed to be kept ready before you
                      proceed for registration? Can you opt for group VAT
                      registration?
                    </p>
                  </div>
                  <div className="col-md-6">
                    <Image
                      src="/assets/img/Value added tax registration service.png"
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
                      We at Just Business Corporate Services can help you get
                      VAT registered in Dubai. We have expertise in solving
                      problems related to businesses in Dubai and other emirates
                      of UAE. You can contact us on info@jbz.ae
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

export default Vat;
