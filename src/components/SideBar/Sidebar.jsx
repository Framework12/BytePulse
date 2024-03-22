import React, { useState,useEffect} from "react";
import { FiMenu, FiArrowLeft, FiHome, FiGlobe, FiStar, FiBookmark } from 'react-icons/fi';
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollapsed(true); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="menu-icon" onClick={toggleCollapse}>
        {isCollapsed ? <FiMenu /> : <FiArrowLeft />}
      </div>
      <div className="sidebar-content">
        <ul>
          <li>
            <Link to="/home">
              <FiHome className="sidebar-icon" />
              <span className="link-text">{isCollapsed ? null : "Latest Tech News"}</span>
            </Link>
          </li>
          <li>
            <Link to="/us">
              <FiGlobe className="sidebar-icon" />
              <span className="link-text">{isCollapsed ? null : "US Tech News"}</span>
            </Link>
          </li>
          <li>
            <Link to="/india">
              <FiStar className="sidebar-icon" />
              <span className="link-text">{isCollapsed ? null : "Trending in India"}</span>
            </Link>
          </li>
          <li>
            <Link to="/bookmarks">
              <FiBookmark className="sidebar-icon" />
              <span className="link-text">{isCollapsed ? null : "Bookmarks"}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;