import Link from "next/link";
import Image from "next/image";

const ServiceCard = ({ title, image, description, link }) => {
  return (
    <div className="col-sm-6 single-service-wrapper">
      {/* Single Service Begin */}
      <div className="single-service text-center">
        {/* Icon Begin */}
        <div className="icon">
          <Image src={image} data-rjs="2" alt="" height="65" width="83" />
        </div>
        {/* Icon End  */}

        {/* Content Begin */}
        <div className="content">
          <Link href={link}>
            <a>
              <h4>{title}</h4>
            </a>
          </Link>
          <p>{description}</p>
          <Link href={link}>
            <a className="btn-inline">Read More</a>
          </Link>
        </div>
        {/* Content End */}
      </div>
      {/* Single Service End */}
    </div>
  );
};

export default ServiceCard;
