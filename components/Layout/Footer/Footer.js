import ContactInfo from "./components/ContactInfo";
import Copyright from "./components/Copyright";
import Newsletter from "./components/Newsletter";
import QuickLinks from "./components/QuickLinks";

const Footer = () => {
  return (
    <>
      {/* Footer Begin */}
      <footer className="footer footer-bg">
        {/* Footer Top Begin */}
        <div className="footer-top pt-60">
          <div className="container border-bottom">
            <div className="row footer">
              <ContactInfo />
              {/* <RecentPosts /> */}
              <QuickLinks />
              <Newsletter />
            </div>
          </div>
        </div>
        {/* Footer Top End */}
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
