import React from 'react';
import "./scrollup.css";

const Scrollup = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
            // Check if the vertical scroll position is greater than or equal to 560 pixels.
            // If it is, add the "show-scroll" class to the element with the "scrollup" class,
            // making it visible. Otherwise, remove the "show-scroll" class, hiding the element.
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })
  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default Scrollup;
