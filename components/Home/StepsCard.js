// import Lottie from "react-lottie";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const StepsCard = ({ title, desc, lottie, refe, lotanim }) => {
  return (
    <>
      <div className="col-lg-3 col-sm-6 single-process-wrapper">
        {/* Single Work Process Begin */}
        <div className="single-process text-center">
          {/* Image Begin */}
          <div className="image" ref={refe}>
            {lotanim && <Lottie options={lottie} height={157} width={183} />}
          </div>
          {/* Image End */}

          {/* Content Begin */}
          <div className="content">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          {/* Content End */}
        </div>
        {/* Single Work Process End */}
      </div>
    </>
  );
};

export default StepsCard;
