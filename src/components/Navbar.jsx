import React from "react";

const Navbar = ({ sidebarCollapse }) => {
  return (
    <nav className="navbar">
      <button id="checkSidebar" onClick={sidebarCollapse}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};
export default Navbar;
