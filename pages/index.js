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
import Head from "next/head";

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
      <Head>
        <title>
          Business Setup and Company Formation Services in Dubai or any other
          emirate in UAE | Just Business
        </title>
        <meta
          name="description"
          content="Setup your business in Dubai easily with the help of Just Business. Depending on you business needs, Just Business guides you on choosing the correct license and provide transparent pricing. Get in touch for a free quote!"
          key="desc"
        />

        <meta
          name="keywords"
          content="starting a business in dubai, business setup in dubai, open company in uae, company formation in dubai, company formation in uae, Start a company in Dubai, PRO services, Startup in UAE"
          key="kywrds"
        />
        <meta
          name="abstract"
          content="Setup your business in Dubai easily with the help of Just Business. Depending on you business needs, Just Business guides you on choosing the correct license and provide transparent pricing. Get in touch for a free quote!"
          key="ogabs"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="/assets/img/jbztwitterimage.png"
          key="twcard"
        />
        <meta
          name="twitter:title"
          content="Business Setup and Company Formation Services in Dubai or any other
          emirate in UAE | Just Business"
          key="twtitle"
        />
        <meta
          name="twitter:description"
          content="Setup your business in Dubai easily with the help of Just Business. Depending on you business needs, Just Business guides you on choosing the correct license and provide transparent pricing. Get in touch for a free quote!"
          key="twdesc"
        />

        <meta
          name="twitter:creator"
          content="@JustBusiness_UAE"
          key="twhandle"
        />

        {/* Open Graph */}

        <meta
          property="og:image"
          content="/assets/img/jbzlogo.png"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="Just Business"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Business Setup and Company Formation Services in Dubai or any other
          emirate in UAE | Just Business"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Setup your business in Dubai easily with the help of Just Business. Depending on you business needs, Just Business guides you on choosing the correct license and provide transparent pricing. Get in touch for a free quote!"
          key="ogdesc"
        />
        <meta name="MobileOptimized" content="width" key="mobop" />
        <meta name="HandheldFriendly" content="true" key="hf" />
        <meta
          property="og:image:url"
          content="/assets/img/jbzlogo.png"
          key="ogimgurl"
        />
        <meta property="og:image:alt" content="Just Business" key="ogalt" />
        <meta property="og:locale" content="en_US" key="ogloc" />
        {/* <meta name="robots" content="noindex, nofollow" key="rob" /> */}
        <meta property="og:type" content="article" key="ogtyp" />
      </Head>
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
