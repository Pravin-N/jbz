import PageHeader from "../../components/PageHeader";
// import ClientsLogo from "../components/ClientsLogo";
import Counter from "../../components/Counter";
// import Pricing from "../components/Pricing";
// import Testimonials from "../components/Testimonials";
import OfferExplain from "../../components/Services/OfferExplain";
import ServicesBreakdown from "../../components/Services/ServicesBreakdown";
import Meta from "../../components/Layout/Meta";

const JBZServices = () => {
  const metaData = {
    title:
      "Business Setup, PRO and other services provided in Dubai, UAE | Just Business",
    description:
      "Want to start a Business in Dubai? Need a business license? or need to get visas for employees?, Just Business provides a wide range of business support services from Business Setup services, PRO services, Business Center facilities, VAT registration service, Trademark and Patent services can also provide you with a sponsor for your company. Get in touch today to more about Business Setup services.",
    keywords:
      "starting a business in dubai, Business Setup in dubai, open company in uae, company formation in dubai, company formation in uae, Start a company in Dubai, PRO services, Startup in UAE, PRO services, VAT Registration services, Business center Dubai",
    website: "https://jbz.ae",
  };
  return (
    <>
      <Meta
        title={metaData.title}
        description={metaData.description}
        keywords={metaData.keywords}
        website={metaData.website}
      />
      <PageHeader header="Services" />
      <OfferExplain />
      <ServicesBreakdown />
      {/* <Pricing /> */}
      <Counter />
      {/* <Testimonials /> */}
      {/* <ClientsLogo /> */}
    </>
  );
};

export default JBZServices;
