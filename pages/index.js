// import dynamic from "next/dynamic";
import Hero from "../components/Hero/Hero";

import Features from "../components/features/Features";
import AboutHome from "../components/Home/AboutHome";
import Steps from "../components/Home/Steps";
import ServicesHome from "../components/Home/services/ServicesHome";
import Counter from "../components/Counter";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
// import Projects from "../components/Projects";
import Team from "../components/Team/Team";
import CTASection from "../components/CTASection";
// import BlogHome from "../components/Home/BlogHome";
import ClientsLogo from "../components/ClientsLogo";
import Meta from "../components/Layout/Meta";
import FeaturePostData from "../components/data";

// let client = require("contentful").createClient({
//   space: process.env.NEXT_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
// });

export async function getStaticProps() {
  // let data = await client.getEntries({
  //   content_type: "jbzFeatures",
  // });
  return {
    props: {
      features: FeaturePostData,
    },
  };
}

export default function Home({ features }) {
  const metaData = {
    title:
      "Business Setup and Company Formation Services in Dubai / UAE",
    description:
      "Setup your business in Dubai easily with the help of Just Business. Depending on you business needs, Just Business guides you on choosing the correct license and provide transparent pricing.",
    keywords:
      "starting a business in dubai, business setup in dubai, open company in uae, company formation in dubai, company formation in uae, Start a company in Dubai, PRO services, Startup in UAE",
    website: "https://jbz.vercel.app/",
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

      <Features features={features} />
      <AboutHome />
      <CTASection />
      <Steps />

      <ServicesHome />
      <Counter />
      <Pricing />
      <CTASection />
      {/* <Projects /> */}
      <Team />
      <Testimonials />

      {/* <BlogHome /> */}
      <ClientsLogo />
    </>
  );
}
