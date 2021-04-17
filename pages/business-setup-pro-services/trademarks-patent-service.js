import SideBar from "../../components/SideBar";
import Link from "next/link";
import CTASection from "../../components/CTASection";
import Image from "next/image";
import Meta from "../../components/Layout/Meta";

const tags = [
  "Trademark Registration",
  "Patent Registration",
  "Intellectual property",
];

const trademark = () => {
  const metaData = {
    title: "Trademark & Patent registration in Dubai, UAE | Just Business",
    description:
      "Just Business provides services for trademark registration in Dubai, UAE. Our experts can guide and help you get the required formalities completed with the ministry of Economy. Our experts are registered agents with the ministry of economy",
    keywords:
      "Intellectual Property registration, Intellectual property law, patent registration uae, trademark & copyright registration in uae, trademark experts in dubai, trademark experts in UAE, Patent experts in Dubai, Patent & trademark specialist in UAE",
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
      <section className="page-title-bg pt-150 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Trademark and Patent Registration</h2>
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
                  <li>Trademark and Patent Registration</li>
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
                  Trademark and Patent Registration Service
                </h1>
                <p>
                  If you have built a brand or an identity that your customers
                  associate with your business then protecting that Brand
                  becomes an important part of the business. This is where
                  Trademark and Patent registration comes into the picture. This
                  type of protection provides the rights to a business so that
                  no one else other than your business can copy or duplicate
                  similar products or services using your brand or intellectual
                  property.
                </p>

                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4 className="title">
                      How Just Business can help with Trademark & Patent
                      Registration?
                    </h4>
                    <p>
                      We at Just Business help with filing and submitting of the
                      relevant application forms with the Ministry of Economy
                      UAE. We liaise with the Govt authority to accept the
                      application and provide any missing information during the
                      registration process. Because of our extensive experience,
                      we know all the requirements to get the approvals for
                      application correctly in the first time itself, so that
                      there is no time wastage and hurdles after the documents
                      have been submitted.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <Image
                      src="/assets/img/trademark and patent service dubai uae.png"
                      alt="Trademark and Patent Registration service dubai"
                      width="350"
                      height="350"
                    />
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <p></p>
                    <p>
                      Contact us today to find out more how we could help
                      protect your intellectual property and brand name in
                      Dubai, UAE ensuring peace of mind while conducting your
                      business.
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

export default trademark;
