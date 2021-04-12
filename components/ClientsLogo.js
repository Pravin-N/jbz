import Image from "next/image";

const ClientsLogo = () => {
  return (
    <>
      {/* Brand Slider Begin */}
      <section className="pt-60 pb-60">
        <h3 className="clogo">Some of Our Clients</h3>
        <div className="container clientcont">
          <div className="row">
            <div className="col-12">
              {/* Partners */}
              <div className="brand-logo">
                {/* Single Partner */}
                <a
                  href="https://dreamhomecleaning.ae/"
                  className="single-brand-logo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Client logo-1"
                >
                  <Image
                    src="/assets/img/brand/dreamhome.png"
                    alt="business setup in uae client 1"
                    height="80"
                    width="130"
                  />
                </a>
                {/* End Single Partner */}

                {/* Single Partner */}
                <a
                  href="https://www.mayfairwrapping.ae/"
                  className="single-brand-logo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Client logo-2"
                >
                  <Image
                    src="/assets/img/brand/mayfair.webp"
                    alt="business setup in dubai client 2"
                    height="80"
                    width="130"
                  />
                </a>
                {/* End Single Partner */}

                {/* Single Partner */}
                <a
                  href="https://peritussoft.com/"
                  className="single-brand-logo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Client logo-3"
                >
                  <Image
                    src="/assets/img/brand/peritas.png"
                    alt="business setup in uae client 3"
                    height="80"
                    width="130"
                  />
                </a>
                {/* End Single Partner */}

                {/* Single Partner */}
                <a
                  href="http://shinesquarebuilders.com/"
                  className="single-brand-logo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Client logo-4"
                >
                  <Image
                    src="/assets/img/brand/shinesquare.png"
                    alt="company formation in uae client 4"
                    height="80"
                    width="130"
                  />
                </a>
                {/* End Single Partner */}

                {/* Single Partner */}
                <a
                  href="http://theleelahotel.ae/"
                  className="single-brand-logo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Client logo-5"
                >
                  <Image
                    src="/assets/img/brand/theleela.jpg"
                    alt="business setup in uae client 5"
                    height="80"
                    width="130"
                  />
                </a>
                {/* End Single Partner */}

                {/* Single Partner */}
                <a
                  href="https://www.facebook.com/badshahpalace.uae/"
                  className="single-brand-logo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Client logo-6"
                >
                  <Image
                    src="/assets/img/brand/badshah.png"
                    alt="company formation in dubai client 6"
                    height="80"
                    width="130"
                  />
                </a>
                {/* End Single Partner */}
              </div>
              {/* End of Partners */}
            </div>
          </div>
        </div>
      </section>
      {/* Brand Slider End */}
    </>
  );
};

export default ClientsLogo;
