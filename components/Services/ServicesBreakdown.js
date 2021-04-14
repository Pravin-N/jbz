import Link from "next/link";
import Image from "next/image";

const ServicesBreakdown = () => {
  return (
    <>
      {/* Service Begin */}
      <section className="pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h3>Our Services</h3>
                <h2>
                  Best in the industry business setup & PRO services.
                  {/* <br />
                  For Your Business */}
                </h2>
                {/* <p>
                  We highest ye friends is exposed equally in. Ignorant had too
                  strictly followed. Astonished as travelling assistance or
                  unreserved oh pianoforte ye.
                </p> */}
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row service-card">
            <div className="col-lg-4 col-sm-6">
              {/* Single Service Begin */}
              <div className="single-service text-center">
                {/* Icon Begin */}
                <div className="icon">
                  <Image
                    src="/assets/img/icons/service-1.svg"
                    alt="Business Setup Dubai"
                    height="65"
                    width="83"
                  />
                </div>
                {/* Icon End  */}

                {/* Content Begin */}
                <div className="content">
                  <Link href="/business-setup-pro-services/business-setup-uae">
                    <a aria-label="Business Setup Service">
                      <h4>Business Setup</h4>
                    </a>
                  </Link>
                  <p>
                    Any business license anywhere in UAE. Mainland or Freezone.
                  </p>
                  <Link href="/business-setup-pro-services/business-setup-uae">
                    <a
                      className="btn-inline"
                      aria-label="Business Setup Service"
                    >
                      Know More
                    </a>
                  </Link>
                </div>
                {/* Content End */}
              </div>
              {/* Single Service End */}
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* Single Service Begin */}
              <div className="single-service text-center">
                {/* Icon Begin */}
                <div className="icon">
                  <Image
                    src="/assets/img/icons/service-2.svg"
                    alt="PRO Services Dubai"
                    height="65"
                    width="83"
                  />
                </div>
                {/* Icon End  */}

                {/* Content Begin */}
                <div className="content">
                  <Link href="/business-setup-pro-services/pro-service">
                    <a aria-label="PRO Services">
                      <h4>PRO Services</h4>
                    </a>
                  </Link>
                  <p> Visa for employees and other govt related approvals.</p>
                  <Link href="/business-setup-pro-services/pro-service">
                    <a className="btn-inline" aria-label="PRO Services">
                      Know More
                    </a>
                  </Link>
                </div>
                {/* Content End */}
              </div>
              {/* Single Service End */}
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* Single Service Begin */}
              <div className="single-service text-center">
                {/* Icon Begin */}
                <div className="icon">
                  <Image
                    src="/assets/img/icons/service-3.svg"
                    alt="Business Center dubai"
                    height="65"
                    width="83"
                  />
                </div>
                {/* Icon End  */}

                {/* Content Begin */}
                <div className="content">
                  <Link href="/business-setup-pro-services/business-center-dubai-service">
                    <a aria-label="Business Center Service">
                      <h4>Business Center</h4>
                    </a>
                  </Link>
                  <p>
                    Hire office desks, cabins to full fledged office with
                    meeting rooms.
                  </p>
                  <Link href="/business-setup-pro-services/business-center-dubai-service">
                    <a
                      className="btn-inline"
                      aria-label="Business Center Service"
                    >
                      Know More
                    </a>
                  </Link>
                </div>
                {/* Content End */}
              </div>
              {/* Single Service End */}
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* Single Service Begin */}
              <div className="single-service text-center">
                {/* Icon Begin */}
                <div className="icon">
                  <Image
                    src="/assets/img/icons/service-4.svg"
                    alt="VAT registration Dubai"
                    height="65"
                    width="83"
                  />
                </div>
                {/* Icon End  */}

                {/* Content Begin */}
                <div className="content">
                  <Link href="/business-setup-pro-services/vat-registration-service">
                    <a aria-label="VAT Registration Service">
                      <h4>VAT Registration</h4>
                    </a>
                  </Link>
                  <p>
                    Register business under VAT, keep upto date with new
                    regulations in UAE.
                  </p>
                  <Link href="/business-setup-pro-services/vat-registration-service">
                    <a
                      className="btn-inline"
                      aria-label="VAT Registration Service"
                    >
                      Know More
                    </a>
                  </Link>
                </div>
                {/* Content End */}
              </div>
              {/* Single Service End */}
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* Single Service Begin */}
              <div className="single-service text-center">
                {/* Icon Begin */}
                <div className="icon">
                  <Image
                    src="/assets/img/icons/service-5.svg"
                    alt="Trademark and Patent Registration dubai"
                    height="65"
                    width="83"
                  />
                </div>
                {/* Icon End  */}

                {/* Content Begin */}
                <div className="content">
                  <Link href="/business-setup-pro-services/trademarks-patent-service">
                    <a aria-label="Trademark & Patent Service">
                      <h4>Trademark & Patent</h4>
                    </a>
                  </Link>
                  <p>
                    Get trademark and patent registered and protect your
                    intellectual assets of your business.
                  </p>
                  <Link href="/business-setup-pro-services/trademarks-patent-service">
                    <a
                      className="btn-inline"
                      aria-label="Trademark & Patent Service"
                    >
                      Know More
                    </a>
                  </Link>
                </div>
                {/* Content End */}
              </div>
              {/* Single Service End */}
            </div>
          </div>
        </div>
      </section>
      {/* Service End */}
    </>
  );
};

export default ServicesBreakdown;
