import React from "react";
import "./AboutMePage.scss";
const AboutMePage = () => {
  return (
    <div className="aboutme_page" id="/aboutme">
      <div className="title_bar">
        <div className="aboutme_title">About Me</div>
      </div>

      <div className="aboutme_information">
        <div className="aboutme_img"></div>
        <div className="aboutme_bio">
          <h3>BIO</h3>
          Hello, I am Nilay, a highly motivated engineering professional with
          broad knowledge of academic discipline ranging from circuit designing
          to web-development. Technology savvy and familiar with many modern
          systems, software applications as well as various programming
          languages. I enjoy writing clear & concise code and building things to
          make a meaningful impact on the world. I have worked on different
          areas of projects with different programming languages to enhance my
          skills and knowledge.
        </div>
        <div className="aboutme_education">
          <h3>EDUCATION</h3>
          <div className="University_name">
            <a href="https://www.rutgers.edu/" target="_blank">
              Rutgers University, New Brunswick, New Jersey
            </a>
          </div>
          <div className="University_major">
            B.S. in Electrical and Computer Engineering & Computer Science
            (Double Major)
          </div>
          <div className="University_gradyear_gpa">May 2020, GPA 3.54</div>
        </div>
        <div className="aboutme_skills">
          <h3>TECHNICAL SKILLS</h3>
          <div>
            Programming Languages: C, C++, Java, Python, MATLAB, HTML,
            JavaScript, VHDL
          </div>
          <div>
            Operating System/Software: Linux, Windows, MacOS, Microsoft Office,
            LTspice, Latex, Git, ROS, React
          </div>
          <div>
            Hardware: Arduino, Raspberry Pi, Nvidia Jetson Tx2, Xilinx Zynq-7000
            development board
          </div>
          <div>Web Development tools: MySQL, JSP, Sass/CSS, Node.js</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
