const Prices = ({ license, price, href, id, active, onClick }) => {
  const handleClick = () => {
    setActive(true);
  };
  return (
    <>
      <li className="nav-item col-lg-3 col-sm-6" role="presentation">
        <a
          href={href}
          className={`nav-link text-center ${active ? "active" : ""}`}
          data-toggle="tab"
          aria-selected="true"
          id={id}
          role="tab"
          aria-label={license}
          onClick={onClick}
        >
          <h2>{license}</h2>
          <h3>{price}</h3>
        </a>
      </li>
    </>
  );
};

export default Prices;
