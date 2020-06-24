import React, { useContext } from "react";
import BurgerButton from "../BurgerButton/BurgerButton";
import { RightNavBarContext } from "../../App";
import "./RightNavBar.scss";
// import { Links, Link } from "react-router-dom";
import { Link } from "react-scroll";
const RightNavBar = () => {
  const { isShowSidebar, setIsShowSidebar } = useContext(RightNavBarContext);
  return (
    <div
      className={`RightNavBar RightNavBar--${isShowSidebar ? "show" : "hide"}
}`}
    >
      {/* <div className="RightMenuBar_BurgerButton">
        <BurgerButton onClick={() => setIsShowSidebar(false)} />
      </div> */}
      <ul className="RightNavBar_Menu">
        <Link
          className="nav_styles"
          to="/"
          onClick={() => setIsShowSidebar(false)}
        >
          <li>Home</li>
        </Link>
        <Link
          className="nav_styles"
          to="/aboutme"
          onClick={() => setIsShowSidebar(false)}
        >
          <li>About Me</li>
        </Link>
        <Link
          className="nav_styles"
          to="/projects"
          onClick={() => setIsShowSidebar(false)}
        >
          <li>Projects</li>
        </Link>
        <Link
          className="nav_styles"
          to="/contactme"
          onClick={() => setIsShowSidebar(false)}
        >
          <li>Contact Me</li>
        </Link>
      </ul>
    </div>
  );
};
export default RightNavBar;
