import Feature from "./Feature";

// TODO: replace the text
const featureData = [
  {
    title: "Mainland License",
    text:
      "Get a business license in Mainland Dubai and still control 100% of the ownership and have trusted local partner",
    image: "/assets/img/feature/dubai Mainland license.jpg",
    alt: "Mainland Business Setup in Dubai",
  },
  {
    title: "Freezone License",
    text:
      "Freezones licenses offer more control and benefits than the Mainland. Get a business license in any of the freezones across UAE",
    image: "/assets/img/feature/freezone business license.jpg",
    alt: "Freezone Business Setup in Dubai",
  },
  {
    title: "Offshore License",
    text:
      "Businesses registered outside UAE can easily open an offshore company in UAE to protect assets & intellectual property",
    image: "/assets/img/feature/offshore business license.jpg",
    alt: "Offshore Business Setup in Dubai",
  },
];

const Features = () => {
  return (
    <>
      {/* Feature Begin */}
      <section
        className="pt-60 pb-90 section-pattern l-gray"
        data-bg-img="assets/img/section-pattern/feature-pattern.png"
      >
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>Multiple Options of Starting a Business in UAE</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {featureData.map(({ title, text, image, alt }) => {
              return (
                <Feature
                  title={title}
                  text={text}
                  key={title}
                  image={image}
                  alt={alt}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* Feature End */}
    </>
  );
};

export default Features;
