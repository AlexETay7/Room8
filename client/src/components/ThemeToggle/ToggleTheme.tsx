import React, { useState } from "react";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/classic.css"; // Import the specific toggle's CSS

const ToggleTheme: React.FC = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <Classic
      toggled={isDark}
      toggle={toggleTheme}
      duration={500}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

export default ToggleTheme;
