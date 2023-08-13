import "./contactme.css";
import React from "react";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Contactme = () => {
  return (
    <div id="/contactme" className="contactme_page">
      <div className="title_bar_contact">
        <div className="connect_title">Connect with the Pixel Weaver</div>
      </div>

      <div className="connect_msg">
        Let's Connect and Explore Code Together. Whether you're curious about my
        projects or eager to collaborate, I'm just a click away. Looking forward
        to crossing paths in the digital realm!
      </div>

      <div className="connect_msg">
        <a href="mailto:pnilay926@gmail.com" className="Contactme_link">
          <AiOutlineMail className="contactme_logo" />
        </a>

        <a
          href="https://github.com/PNilay"
          target="_blank"
          rel="noreferrer"
          className="Contactme_link"
        >
          <AiOutlineGithub className="contactme_logo" />
        </a>

        <a
          href="https://www.linkedin.com/in/nilay-patel-26858414a"
          target="_blank"
          rel="noreferrer"
          className="Contactme_link"
        >
          <AiFillLinkedin className="contactme_logo" />
        </a>
      </div>

      {/* <div className="contact_me_information">
        <div className="contact_me_info">
          <div className="contactme_box">
            <a href="mailto:pnilay926@gmail.com" className="Contactme_link">
              <AiOutlineMail className="contactme_logo" />
            </a>

            <div className="contact_info_div">Pnilay926@gmail.com</div>
          </div>
          <div className="contactme_box">
            <a
              href="https://github.com/PNilay"
              target="_blank"
              rel="noreferrer"
              className="Contactme_link"
            >
              <AiOutlineGithub className="contactme_logo" />
            </a>
            <div className="contact_info_div">https://github.com/PNilay</div>
          </div>
          <div className="contactme_box">
            <a
              href="https://www.linkedin.com/in/nilay-patel-26858414a"
              target="_blank"
              rel="noreferrer"
              className="Contactme_link"
            >
              <AiFillLinkedin className="contactme_logo" />
            </a>
            <div className="contact_info_div">
              https://www.linkedin.com/in/nilay-patel-26858414a/
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contactme;
