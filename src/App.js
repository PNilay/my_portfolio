import React, { useState } from "react";
import HorizontalNavBar from "./Components/HorizontalNavBar/HorizontalNavBar.js";
import RightNavBar from "./Components/RightNavBar/RightNavBar.js";
import HomePage from "./Components/HomePage/HomePage.js";
import "./App.scss";

export const RightNavBarContext = React.createContext({});

function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  return (
    <RightNavBarContext.Provider value={{ isShowSidebar, setIsShowSidebar }}>
      <div className="App">
        <div
          className={`App__overlay App__container__overlay--${
            isShowSidebar ? "show" : "hide"
          }`}
        ></div>
        <HorizontalNavBar />
        <RightNavBar />
        <HomePage />
      </div>
    </RightNavBarContext.Provider>
  );
}

export default App;
