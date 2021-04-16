import Link from "next/link";
import Image from "next/image";

const ServiceCard = ({ title, image, description, link, alt }) => {
  return (
    <div className="col-sm-6 single-service-wrapper">
      {/* Single Service Begin */}
      <div className="single-service text-center">
        {/* Icon Begin */}
        <div className="icon">
          <Image src={image} alt={alt} height="65" width="83" />
        </div>
        {/* Icon End  */}

        {/* Content Begin */}
        <div className="content">
          <Link href={link}>
            <a aria-label={"Link to " + title}>
              <h3 className="servTitle">{title}</h3>
            </a>
          </Link>

          <p>{description}</p>
          <Link href={link}>
            <a aria-label={"Link to " + title} className="btn-inline servbtn">
              Know More
            </a>
          </Link>
        </div>
        {/* Content End */}
      </div>
      {/* Single Service End */}
    </div>
  );
};

export default ServiceCard;
