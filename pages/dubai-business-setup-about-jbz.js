import PageHeader from "../components/PageHeader";
import WhoAreWe from "../components/About/WhoAreWe";
// import Mission from "../components/About/Mission";
import WhyChooseUs from "../components/About/WhyChooseUs";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";
import ClientsLogo from "../components/ClientsLogo";
import AboutHome from "../components/Home/AboutHome";
import Meta from "../components/Layout/Meta";

const AboutJbz = () => {
  const metaData = {
    title:
      "About - Just Business, UAE - Helping clients to setup businesses in Dubai, UAE easily",
    description:
      "At Just Business our aim to make the business setup and PRO work easier for entrepreneurs to start and run businesses in Dubai. Our experts help startups, incubators, small and medium scale businesses or individual entrepreneurs with getting their trade licenses. Get in touch with us today!",
    keywords:
      "About Just Business, UAE company setup process, setting up a business in the UAE, Dubai company setup specialists, UAE company setup specialists, Dubai company setup guidance, UAE company setup guidance",
    website: "https://jbz.ae/",
  };
  return (
    <>
      <Meta
        title={metaData.title}
        description={metaData.description}
        keywords={metaData.keywords}
        website={metaData.website}
      />
      <PageHeader header="About Just Business" />
      <WhoAreWe />
      <AboutHome
        img={"/assets/img/section-bg/about jb business setup in dubai1.webp"}
      />
      {/* <Mission /> */}
      <WhyChooseUs />

      <Counter />
      <Testimonials />
      <ClientsLogo />
    </>
  );
};

export default AboutJbz;
