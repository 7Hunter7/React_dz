import React, { useState } from "react";
import Content from "./Content";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Content theme={theme} />
    </div>
  );
};

export default ThemeSwitcher;
