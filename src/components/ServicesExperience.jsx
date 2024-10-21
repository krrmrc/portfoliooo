import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "Front end developer",
      desc: "Building appealing and user-friendly cliend side application interfaces using React library",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Back end developer",
      desc: "Developing, and maintaining the server-side applications and databases using Node.Js and MongoDB ",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Problem Solving",
      desc: "Solving various programming problems using Java programming language and DSA concepts",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>Fresher</h3>
            <p>BTech Graduate in CSE </p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>200+</h4>
              <p>Problem solved using Java & DSA</p>
            </div>
            <div className="portfolio">
              <h4>02</h4>
              <p>Internships</p>
            </div>
            <div className="portfolio">
              <h4>06+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>08</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
