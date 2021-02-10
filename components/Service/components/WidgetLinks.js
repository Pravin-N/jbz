import React from "react";

const WidgetLinks = () => {
  return (
    <>
      {/* Widget Categories Begin */}
      <div className="widget widget_categories">
        <div className="widget-title">
          <h4>Categories</h4>
        </div>
        <ul>
          <li>
            <a href="#">Financial Planning</a>
          </li>
          <li>
            <a href="#">Busines Campaign</a>
          </li>
          <li>
            <a href="#">Advanced Analytics</a>
          </li>
          <li>
            <a href="#">Sales & Trading</a>
          </li>
          <li>
            <a href="#">Saving Strategy</a>
          </li>
          <li>
            <a href="#">Market Research</a>
          </li>
        </ul>
      </div>
      {/* End Categories End */}
    </>
  );
};

export default WidgetLinks;
