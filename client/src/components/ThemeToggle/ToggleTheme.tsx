import React from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Import moon and sun icons

const ToggleTheme: React.FC = () => {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const currentTheme = document.documentElement.getAttribute("data-theme");

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {currentTheme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}{" "}
      {/* Render sun or moon */}
    </button>
  );
};

export default ToggleTheme;
