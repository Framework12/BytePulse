import React, { useState } from "react";
import "./ScrollToTopButton.css"; 
import { FaArrowUp } from "react-icons/fa"; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div className={`scroll-to-top ${isVisible ? "show" : ""}`}>
      <FaArrowUp onClick={scrollToTop} className="arrow-icon" />
    </div>
  );
};

export default ScrollToTopButton;
