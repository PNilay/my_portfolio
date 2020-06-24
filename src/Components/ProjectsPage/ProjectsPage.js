import React, { Component } from "react";
import "./ProjectPage.scss";
import ProjectCards from "../ProjectCards/ProjectCards";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineGithub } from "react-icons/ai";
const ProjectsPage = () => {
  return (
    <div className="main_div scroll" id="/projects">
      <div className="title_bar">
        <div>projects</div>
      </div>
      <div className="project_container">
        <div className="box">
          <div className="child_projct_card">
            <ProjectCards
              proj_name="Travel Reservation System"
              proj_description="Collaborated in team of four students to design and implement database system to support the operation of an online travel
              reservation system
              "
              prog_languages="HTML MySql CSS JavaScript JSP"
            />
          </div>
          <div className="project_name">
            <a
              href="https://github.com/micort35/travel_db"
              target="_blank"
              className="github_link"
            >
              <AiOutlineGithub className="github_logo" />
            </a>
          </div>
        </div>
        <div className="box">
          <div className="child_projct_card">
            <ProjectCards
              proj_name="Where’s the File"
              proj_description="Version control system similar to Git is implemented in this project
              "
              prog_languages="C"
            />
          </div>
          <div className="project_name">
            {" "}
            <a
              href="https://github.com/PNilay/versioncontrol-system"
              target="_blank"
              className="github_link"
            >
              <AiOutlineGithub className="github_logo" />
            </a>
          </div>
        </div>
        <div className="box">
          <div className="child_projct_card">
            <ProjectCards
              proj_name="DNS Socket Programming Project"
              proj_description="Implemented Domain Name System (DNS) with authentication server to get the ip adress given a host name of the server"
              prog_languages="Python"
            />
          </div>
          <div className="project_name">
            {" "}
            <a
              href="https://github.com/PNilay/DNS_Socket_Programming_Project"
              target="_blank"
              className="github_link"
            >
              <AiOutlineGithub className="github_logo" />
            </a>
          </div>
        </div>
        <div className="box">
          <div className="child_projct_card">
            <ProjectCards
              proj_name="Bank and Stock Management System"
              proj_description="This project models the simple stock market and the bank account using the c++ class features"
              prog_languages="C++"
            />
          </div>
          <div className="project_name">
            {" "}
            <a
              href="https://github.com/PNilay/Bank_and_Stock_Management_System"
              target="_blank"
              className="github_link"
            >
              <AiOutlineGithub className="github_logo" />
            </a>
          </div>
        </div>
        <div className="box">
          <div className="child_projct_card">
            <ProjectCards
              proj_name="Fast Trajectory Re-planning"
              proj_description="Implemented multiple types of A* algorithm to find path from start to target"
              prog_languages="Java"
            />
          </div>
          <div className="project_name">
            {" "}
            <a
              href="https://github.com/PNilay/Trejectory_Replanning"
              target="_blank"
              className="github_link"
            >
              <AiOutlineGithub className="github_logo" />
            </a>
          </div>
        </div>
        <div className="box">
          <div className="child_projct_card">
            <ProjectCards
              proj_name="Handwritten Digits Recognition Using Fully Conneted Neural Network"
              proj_description="Implemented a fully connected neural network on MNIST handwritten digits dataset using only NumPy to correctly classify each image"
              prog_languages="Python"
            />
          </div>
          <div className="project_name">
            {" "}
            <a
              href="https://github.com/PNilay/FullyConnected_NN_numpy"
              target="_blank"
              className="github_link"
            >
              <AiOutlineGithub className="github_logo" />
            </a>
          </div>
        </div>
      </div>
    </div>

    // <div class="body_container scroll">
    //   <div class="container scroll">
    //     <div class="note">
    //       My <code>overlow-y</code> is <code>scroll</code>.
    //     </div>
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit labore
    //     laudantium nisi aliquid nulla qui quisquam recusandae quis corporis
    //     expedita ipsum debitis mollitia ducimus ex enim deleniti rerum quos.
    //     Tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
    //     labore laudantium nisi aliquid nulla qui quisquam recusandae quis
    //     corporis expedita ipsum debitis mollitia ducimus ex enim deleniti rerum
    //     quos. Tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //     Odit labore laudantium nisi aliquid nulla qui quisquam recusandae quis
    //     corporis expedita ipsum debitis mollitia ducimus ex enim deleniti rerum
    //     quos. Tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //     Odit labore laudantium nisi aliquid nulla qui quisquam recusandae quis
    //     corporis expedita ipsum debitis mollitia ducimus ex enim deleniti rerum
    //     quos. Tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //     Odit labore laudantium nisi aliquid nulla qui quisquam recusandae quis
    //     corporis expedita ipsum debitis mollitia ducimus ex enim deleniti rerum
    //     quos. Tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //     Odit labore laudantium nisi aliquid nulla qui quisquam recusandae quis
    //     corporis expedita ipsum debitis mollitia ducimus ex enim deleniti rerum
    //     quos. Tempora.
    //   </div>
    // </div>
  );
};

export default ProjectsPage;
