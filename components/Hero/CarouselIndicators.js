const CarouselIndicators = ({ id }) => {
  return (
    <li
      data-target="#carouselExampleIndicators"
      data-slide-to={id}
      className="active bg-light"
    ></li>
  );
};

export default CarouselIndicators;
