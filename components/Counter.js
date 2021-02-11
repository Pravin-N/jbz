import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

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
                  <CountUp end={15} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p>Years of experience</p>
              </div>
            </div>
            {/* End Single Counter */}

            {/* Single Counter */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center text-white">
                <h2 className="count">
                  <CountUp end={1250} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p>Happy Clients</p>
              </div>
            </div>
            {/* End Single Counter */}

            {/* Single Counter */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center text-white">
                <h2 className="count">
                  <CountUp end={1} redraw={true} suffix="k+">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p>Project Done</p>
              </div>
            </div>
            {/* End Single Counter */}

            {/* Single Counter */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center text-white">
                <h2 className="count">
                  <CountUp end={100} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
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
