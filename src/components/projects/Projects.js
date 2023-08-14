import React from "react";
import "./ProjectPage.css";
import ProjectCards from "../projectCards/ProjectCards";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineGlobal, AiFillPicture} from "react-icons/ai";

import data from "./project_list.json";
import Carousel from "../carousel/Carousel";


const Projects = () => {
  return (
    <div className="main_div scroll" id="/projects">
      <div className="title_bar_proj">
        <div className="proj_title">Dreams in Pixels: A Portfolio Odyssey</div>
      </div>
      <div className="project_container">
        {data.map((project, i) => {
          return (
            <div className="box">
              <div className="child_projct_card">
                <ProjectCards
                  proj_name={project.proj_name}
                  proj_description={project.proj_description}
                  prog_languages={project.proj_languages}
                />
              </div>
              <div className="project_name">
                {project.proj_github != "" ? (
                  <a
                    href={project.proj_github}
                    target="_blank"
                    rel="noreferrer"
                    className="github_link"
                  >
                    <AiOutlineGithub className="github_logo" />
                  </a>
                ) : (
                  ""
                )}
                {project.proj_imgs != "" ? (
                  <a
                    href={project.proj_imgs}
                    target="_blank"
                    rel="noreferrer"
                    className="github_link"
                  >
                    <AiFillPicture className="github_logo" />
                  </a>
                ) : (
                  ""
                )}

                  {project.proj_imgs != "" ? (
                  <a
                    href={project.proj_website}
                    target="_blank"
                    rel="noreferrer"
                    className="github_link"
                  >
                    <AiOutlineGlobal className="github_logo" />
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
