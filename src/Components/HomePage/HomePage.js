import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="overlayBackground">
      <div className="HomePage_info" id="/">
        <div className="homepage_container">
          <h1 className="user_name_heading">Hello, I'm Nilay Patel.</h1>
          <h2 className="info_heading">I am an Engineer.</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
