// import dynamic from "next/dynamic";
import Hero from "../components/Hero/Hero";
import ModalForm from "../components/ModalForm";
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

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "jbzFeatures",
  });
  return {
    props: {
      features: data.items,
    },
  };
}

export default function Home({ features }) {
  return (
    <>
      <Hero />
      <ModalForm />
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
