import React from "react";
import "./ProjectCards.css";
// import img1 from "../../Components/man-in-red-crew-neck-t-shirt-and-black-pants-sitting-on-4108004.jpg";
// import { AiOutlineGithub } from "react-icons/ai";
const ProjectCards = (props) => {
  return (
    <div
      className="project_card_container"
      style={{ width: props.new_width, height: props.new_height }}
    >
      <div className="proj_card_info">
        <div className="project_title">{props.proj_name}</div>
        <div className="project_description">{props.proj_description}</div>
      </div>
      <div className="project_languages">{props.prog_languages}</div>
    </div>
  );
};
export default ProjectCards;