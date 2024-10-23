/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img className="karra_law_ay" src="prof.jpg.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Karra Marie Esguiran</h6>
            <h3>Third Year Information Technology Student</h3>
            <p>
            Welcome to my personal portfolio! I'm Karra Marie, a passionate and motivated IT student. A recent studying at Western Institute of Technology, I showcase my journey, skills, and projects. Explore my portfolio to discover my dedication to coding excellence and innovation.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
