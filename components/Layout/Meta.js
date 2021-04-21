import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Meta = ({ title, description, keywords, website }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="icon"
          href="/assets/img/justbusinesslogo.png"
          type="image/png"
        />

        <title>{title}</title>
        <meta name="description" content={description} key="desc" />

        <meta name="keywords" content={keywords} key="kywrds" />
        <meta name="abstract" content={description} key="ogabs" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:title" content={title} key="twtitle" />
        <meta name="twitter:description" content={description} key="twdesc" />

        <meta
          name="twitter:creator"
          content="@JustBusiness_UAE"
          key="twhandle"
        />
        <meta
          name="twitter:url"
          content={"https://jbz.vercel.app/" + router.pathname}
          key="twurl"
        />
        <meta
          name="twitter:image"
          content={website + "/assets/img/jbztwitterimage.png"}
          key="ogabs"
        />

        {/* Open Graph */}
        <link rel="canonical" href={website + router.pathname} />
        <meta
          property="og:url"
          content={website + router.pathname}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={website + "/assets/img/jbzlogo.png"}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="Just Business"
          key="ogsitename"
        />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta name="MobileOptimized" content="width" key="mobop" />
        <meta name="HandheldFriendly" content="true" key="hf" />
        <meta
          property="og:image:url"
          content={website + "/assets/img/jbzlogo.png"}
          key="ogimgurl"
        />
        <meta property="og:image:alt" content="Just Business" key="ogalt" />
        <meta property="og:locale" content="en_US" key="ogloc" />
        <meta name="robots" content="noindex, nofollow" key="rob" />
        <meta property="og:type" content="article" key="ogtyp" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/BusinessSetupUAE"
        ></meta>
      </Head>
    </>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  website: PropTypes.string,
};

Meta.defaultProps = {
  title:
    "Business Setup and Company Formation Services in Dubai or any other emirate in UAE | Just Business",
  description:
    "Setup your business in Dubai easily with the help of Just Business. Depending on you business needs, Just Business guides you on choosing the correct license and provide transparent pricing. Get in touch for a free quote!",
  keywords:
    "starting a business in dubai, Business Setup in dubai, open company in uae, company formation in dubai, company formation in uae, Start a company in Dubai, PRO services, Startup in UAE",
  website: "https://jbz.vercel.app/",
};

export default Meta;
