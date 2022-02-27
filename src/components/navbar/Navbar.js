import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import './navbar.css';

function Navbar() {

   function handleClick() {
    setIsShowSidebar(!isShowSidebar);
    navSide();
  }

  function navSide(){

    document.querySelectorAll('.nav__links li').forEach((link,index) => {
      if(link.style.animation){
        link.style.animation = '';
      }else{
          link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
      }
    });

  };

  useEffect(() =>{
    window.addEventListener("resize", windowChanges);
  }, []);


  const windowChanges = () =>{
    if(window.innerWidth >= 768){
      setIsShowSidebar(false);
      navSide();
    }
  }

  const [isShowSidebar, setIsShowSidebar] = useState(false);

  useEffect(()=>{
    navSide();
  },[isShowSidebar]);

    return (
    <div className="nav">
      <header>
        <img className="logo" src="%homepage%/Group 1.svg" alt="logo" width="50px"></img>
        <nav>
          <ul className={`nav__links ${ isShowSidebar ? "nav__active" : ""}`}>
          <Link to="/" onClick={isShowSidebar?handleClick:""}>
            <li>Home</li>
          </Link>

          <Link to="/aboutme" onClick={isShowSidebar?handleClick:""}>
            <li>About Me</li>
          </Link>

          <Link to="/projects" onClick={isShowSidebar?handleClick:""}>
            <li>Projects</li>
          </Link>

          <Link to="/contactme" onClick={isShowSidebar?handleClick:""}>
            <li>Contact Me</li>
          </Link>
          </ul>
        </nav>

        {/* <a className="cta" href="#"><button>Contects</button></a> */}

        <div className="burger" onClick={handleClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
    </div>
    );
  }
  
  export default Navbar;
  