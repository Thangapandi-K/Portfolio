import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo-badge">
          <div className="logo-avatar">TK</div>
          <span>Thangapandi K</span>
        </a>

        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;