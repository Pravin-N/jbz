import Image from "next/image";

const Feature = ({ title, text, image, alt }) => {
  return (
    <div className="col-lg-4 col-md-6">
      {/* Single Feature Begin */}
      <div className="single-feature text-center">
        {/* Feature Image Begin */}
        <div className="image">
          <Image src={image} height="263" width="350" data-rjs="2" alt={alt} />
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
