import React from "react";
import "./ProjectPage.css";
import ProjectCards from "../projectCards/ProjectCards";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";

import data from "./project_list.json";

const Projects = () => {
  return (
    <div className="main_div scroll" id="/projects">
      <div className="title_bar">
        <div>projects</div>
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
                {project.proj_website != "" ? (
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
