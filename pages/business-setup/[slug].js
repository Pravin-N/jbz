import Image from "next/image";
import Link from "next/link";
import CTASection from "../../components/CTASection";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "jbzFeatures",
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let data = await client.getEntries({
    content_type: "jbzFeatures",
    "fields.slug": context.params.slug,
  });
  return {
    props: {
      info: data.items[0],
    },
  };
}

const Info = ({ info }) => {
  return (
    <>
      {/* <!-- Page Title Begin --> */}
      <section
        className="page-title-bg pt-250 pb-100"
        data-bg-img="assets/img/section-pattern/page-title.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>
                  {info.fields.title}
                  {/* Business consultant finds more <br /> ways to bring business
                  to light */}
                </h2>
                <ul className="list-inline">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>{info.fields.shortTitle}</li>
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
                        src={"https:" + info.fields.shortImage.fields.file.url}
                        height="550"
                        width="1110"
                        alt={info.fields.altText}
                      />
                    </div>
                    {/* <!-- Project Image End --> */}
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <ul className="list-inline project-meta">
                      <li>Category: {info.fields.category}</li>
                      <li>Author: Admin</li>
                    </ul>
                  </div>
                </div>

                <div className="row justify-content-center pb-30">
                  <div className="col-lg-10">
                    <div className="project-details-content">
                      <h3>{info.fields.subtitle1}</h3>

                      <p>{info.fields.content1}</p>
                      <h3>{info.fields.subtitle2}</h3>
                      <p>{info.fields.content2}</p>
                      <h3>{info.fields.subtitle3}</h3>
                      <p>{info.fields.content3}</p>

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

                {/* <div className="row justify-content-center pt-100">
                  <div className="col-lg-10">
                    <!-- Post Pagination Begin -->
                    <div className="post-pagination d-flex align-items-center justify-content-between flex-column flex-md-row">
                      <!-- Single Post Pagination Begin -->
                      <div className="single-post-pagination media align-items-center mb-50 mb-md-0">
                        <div className="pagination-image">
                          <a href="#">
                            <img
                              src="assets/img/post-pegination-1.png"
                              data-rjs="2"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <a
                            href="#"
                            className="d-inline-flex align-items-center"
                          >
                            <img
                              src="assets/img/icons/angle-left.svg"
                              data-rjs="2"
                              className="svg"
                              alt=""
                            />
                            previous
                          </a>
                          <h6>
                            Role of Hedge Funds in Institutional Portfolios:
                            Florida Retirement System
                          </h6>
                        </div>
                      </div>
                      <!-- Single Post Pagination End -->
              
                                  <!-- Single Post Pagination Begin -->
                      <div className="single-post-pagination next media flex-row-reverse align-items-center">
                        <div className="pagination-image">
                          <a href="#">
                            <img
                              src="assets/img/post-pegination-2.png"
                              data-rjs="2"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="media-body text-right">
                          <a
                            href="#"
                            className="d-inline-flex flex-row-reverse align-items-center"
                          >
                            <img
                              src="assets/img/icons/angle-right.svg"
                              alt=""
                              className="svg"
                            />
                            next
                          </a>
                          <h6>
                            Role of Hedge Funds in Institutional Portfolios:
                            Florida Retirement System
                          </h6>
                        </div>
                      </div>
                      <!-- Single Post Pagination End -->
                    </div>
                    <!-- Post Pagination End -->
                  </div>
                </div> */}
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
