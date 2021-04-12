import Head from "next/head";
import { useRouter } from "next/router";

const Meta = ({}) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <link
          rel="icon"
          href="/assets/img/justbusinesslogo.png"
          type="image/png"
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
        <meta
          name="twitter:url"
          content={"http://localhost:3000" + router.pathname}
          key="twurl"
        />
        <meta name="twitter:image" content="input image" key="ogabs" />

        {/* Open Graph */}
        <link
          rel="canonical"
          href={"http://localhost:3000" + router.pathname}
        />
        <meta
          property="og:url"
          content={"http://localhost:3000" + router.pathname}
          key="ogurl"
        />
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
        <meta
          property="article:publisher"
          content="https://www.facebook.com/BusinessSetupUAE"
        ></meta>
      </Head>
    </>
  );
};

export default Meta;
