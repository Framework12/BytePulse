import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css"; 
import { FaArrowUp } from "react-icons/fa"; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const percentage = (scrollPosition / maxScroll) * 100;
      setScrollPercentage(percentage);
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`scroll-to-top ${isVisible ? "show" : ""}`}>
        <FaArrowUp onClick={scrollToTop} className="arrow-icon" />
      </div>
      <div id="progressBar">
        <div id="progressInnerBar" style={{ width: `${scrollPercentage}%` }}></div>
      </div>
    </>
  );
};

export default ScrollToTopButton;
