import React from "react";
import Link from "next/link";

const services = [
  {
    name: "Business Setup / Licensing",
    link: "/business-setup-pro-services/business-setup-uae",
  },
  {
    name: "Business Center",
    link: "/business-setup-pro-services/business-center-dubai-service",
  },
  {
    name: "PRO Services",
    link: "/business-setup-pro-services/pro-service",
  },
  {
    name: "VAT Registration",
    link: "/business-setup-pro-services/vat-registration-service",
  },
  {
    name: "Trademarks & Patent",
    link: "/business-setup-pro-services/trademarks-patent-service",
  },
];

const WidgetLinks = () => {
  return (
    <>
      {/* Widget Categories Begin */}
      <div className="widget widget_categories">
        <div className="widget-title">
          <h4>Our Services</h4>
        </div>
        <ul>
          {services.map((service) => {
            return (
              <li>
                <Link href={service.link}>
                  <a>{service.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* End Categories End */}
    </>
  );
};

export default WidgetLinks;
