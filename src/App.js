import React, { useState } from "react";
import HorizontalNavBar from "./Components/HorizontalNavBar/HorizontalNavBar.js";
import RightNavBar from "./Components/RightNavBar/RightNavBar.js";
import Portrait from "./Components/Portrait/Portrait.js";
import HomePage from "./Components/HomePage/HomePage.js";
import AboutMePage from "./Components/AboutMePage/AboutMePage.js";
import ProjectPage from "./Components/ProjectsPage/ProjectsPage.js";
import ContactMePage from "./Components/ContactMePage/ContactMePage.js";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const RightNavBarContext = React.createContext({});

function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  return (
    <BrowserRouter>
      <RightNavBarContext.Provider value={{ isShowSidebar, setIsShowSidebar }}>
        <div className="App">
          <div
            className="sub_app"
            onClick={() => {
              if (isShowSidebar === true) {
                setIsShowSidebar(!isShowSidebar);
              }
            }}
          >
            <div
              className={`App__overlay App__container__overlay--${
                isShowSidebar ? "show" : "hide"
              }`}
            ></div>

            <HorizontalNavBar />
          </div>
          <RightNavBar />
          <Portrait />
          <div className="temp1">
            <HomePage />
          </div>
          <div className="temp1">
            <AboutMePage />
          </div>
          <div className="temp1">
            <ProjectPage />
          </div>
          <div className="temp1">
            <ContactMePage />
          </div>
          {/* <Switch> */}
          {/* <Route path="/" exact component={HomePage} />
          <Route path="/aboutme" component={AboutMePage} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/contactme" component={ContactMePage} /> */}
          {/* </Switch> */}
        </div>
      </RightNavBarContext.Provider>
    </BrowserRouter>
  );
}

export default App;
