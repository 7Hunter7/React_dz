import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  const toggleTheme = () => {
    return {
      type: "TOGGLE_THEME",
    };
  };

  return (
    <div className={`App ${theme}`}>
      <h1>Тема сайта: {theme === "light" ? "Светлая" : "Темная"}</h1>
      <label>
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={theme === "dark"}
        />
        Переключить тему
      </label>
    </div>
  );
};
export default ThemeToggle;
