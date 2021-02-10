import PageHeader from "../components/PageHeader";
import ClientsLogo from "../components/ClientsLogo";
import Counter from "../components/Counter";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import OfferExplain from "../components/Services/OfferExplain";
import ServicesBreakdown from "../components/Services/ServicesBreakdown";

const JBZServices = () => {
  return (
    <>
      <PageHeader />
      <OfferExplain />
      <ServicesBreakdown />
      <Pricing />
      <Counter />
      <Testimonials />
      <ClientsLogo />
    </>
  );
};

export default JBZServices;
