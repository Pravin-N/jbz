import Hero from "../components/Hero/Hero";

import dynamic from "next/dynamic";

import Features from "../components/features/Features";
import AboutHome from "../components/Home/AboutHome";
import Steps from "../components/Home/Steps";
import ServicesHome from "../components/Home/services/ServicesHome";
import Counter from "../components/Counter";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team/Team";
import CTASection from "../components/CTASection";
import ClientsLogo from "../components/ClientsLogo";
import Meta from "../components/Layout/Meta";
import FeaturePostData from "../components/data";

const Slider = dynamic(() => import("../components/Slider"), { ssr: false });

const Slider2 = dynamic(() => import("../components/Slider2"), { ssr: false });

export async function getStaticProps() {
  return {
    props: {
      features: FeaturePostData,
    },
  };
}

export default function Home({ features }) {
  const metaData = {
    title: "Business Setup & Company Formation Services in Dubai, UAE",
    description:
      "Setup your business in Dubai with the help of Just Business. Based on your business needs, we guide you to choose the correct license & provide transparent pricing.",
    keywords:
      "starting a business in dubai, Business Setup in dubai, open company in uae, company formation in dubai, company formation in uae, Start a company in Dubai, PRO services, Startup in UAE",
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
      <Hero />
      <Slider />
      <Features features={features} />

      <AboutHome
        img={"/assets/img/section-bg/about jb business setup in dubai.webp"}
      />

      <CTASection />
      <Steps />

      <ServicesHome />
      <Slider2 />

      <Pricing />
      <Counter />
      {/* <Projects /> */}
      <Team />
      <Testimonials />

      {/* <BlogHome /> */}
      <ClientsLogo />
    </>
  );
}
