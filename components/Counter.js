import React from "react";

const Counter = () => {
  return (
    <>
      {/* Counter Begin */}
      <section className="pt-120 pb-70 gradient-bg">
        <div className="container">
          <div className="row align-items-center">
            {/* Single Counter */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center text-white">
                <h2 className="count">
                  <span>15</span>
                </h2>
                <p>Years of experience</p>
              </div>
            </div>
            {/* End Single Counter */}

            {/* Single Counter */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center text-white">
                <h2 className="count">
                  <span>1250</span>+
                </h2>
                <p>Happy Clients</p>
              </div>
            </div>
            {/* End Single Counter */}

            {/* Single Counter */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center text-white">
                <h2 className="count">
                  <span>1</span>k+
                </h2>
                <p>Project Done</p>
              </div>
            </div>
            {/* End Single Counter */}

            {/* Single Counter */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center text-white">
                <h2 className="count">
                  <span>100</span>+
                </h2>
                <p>Giving Consultancy</p>
              </div>
            </div>
            {/* End Single Counter */}
          </div>
        </div>
      </section>
      {/* Counter End */}
    </>
  );
};

export default Counter;
