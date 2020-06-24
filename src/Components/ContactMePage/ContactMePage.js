import React from "react";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import "./ContactMePage.scss";

const ContactMePage = () => {
  return (
    <div id="/contactme" className="contactme_page">
      <div className="title_bar">
        <div>Contact Me</div>
      </div>
      <div className="contact_me_information">
        <div className="contactme_box">
          <a href="tel:9089925288" className="Contactme_link">
            <AiOutlinePhone className="contactme_logo" />
          </a>
          <h6>(908)-992-5288</h6>
        </div>
        <div className="contactme_box">
          <a href="mailto:pnilay926@gmail.com" className="Contactme_link">
            <AiOutlineMail className="contactme_logo" />
          </a>
          <h6>Pnilay926@gmail.com</h6>
        </div>
        <div className="contactme_box">
          <a
            href="https://github.com/PNilay"
            target="_blank"
            className="Contactme_link"
          >
            <AiOutlineGithub className="contactme_logo" />
          </a>
          <h6>https://github.com/PNilay</h6>
        </div>
        <div className="contactme_box">
          <a
            href="https://www.linkedin.com/in/nilay-patel-26858414a/"
            target="_blank"
            className="Contactme_link"
          >
            <AiFillLinkedin className="contactme_logo" />
          </a>
          <h6>https://www.linkedin.com/in/nilay-patel-26858414a/</h6>
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
