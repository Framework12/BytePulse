import React from "react";
import { FiMenu, FiArrowLeft } from 'react-icons/fi';

const MenuIcon = ({ isCollapsed, toggleCollapse }) => {
  return (
    <div className="menu-icon" onClick={toggleCollapse}>
      {isCollapsed ? <FiMenu /> : <FiArrowLeft />}
    </div>
  );
};

export default MenuIcon;
