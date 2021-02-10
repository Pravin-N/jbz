import PageHeader from "../components/PageHeader";
import WhoAreWe from "../components/About/WhoAreWe";
import Mission from "../components/About/Mission";
import Vision from "../components/About/Vision";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";
import ClientsLogo from "../components/ClientsLogo";
import Meta from "../components/Layout/Meta";

const AboutJbz = () => {
  return (
    <>
      <PageHeader />
      <WhoAreWe />
      <Mission />
      <Vision />

      <Counter />

      <Testimonials />
      <ClientsLogo />
    </>
  );
};

export default AboutJbz;
