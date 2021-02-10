import dynamic from "next/dynamic";

import Hero from "../components/Home/Hero";
import ModalForm from "../components/ModalForm";
import Features from "../components/Home/Features";
import AboutHome from "../components/Home/AboutHome";
import Steps from "../components/Home/Steps";
import ServicesHome from "../components/Home/ServicesHome";
import Counter from "../components/Counter";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";
//import Team from "../components/Team/Team";
import CTASection from "../components/CTASection";
import BlogHome from "../components/Home/BlogHome";
import ClientsLogo from "../components/ClientsLogo";

const Team = dynamic(() => import("../components/Team/Team"));

export default function Home() {
  return (
    <>
      <Hero />
      <ModalForm />
      <Features />
      <AboutHome />
      <Steps />
      <ServicesHome />
      <Counter />
      <Pricing />
      <Testimonials />
      <Projects />
      <Team />
      <CTASection />
      <BlogHome />
      <ClientsLogo />
    </>
  );
}
