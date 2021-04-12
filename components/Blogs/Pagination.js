const Pagination = () => {
  return (
    <>
      <div className="col-12">
        {/* Blog Pagination Begin */}
        <div className="pagination">
          {/* Start theme pagination */}
          <ul className="nav align-items-center">
            <li className="nav-btn prev">
              <a href="#" aria-label="Twitter">
                <img
                  src="assets/img/icons/pagination-left.svg"
                  className="svg"
                  alt="navigate left"
                />
                <img
                  src="assets/img/icons/angle-left-red.svg"
                  className="svg"
                  alt="navigate left arrow"
                />
              </a>
            </li>
            <li>
              <span className="active">1</span>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li className="nav-btn next">
              <a href="#">
                <img
                  src="assets/img/icons/pagination-right.svg"
                  className="svg"
                  alt="navigate right"
                />
                <img
                  src="assets/img/icons/angle-right-red.svg"
                  className="svg"
                  alt="navigate right arrow"
                />
              </a>
            </li>
          </ul>
        </div>
        {/* Blog Pagination End */}
      </div>
    </>
  );
};

export default Pagination;
