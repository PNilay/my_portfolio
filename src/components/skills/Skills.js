import "./skills.css";
import React from "react";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Skills = () => {
  return (
    <div id="/skills" className="skills_page">
      <div className="title_bar_contact">
        <div className="skills_title">
          Mastering the Art of Pixels: Skills at a Glance
        </div>
      </div>

      <div className="skills_msg">
        <div className="skills_row">
          <div className="skills_col">Mastery of Languages</div>
          <div className="skills_col2">
            C, C++, Java, Python, MATLAB, HTML, JavaScript, VHDL
          </div>
        </div>

        <div className="skills_row">
          <div className="skills_col">Operating System/Software</div>
          <div className="skills_col2">
            Linux, Windows, MacOS, Microsoft Office, LTspice, Latex, React, ROS,
            Git
          </div>
        </div>

        <div className="skills_row">
          <div className="skills_col">Hardware</div>
          <div className="skills_col2">
            Arduino, Raspberry Pi, Nvidia Jetson Tx2, Xilinx Zynq-7000
            development board
          </div>
        </div>

        <div className="skills_row">
          <div className="skills_col">Web Development tools</div>
          <div className="skills_col2">MySQL, JSP, Sass/CSS, Node.js</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
