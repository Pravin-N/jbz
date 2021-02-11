import React, { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    var preload = document.querySelector(".preloader");
    window.onload = function () {
      preload.classList.add("hide");
      preload.classList.remove("show");
    };
  }, []);
  return (
    <>
      {/* Preloader Begin  */}
      <div className="preloader w-100 h-100 position-fixed">
        <div className="loader">
          <img className="icon" src="assets/img/preloader.png" alt="" />
        </div>
      </div>
      {/* Preloader End  */}
    </>
  );
};

export default Preloader;
