import Image from "next/image";

const ContactInfo = () => {
  return (
    <>
      <div className="col-lg-3 col-sm-6">
        {/* Contact Widget Begin */}
        <div className="widget widget_contact_info">
          {/* Widget Logo Begin */}
          <div className="widget-logo">
            <img
              src="/assets/img/Just Business Dubai.png"
              alt="JBZ Business Setup in Dubai Logo"
              width="108"
              height="25"
            />
          </div>
          {/* Widget Logo End */}

          {/* Widget Content Begin */}
          <div className="info-content">
            <div className="single-info">
              <span>Our Office Location</span>
              <p>
                103, Al Makhawi Building,
                <br />
                Oud Metha, Dubai, UAE
              </p>
            </div>
            <div className="single-info">
              <span>Call Us On</span>
              <p>
                <a href="tel:+971557572069">+971 55 757 2069</a>
                <a href="tel:+971557780398">+971 55 778 0398</a>
                <a href="tel:+97143984283">+971 4 398 4283</a>
              </p>
            </div>
            <div className="single-info">
              <span>Email</span>
              <p>
                <a href="mailto:info@jbz.ae">info@jbz.ae</a>
                <a href="mailto:faisal@jbz.ae">faisal@jbz.ae</a>
                <a href="mailto:pranitha@jbz.ae">pranitha@jbz.ae</a>
              </p>
            </div>
          </div>
          {/* Widget Content End */}
        </div>
        {/* About Widget End */}
      </div>
    </>
  );
};

export default ContactInfo;
