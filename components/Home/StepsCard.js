import Lottie from "react-lottie";
const StepsCard = ({ title, desc, lottie }) => {
  return (
    <>
      <div className="col-lg-3 col-sm-6 single-process-wrapper">
        {/* Single Work Process Begin */}
        <div className="single-process text-center">
          {/* Image Begin */}
          <div className="image">
            <Lottie options={lottie} height={157} width={183} />
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
