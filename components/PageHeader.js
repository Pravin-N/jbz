import React from "react";

const AboutHeader = () => {
  return (
    <>
      {/* Page Title Begin */}
      <section
        className="page-title-bg pt-250 pb-100"
        data-bg-img="assets/img/section-pattern/page-title.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>About</h2>
                <ul className="list-inline">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>About</li>
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
