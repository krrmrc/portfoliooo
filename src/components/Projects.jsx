/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "ToDos Application",
      img: "/projects/1.png",
      gLink: "https://github.com/krrmrc",
      desc:"Our app will be called Awesome Todos, and it will be a minimal Todo app with full CRUD (Create, Read, Update, and Delete) functionality."
    },
    {
      title: "Personal Portfolio Website",
      img: "/projects/3.jpg.png",
      gLink: "https://github.com/krrmrc",
     
      desc:
      "Elevate user experience with captivating React animated card effects. Transform static content into engaging visuals, using cutting-edge animations for a modern and interactive interface."
    },


  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/krrmrc"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
              {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
