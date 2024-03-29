import Link from "next/link";

const AboutHeader = ({ header }) => {
  return (
    <>
      {/* Page Title Begin */}
      <section className="page-title-bg pt-150 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>{header}</h2>
                <ul className="list-inline">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>{header}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Title End */}
    </>
  );
};

export default AboutHeader;
