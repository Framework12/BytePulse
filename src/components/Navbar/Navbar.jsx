import React, { useState, useEffect } from "react";
import { ReactNavbar } from "overlay-navbar";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { FaRegNewspaper, FaGlobe, FaBookmark, FaFlag } from "react-icons/fa";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1300);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen && (
        <ReactNavbar
          navColor1="#131c2d"
          navColor2="#cfcfcf"
          logo={logo}
          link1Text={
            <>
              <FaRegNewspaper /> Trending In Tech
            </>
          }
          link2Text={
            <>
              <FaGlobe /> Top Tech In US
            </>
          }
          link3Text={
            <>
              <FaFlag /> Trending In India
            </>
          }
          link4Text={
            <>
              <FaBookmark /> Bookmarks
            </>
          }
          link1Url="/home"
          link2Url="/us"
          link3Url="/india"
          link4Url="/bookmarks"
          link3Margin="10px"
          link1Margin="10px"
          link4Margin="10px"
          link1Padding="10px"
          link4Padding="10px"
          link1ColorHover="green"
          link1Color="#333"
          link1Family="cursive"
          link1Size="2vmax"
          linkStyle={{ display: "flex", alignItems: "center" }}
          iconStyle={{ marginRight: "20px" }}
        />
      )}
    </>
  );
};

export default Navbar;
