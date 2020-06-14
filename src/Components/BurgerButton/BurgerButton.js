import React, { useContext } from "react";
import "./BurgerButton.scss";
import { RightNavBarContext } from "../../App";

const BurgerButton = ({ onClick }) => {
  const { isShowSidebar, setIsShowSidebar } = useContext(RightNavBarContext);

  return (
    <div className="HamburgerButton" role="button" onClick={onClick}>
      <span className={isShowSidebar ? "show" : "hide"}></span>
      <span className={isShowSidebar ? "show" : "hide"}></span>
      <span className={isShowSidebar ? "show" : "hide"}></span>
    </div>
  );
};
export default BurgerButton;
