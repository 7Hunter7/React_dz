import React, { useState } from "react";
import Content from "./Content";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  function switchTheme() {
    if (theme === "light") {
      setTheme("dark");
      document.querySelector("body").style.backgroundColor = "black";
    } else {
      setTheme("light");
      document.querySelector("body").style.backgroundColor = "white";
    }
  }

  return (
    <div>
      <button onClick={switchTheme}>Switch Theme</button>
      <Content theme={theme} />
    </div>
  );
};

export default ThemeSwitcher;
