import PageHeader from "../components/PageHeader";
import WhoAreWe from "../components/About/WhoAreWe";
// import Mission from "../components/About/Mission";
import WhyChooseUs from "../components/About/WhyChooseUs";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";
import ClientsLogo from "../components/ClientsLogo";
import Meta from "../components/Layout/Meta";
import AboutHome from "../components/Home/AboutHome";

const AboutJbz = () => {
  return (
    <>
      <PageHeader header="About" />
      <WhoAreWe />
      <AboutHome />
      {/* <Mission /> */}
      <WhyChooseUs />

      <Counter />
      <Testimonials />
      <ClientsLogo />
    </>
  );
};

export default AboutJbz;
