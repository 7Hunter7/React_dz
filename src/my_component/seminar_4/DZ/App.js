import React from "react";
import { Routes, Router, Route, Link } from "react-router-dom";
import HomePage from "./components/seminar_4/DZ/HomePage";
import AboutPage from "./components/seminar_4/DZ/AboutPage";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/about" element={AboutPage} />
      </Routes>
    </Router>
  );
};

export default App;
