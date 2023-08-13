import React from "react";
import './portfolio.css'

import Navbar from '../navbar/Navbar';
import Aboutme from '../aboutme/Aboutme'
import Projects from '../projects/Projects';
import Contactme from '../contactme/Contactme'
import Home from '../home/Home';
import Skills from "../skills/Skills";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Projects />
      <Contactme />
    </div>
  );
};

export default Portfolio;