import React from "react";
import "./aboutme.css";
const Aboutme = () => {
  return (
    <div className="aboutme_page" id="/aboutme">
      <div className="title_bar_about">
        <div className="aboutme_title">From Vision to Pixels: My Story</div>
      </div>

      <div className="aboutme_info">
        <div className="bio_col">
          I'm Nilay Patel, a driven engineering professional fueled by a
          profound passion for transforming ideas into tangible digital
          realities. My journey spans an extensive spectrum, from intricate
          circuit design to the realm of dynamic web development. A relentless
          explorer of technology's frontier, I'm well-acquainted with modern
          systems, software applications, and a diverse array of programming
          languages.
          <br></br> <br /> I derive immense satisfaction from the art of
          crafting code that is not just functional, but elegant in its clarity.
          Every keystroke is an opportunity to shape innovation and leave an
          indelible mark on the world.
        </div>

        <div className="bio_col">
          My voyage has led me through a tapestry of projects, each an
          opportunity to embrace new challenges and grasp the nuances of various
          programming languages. This multidimensional approach has been
          instrumental in honing my skills and expanding my knowledge base.
          <br></br>
          <br />
          With a fervor for the convergence of creativity and functionality, I
          revel in the process of turning visions into pixels, breathing life
          into concepts that resonate with users. My commitment is unwavering,
          my curiosity insatiable, and my dedication resolute. The pixels I
          sculpt are more than just code; they are gateways to experiences,
          connections, and change.
          <br></br>
          <br />
        </div>
      </div>

      <div className="aboutme_exp">
        <div className="aboutme_exp_header">Education</div>
        <div className="aboutme_exp_content">
          <div className="University_name">
            <a href="https://www.rutgers.edu/" target="_blank" rel="noreferrer">
              Rutgers University, New Brunswick, New Jersey
            </a>
          </div>
          <div className="University_major">
            B.S. in Electrical and Computer Engineering & Computer Science
            (Double Major)
          </div>
          <div className="University_gradyear_gpa">May 2020, GPA 3.54</div>
        </div>
      </div>

      <div className="aboutme_exp">
        <div className="aboutme_exp_header">EXPERINCE</div>
        <div className="aboutme_exp_content">
          <div className="University_name">
            <a href="https://www.rutgers.edu/" target="_blank" rel="noreferrer">
              Infosys Limited
            </a>
          </div>
          <div className="University_major">Software Engineer</div>
          <div className="University_gradyear_gpa">2020-Present</div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
