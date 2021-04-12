import Image from "next/image";
import Link from "next/link";

const Feature = ({ title, text, image, alt, slug }) => {
  return (
    <div className="col-lg-4 col-md-6">
      {/* Single Feature Begin */}
      <div className="single-feature text-center">
        {/* Feature Image Begin */}
        <Link href={"/business-setup/" + slug}>
          <a aria-label={"image for " + title}>
            <div className="image">
              <Image
                src={"https:" + image}
                height="263"
                width="350"
                alt={alt}
              />
            </div>
          </a>
        </Link>
        {/* Feature Image End */}

        {/* Feature Content Begin */}
        <div className="content">
          <Link href={"/business-setup/" + slug}>
            <a aria-label={"link to " + title}>
              <h3>{title}</h3>
            </a>
          </Link>

          <p>{text}</p>
        </div>
        {/* Feature Content End */}
      </div>
      {/* Single Feature End */}
    </div>
  );
};

export default Feature;
