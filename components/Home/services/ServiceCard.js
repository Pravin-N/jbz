import React from "react";

const ServiceCard = ({ title, image, description }) => {
  return (
    <div className="col-sm-6 single-service-wrapper">
      {/* Single Service Begin */}
      <div className="single-service text-center">
        {/* Icon Begin */}
        <div className="icon">
          <img src={image} data-rjs="2" alt="" />
        </div>
        {/* Icon End  */}

        {/* Content Begin */}
        <div className="content">
          <h4>{title}</h4>
          <p>{description}</p>
          <a href="#" className="btn-inline">
            Read More
          </a>
        </div>
        {/* Content End */}
      </div>
      {/* Single Service End */}
    </div>
  );
};

export default ServiceCard;
