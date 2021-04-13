import Image from "next/image";
import Link from "next/link";
import CTASection from "../../components/CTASection";
import Meta from "../../components/Layout/Meta";
import FeaturePostData from "../../components/data";

// let client = require("contentful").createClient({
//   space: process.env.NEXT_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
// });

export async function getStaticPaths() {
  const paths = await FeaturePostData.map((feature) => ({
    params: { slug: feature.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let data = FeaturePostData.filter((p) => p.slug === params.slug);
  return {
    props: {
      info: data[0],
    },
  };
}

const Info = ({ info }) => {
  const metaData = {
    title: `${info.title} | Just Business`,
    description: `${info.altText} | ${info.shortText}`,
    keywords: `starting a business in dubai, business setup in dubai, open company in uae, company formation in dubai, company formation in uae, Start a company in Dubai, startup in uae, business license in Dubai, ${info.shortTitle}, ${info.category}`,
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
      {/* <!-- Page Title Begin --> */}
      <section className="page-title-bg pt-250 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>
                  {info.title}
                  {/* Business consultant finds more <br /> ways to bring business
                  to light */}
                </h2>
                <ul className="list-inline">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>{info.shortTitle}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Page Title End -->

  <!-- Project Details Begin --> */}
      <section className="pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="project-details">
                <div className="row">
                  <div className="col-12">
                    {/* <!-- Project Image Begin --> */}
                    <div className="project-image">
                      <Image
                        src={info.shortImage}
                        height="550"
                        width="1110"
                        alt={info.alt}
                      />
                    </div>
                    {/* <!-- Project Image End --> */}
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <ul className="list-inline project-meta">
                      <li>Category: {info.category}</li>
                      <li>Author: Admin</li>
                    </ul>
                  </div>
                </div>

                <div className="row justify-content-center pb-30">
                  <div className="col-lg-10">
                    <div className="project-details-content">
                      <h3>{info.subtitle1}</h3>

                      <p>{info.content1}</p>
                      <h3>{info.subtitle2}</h3>
                      <p>{info.content2}</p>
                      <h3>{info.subtitle3}</h3>
                      <p>{info.content3}</p>

                      {/* <ul className="list-check mb-5">
                        <li>
                          <i className="fa fa-check"></i> Become successful &
                          superior
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Provide quick solution
                          for business
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Use opportunities to
                          boost sales
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Planning & executing
                          projects
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Project Details End --> */}
      <CTASection />
    </>
  );
};

export default Info;
