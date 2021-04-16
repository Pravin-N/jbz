import { useRef } from "react";
import useVisible from "../../components/useIsVisible";

import step1 from "../../public/assets/anim/step1-prepare-documents.json";
import step2 from "../../public/assets/anim/step2-issue-business-license.json";
import step3 from "../../public/assets/anim/step3-Get-Investor-visa.json";
import step4 from "../../public/assets/anim/step4-bank-account.json";
import StepsCard from "./StepsCard";

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

  const elemRef1 = useRef();
  const elemRef2 = useRef();
  const elemRef3 = useRef();
  const elemRef4 = useRef();

  const lotanim1 = useVisible(elemRef1);
  const lotanim2 = useVisible(elemRef2);
  const lotanim3 = useVisible(elemRef3);
  const lotanim4 = useVisible(elemRef4);

  const data = [
    {
      id: "1",
      title: "Prepare Documents",
      lottie: defaultOptions1,
      desc:
        "Provide a detailed list of documents required for setting up the business and suggest ways to obtain these if not available.",
      refe: elemRef1,
      lotanim: lotanim1,
    },
    {
      id: "2",
      title: "Issue Business license",
      lottie: defaultOptions2,
      desc:
        "Approach the relevant government authorities on your behalf to get the necessary license and approvals.",
      refe: elemRef2,
      lotanim: lotanim2,
    },
    {
      id: "3",
      title: "Get Investor Visa",
      lottie: defaultOptions3,
      desc:
        "Obtain the visa so you could immediately start doing business with your new license and travel in and out of UAE.",
      refe: elemRef3,
      lotanim: lotanim3,
    },
    {
      id: "4",
      title: "Open Bank Account",
      lottie: defaultOptions4,
      desc:
        "Open your business bank account with any of the top National or International banks in UAE.",
      refe: elemRef4,
      lotanim: lotanim4,
    },
  ];

  return (
    <>
      {/* Work Process Begin */}
      <section className="pt-120 pb-70 section-pattern l-gray steps">
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
            {data.map(({ id, title, desc, lottie, refe, lotanim }) => {
              return (
                <StepsCard
                  key={id}
                  title={title}
                  lottie={lottie}
                  desc={desc}
                  refe={refe}
                  lotanim={lotanim}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* Work Process End */}
    </>
  );
};

export default Steps;
