import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import React, { useContext } from "react";
import { RightNavBarContext } from "../../App";
import "./Portrait.scss";
const Portrait = () => {
  const { isShowSidebar, setIsShowSidebar } = useContext(RightNavBarContext);
  return (
    <div
      className={`PortraitNavBar PortraitNavBar--${
        isShowSidebar ? "show" : "hide"
      }
}`}
    >
      <div className="PortraitNavBar_portrait"></div>
      <div className="portrait_name">Nilay Patel</div>
      <div className="PortraitNavBar_links">
        <a href="mailto:pnilay926@gmail.com" className="Portrait_link">
          <AiOutlineMail className="Portrait_logo" />
        </a>
        <a href="tel:9089925288" className="Portrait_link">
          <AiOutlinePhone className="Portrait_logo" />
        </a>
        <a
          href="https://github.com/PNilay"
          target="_blank"
          className="Portrait_link"
        >
          <AiOutlineGithub className="Portrait_logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/nilay-patel-26858414a/"
          target="_blank"
          className="Portrait_link"
        >
          <AiFillLinkedin className="Portrait_logo" />
        </a>
      </div>
    </div>
  );
};
export default Portrait;
