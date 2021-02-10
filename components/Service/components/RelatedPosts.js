import React from "react";

const RelatedPosts = () => {
  return (
    <>
      {/* Widget Related Post Begin */}
      <div className="widget widget_related_post">
        {/* Widget Title Begin  */}
        <div className="widget-title">
          <h4>Related Posts</h4>
        </div>
        {/* Widget Title End  */}

        {/* Single Related Post Begin */}
        <div className="single-post">
          <div className="post-content">
            <span className="posted-on">18 Feb, 2019</span>
            <h5>
              <a href="#">How Can You Maximize Your Savings in the New Year</a>
            </h5>
          </div>
        </div>
        {/* Single Related Post End */}

        {/* Single Related Post Begin */}
        <div className="single-post">
          <div className="post-content">
            <span className="posted-on">18 Feb, 2019</span>
            <h5>
              <a href="#">
                How to Determine Your #1 Financial Goal For the Year
              </a>
            </h5>
          </div>
        </div>
        {/* Single Related Post End */}

        {/* Single Related Post Begin */}
        <div className="single-post">
          <div className="post-content">
            <span className="posted-on">18 Feb, 2019</span>
            <h5>
              <a href="#">
                How to Break Into Your Dream Career When No One is Hiring
              </a>
            </h5>
          </div>
        </div>
        {/* Single Related Post End */}
      </div>
      {/* Widget Related Post End */}
    </>
  );
};

export default RelatedPosts;
