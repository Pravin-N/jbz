import React from "react";

const Feature = ({ title, text }) => {
  return (
    <div className="col-lg-4 col-md-6">
      {/* Single Feature Begin */}
      <div className="single-feature text-center">
        {/* Feature Image Begin */}
        <div className="image">
          <img src="assets/img/feature/feature-1.png" data-rjs="2" alt="" />
        </div>
        {/* Feature Image End */}

        {/* Feature Content Begin */}
        <div className="content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        {/* Feature Content End */}
      </div>
      {/* Single Feature End */}
    </div>
  );
};

export default Feature;
