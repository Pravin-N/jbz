import HeroSlide from "./HeroSlide";
import CarouselIndicators from "./CarouselIndicators";

const Hero = () => {
  const heroData = [
    {
      id: "0",
      line1: "Setup Your",
      bold: "Business",
      line3: "in",
      line4: "Dubai Today",
      para: "Something about setting up a business which grabs more attention",
      contact: "Get Started",
      active: true,
    },
    {
      id: "1",
      line1: "Hassle Free",
      bold: "Business Setup",
      line3: "Services",
      line4: "in UAE",
      para: "Something about setting up a business which grabs more attention",
      contact: "Get Free Quote",
      active: false,
    },
    {
      id: "2",
      line1: "Start a Company in",
      bold: "Mainland or Freezone",
      line3: "of",
      line4: "Your Choice",
      para: "Something about setting up a business which grabs more attention",
      contact: "Free Consultation",
      active: false,
    },
    {
      id: "3",
      line1: "Professional",
      bold: "PRO Services",
      line3: "in",
      line4: "Dubai",
      para: "Something about setting up a business which grabs more attention",
      contact: "Get Free Quote",
      active: false,
    },
  ];

  // TODO: change the para
  return (
    <>
      <section
        className="banner section-pattern"
        data-bg-img="assets/img/section-pattern/slider-pattern.png"
      >
        <div
          id="carouselExampleIndicators"
          className="carousel slide banner-slider owl-carousel d-flex align-items-center justify-content-center"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {heroData.map((singleData) => {
              return (
                <CarouselIndicators id={singleData.id} key={singleData.id} />
              );
            })}
          </ol>
          <div className="carousel-inner">
            {heroData.map((singleData) => {
              return (
                <HeroSlide
                  line1={singleData.line1}
                  bold={singleData.bold}
                  line3={singleData.line3}
                  line4={singleData.line4}
                  para={singleData.para}
                  contact={singleData.contact}
                  active={singleData.active}
                  key={singleData.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
