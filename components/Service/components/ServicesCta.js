import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesCta = () => {
  return (
    <>
      {/* Widget Ad Begin */}
      <div className="widget widget_ad">
        <Link href="\contact">
          <a>
            <Image
              src="/assets/img/business setup dubai contact image.png"
              alt="business setup and company formation contact info image"
              width="350"
              height="305"
            />
          </a>
        </Link>
      </div>
      {/* Widget Ad End */}
    </>
  );
};

export default ServicesCta;
