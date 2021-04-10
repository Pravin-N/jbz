import Carousel from "react-bootstrap/Carousel";
import HeroSlide from "./HeroSlide";

import { useEffect } from "react";

const Hero = () => {
  // const [count, setCount] = useState(0);

  const heroData = [
    {
      id: "0",
      line1: "Setup Your",
      bold: "Business",
      line3: "in",
      line4: "Dubai Today",
      para:
        "With more than 10 years of experience, we have the expertise and know how to help your business get started in Dubai or UAE immediately.",
      contact: "Get Started",
      active: true,
      image: "/assets/img/banner/Dubai business setup image.png",
      alt: "Dubai businesss setup image",
    },
    {
      id: "1",
      line1: "Hassle Free",
      bold: "Business Setup",
      line3: "Services",
      line4: "in UAE",
      para:
        "Stop wasting time trying to figure out the necessary license requirements to start your business. Contact us and we will do that for you.",
      contact: "Get Free Quote",
      active: false,
      image: "/assets/img/banner/UAE business setup.png",
      alt: "UAE business setup",
    },
    {
      id: "2",
      line1: "Start a Company in",
      bold: "Mainland or Freezone",
      line3: "of",
      line4: "Your Choice",
      para:
        "Worried about ownership, start a business in any freezone in UAE and own 100% of your business.",
      contact: "Free Consultation",
      active: false,
      image: "/assets/img/banner/freezone business setup.png",
      alt: "",
    },
    {
      id: "3",
      line1: "Professional",
      bold: "PRO Services",
      line3: "in",
      line4: "Dubai",
      para:
        "We provide pro services to help your business get employee visas and other regulatory approvals, so you can focus on your core business rather than government formalities.",
      contact: "Get Free Quote",
      active: false,
      image: "/assets/img/banner/PRO services.png",
      alt: "PRO Services Dubai",
    },
  ];

  useEffect(() => {}, [heroData]);

  // TODO: change the para
  return (
    <>
      <section className="banner section-pattern">
        <img src="/assets/img/circle.svg" className="heroSvg1" />
        <Carousel controls={false}>
          {heroData.map((singleData) => {
            return (
              <Carousel.Item key={singleData.id}>
                <div
                  id="carouselExampleIndicators"
                  className="slide banner-slider owl-carousel d-flex align-items-center justify-content-center"
                >
                  <img src="/assets/img/circle.svg" className="heroSvg2" />
                  <img src="/assets/img/circle.svg" className="heroSvg3" />
                  <img
                    src="/assets/img/filled circle.svg"
                    className="heroSvg4"
                  />
                  <img src="/assets/img/cross.svg" className="heroSvg5" />

                  <div className="">
                    <HeroSlide
                      line1={singleData.line1}
                      bold={singleData.bold}
                      line3={singleData.line3}
                      line4={singleData.line4}
                      para={singleData.para}
                      contact={singleData.contact}
                      key={singleData.id}
                      image={singleData.image}
                      alt={singleData.alt}
                    />
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    </>
  );
};

export default Hero;
