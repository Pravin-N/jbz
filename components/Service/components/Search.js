import React from "react";

const Search = () => {
  return (
    <>
      {/* Widget Search Begin */}
      <div className="widget widget_search">
        <form method="GET">
          <div className="input-group">
            <input
              placeholder="Search here...."
              className="theme-input-style"
            />
            <button type="submit" className="submit-btn">
              <img src="assets/img/icons/search.svg" className="svg" alt="" />
            </button>
          </div>
        </form>
      </div>
      {/* Widget Search End */}
    </>
  );
};

export default Search;
