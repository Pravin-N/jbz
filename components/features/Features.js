import Feature from "./Feature";

// TODO: replace the text
const featureData = [
  {
    title: "Mainland License",
    text: "Something about Mainland",
  },
  {
    title: "Freezone License",
    text: "Something about freezone",
  },
  {
    title: "Offshore License",
    text: "Something about offshore",
  },
];

const Features = () => {
  return (
    <>
      {/* Feature Begin */}
      <section
        className="pt-120 pb-90 section-pattern l-gray"
        data-bg-img="assets/img/section-pattern/feature-pattern.png"
      >
        <div className="container">
          <div className="row justify-content-center">
            {featureData.map(({ title, text }) => {
              return <Feature title={title} text={text} key={title} />;
            })}
          </div>
        </div>
      </section>
      {/* Feature End */}
    </>
  );
};

export default Features;
