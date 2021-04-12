import Lottie from "react-lottie";
import step1 from "../../public/assets/anim/step1-prepare-documents.json";
import step2 from "../../public/assets/anim/step2-issue-business-license.json";
import step3 from "../../public/assets/anim/step3-Get-Investor-visa.json";
import step4 from "../../public/assets/anim/step4-bank-account.json";

const Steps = () => {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: step1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: step2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: step3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: step4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* Work Process Begin */}
      <section className="pt-120 pb-70 section-pattern l-gray steps">
        <img
          src="/assets/img/circle.svg"
          className="stepSvg1"
          alt="background shape 1"
        />
        <img
          src="/assets/img/circle.svg"
          className="heroSvg3"
          alt="background shape 2"
        />
        <img
          src="/assets/img/filled circle.svg"
          className="heroSvg5"
          alt="background shape 3"
        />
        <img
          src="/assets/img/cross.svg"
          className="heroSvg4"
          alt="background shape 4"
        />
        <img
          src="/assets/img/curvyline.svg"
          className="curline1"
          alt="background shape 5"
        />
        <img
          src="/assets/img/curvyline.svg"
          className="curline2"
          alt="background shape 6"
        />
        <img
          src="/assets/img/curvyline.svg"
          className="curline3"
          alt="background shape 7"
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h3>Our Business Setup Process</h3>
                <h2>4 Simple Steps That Make It a Stress Free Process</h2>
                <p>
                  To start a business in UAE and get the necessary approvals can
                  seem like a daunting process. By working with us we can make
                  setting up a business in UAE a much simpler process. Below are
                  the steps that we use to setup a business in UAE.
                </p>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row process-bg">
            <div className="col-lg-3 col-sm-6 single-process-wrapper">
              {/* Single Work Process Begin */}
              <div className="single-process text-center">
                {/* Image Begin */}
                <div className="image">
                  <Lottie options={defaultOptions1} height={157} width={183} />
                </div>
                {/* Image End */}

                {/* Content Begin */}
                <div className="content">
                  <h3>Prepare Documents</h3>
                  <p>
                    Provide a detailed list of documents required from you and
                    how to obtain these if not available.
                  </p>
                </div>
                {/* Content End */}
              </div>
              {/* Single Work Process End */}
            </div>
            <div className="col-lg-3 col-sm-6 single-process-wrapper">
              {/* Single Work Process Begin */}
              <div className="single-process text-center">
                {/* Image Begin */}
                <div className="image">
                  <Lottie options={defaultOptions2} height={157} width={183} />
                </div>
                {/* Image End */}

                {/* Content Begin */}
                <div className="content">
                  <h3>Issue Business license</h3>
                  <p>
                    Approach the relevant government authorities on your behalf
                    to get the necessary license and approvals.
                  </p>
                </div>
                {/* Content End */}
              </div>
              {/* Single Work Process End */}
            </div>
            <div className="col-lg-3 col-sm-6 single-process-wrapper">
              {/* Single Work Process Begin */}
              <div className="single-process text-center">
                {/* Image Begin */}
                <div className="image">
                  <Lottie options={defaultOptions3} height={157} width={183} />
                </div>
                {/* Image End */}

                {/* Content Begin */}
                <div className="content">
                  <h3>Get Investor Visa</h3>
                  <p>
                    Obtain the visa so you could immediately start doing
                    business with your new license and travel in and out of UAE.
                  </p>
                </div>
                {/* Content End */}
              </div>
              {/* Single Work Process End */}
            </div>
            <div className="col-lg-3 col-sm-6 single-process-wrapper">
              {/* Single Work Process Begin */}
              <div className="single-process text-center">
                {/* Image Begin */}
                <div className="image">
                  <Lottie options={defaultOptions4} height={157} width={183} />
                </div>
                {/* Image End */}

                {/* Content Begin */}
                <div className="content">
                  <h3>Open Bank Account</h3>
                  <p>
                    Open your business bank account with one of the top National
                    or international banks in UAE.
                  </p>
                </div>
                {/* Content End */}
              </div>
              {/* Single Work Process End */}
            </div>
          </div>
        </div>
      </section>
      {/* Work Process End */}
    </>
  );
};

export default Steps;
