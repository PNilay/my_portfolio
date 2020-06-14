import React, { useContext } from "react";
import BurgerButton from "../BurgerButton/BurgerButton";
import { RightNavBarContext } from "../../App";
import "./RightNavBar.scss";

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
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
};
export default RightNavBar;
