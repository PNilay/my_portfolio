import React, { useContext } from "react";
import "./HorizontalNavBar.scss";
import BurgerButton from "../BurgerButton/BurgerButton";
import { RightNavBarContext } from "../../App";

const HorizontalNavBar = () => {
  const { isShowSidebar, setIsShowSidebar } = useContext(RightNavBarContext);

  return (
    <div className="HorizontalNavBar">
      <div className="RightSideButton">
        <BurgerButton onClick={() => setIsShowSidebar(!isShowSidebar)} />
      </div>
    </div>
  );
};

export default HorizontalNavBar;
