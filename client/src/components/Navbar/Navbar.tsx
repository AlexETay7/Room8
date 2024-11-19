import React from "react";
import "./Navbar.css";
import ToggleTheme from "../ThemeToggle/ToggleTheme";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Room<span className="highlight">8</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="navbar-link">
            About
          </a>
        </li>
        <li>
          <a href="/features" className="navbar-link">
            Matches
          </a>
        </li>
        <li>
          <a href="/profile" className="navbar-link">
            My Profile
          </a>
        </li>
        <li>
          <a href="/contact" className="navbar-link navbar-cta">
            Login
          </a>
        </li>
        {/* <li>
          <ToggleTheme />
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
