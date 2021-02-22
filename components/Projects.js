import React from "react";

const Projects = () => {
  return (
    <>
      {/* Project Begin */}
      <section
        className="pt-120 pb-90 section-pattern l-gray"
        data-bg-img="assets/img/section-pattern/case-study-pattern.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h3>Case Studies</h3>
                <h2>Our Recent Project</h2>
                <p>
                  Mutual has cannot beauty indeed now sussex merely you. It
                  possible no husbands jennings ye offended packages pleasant
                  he. Remainder recommend who applauded departure joy.
                </p>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              {/* Porject Nav Begin */}
              <div className="project-nav text-center mb-30">
                <div className="nav justify-content-center align-items-center">
                  <ul className="project_filter list-inline">
                    <li className="active" data-filter="*">
                      <span className="filter-btn">All</span>
                    </li>
                    <li className="" data-filter=".financial">
                      <span className="filter-btn">Financial</span>
                    </li>
                    <li className="" data-filter=".business">
                      <span className="filter-btn">Business</span>
                    </li>
                    <li className="" data-filter=".funds">
                      <span className="filter-btn">Funds</span>
                    </li>
                    <li className="" data-filter=".investment">
                      <span className="filter-btn">Investment</span>
                    </li>
                    <li className="" data-filter=".sales">
                      <span className="filter-btn">Sales</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Project Nav End */}
            </div>
          </div>

          <div className="row project-items grid">
            {/* Single Project Begin */}
            <div className="col-lg-6 grid-item sales business">
              <div className="single-project-item">
                {/* Project Image Begin */}
                <div className="image">
                  <img
                    src="assets/img/project/project-1.png"
                    data-rjs="2"
                    alt=""
                  />
                </div>
                {/* Project Image End */}

                {/* Project Body Begin */}
                <div className="project-body">
                  <h3>
                    <a href="#">
                      Business consultant finds more ways to bring business to
                      light
                    </a>
                  </h3>
                  <p className="project-meta">
                    Client:<span>Alto Palermo S.A.</span>
                  </p>
                  <p>
                    Imprudence attachment him his for sympathize. Large above be
                    to means. Dashwood do provided stronger is. But discretion
                    frequently.
                  </p>
                  <a href="#" className="btn-inline">
                    Read More
                  </a>
                </div>
                {/* Project Body End */}
              </div>
            </div>
            {/* Single Project End */}

            {/* Single Project Begin */}
            <div className="col-lg-6 grid-item sales financial">
              <div className="single-project-item">
                {/* Project Image Begin */}
                <div className="image">
                  <img
                    src="assets/img/project/project-2.png"
                    data-rjs="2"
                    alt=""
                  />
                </div>
                {/* Project Image End */}

                {/* Project Body Begin */}
                <div className="project-body">
                  <h3>
                    <a href="#">
                      Business consultant finds more ways to bring business to
                      light
                    </a>
                  </h3>
                  <p className="project-meta">
                    Client:<span>Alto Palermo S.A.</span>
                  </p>
                  <p>
                    Imprudence attachment him his for sympathize. Large above be
                    to means. Dashwood do provided stronger is. But discretion
                    frequently.
                  </p>
                  <a href="#" className="btn-inline">
                    Read More
                  </a>
                </div>
                {/* Project Body End */}
              </div>
            </div>
            {/* Single Project End */}

            {/* Single Project Begin */}
            <div className="col-lg-6 grid-item investment business">
              <div className="single-project-item">
                {/* Project Image Begin */}
                <div className="image">
                  <img
                    src="assets/img/project/project-3.png"
                    data-rjs="2"
                    alt=""
                  />
                </div>
                {/* Project Image End */}

                {/* Project Body Begin */}
                <div className="project-body">
                  <h3>
                    <a href="#">
                      Business consultant finds more ways to bring business to
                      light
                    </a>
                  </h3>
                  <p className="project-meta">
                    Client:<span>Alto Palermo S.A.</span>
                  </p>
                  <p>
                    Imprudence attachment him his for sympathize. Large above be
                    to means. Dashwood do provided stronger is. But discretion
                    frequently.
                  </p>
                  <a href="#" className="btn-inline">
                    Read More
                  </a>
                </div>
                {/* Project Body End */}
              </div>
            </div>
            {/* Single Project End */}

            {/* Single Project Begin */}
            <div className="col-lg-6 grid-item financial funds">
              <div className="single-project-item">
                {/* Project Image Begin */}
                <div className="image">
                  <img
                    src="assets/img/project/project-4.png"
                    data-rjs="2"
                    alt=""
                  />
                </div>
                {/* Project Image End */}

                {/* Project Body Begin */}
                <div className="project-body">
                  <h3>
                    <a href="#">
                      Business consultant finds more ways to bring business to
                      light
                    </a>
                  </h3>
                  <p className="project-meta">
                    Client:<span>Alto Palermo S.A.</span>
                  </p>
                  <p>
                    Imprudence attachment him his for sympathize. Large above be
                    to means. Dashwood do provided stronger is. But discretion
                    frequently.
                  </p>
                  <a href="#" className="btn-inline">
                    Read More
                  </a>
                </div>
                {/* Project Body End */}
              </div>
            </div>
            {/* Single Project End */}
          </div>
        </div>
      </section>
      {/* Project End */}
    </>
  );
};

export default Projects;
