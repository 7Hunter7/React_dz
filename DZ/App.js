import React from "react";
import { Provider } from "react-redux";
import ThemeToggle from "./components/seminar_5/DZ/ThemeToggle";
import store from "./components/seminar_5/DZ/store";
import "./components/seminar_5/DZ/Theme.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ThemeToggle />
      </div>
    </Provider>
  );
}

export default App;
