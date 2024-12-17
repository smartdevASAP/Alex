import React from "react";
import profile_img from "../../Assets/profile_img.svg";
import nav_underline from "../../Assets/nav_underline.svg";
import "./About.css";
function About() {
  return (
    <>
      <h1 className="heading" id="about">
        About me
        <img className="nav-back" src={nav_underline} alt="" />
      </h1>
      <div className="about">
        <div className="left-section">
          <img src={profile_img} alt="" />
        </div>
        <div className="right-section">
          <div className="explanation">
            <p>
              Alex is an incredibly talented frontend developer with an
              exceptional ability to bring designs to life. His expertise lies
              in crafting clean, responsive, and user-friendly interfaces that
              captivate and engage users. Whether it's working with HTML, CSS,
              JavaScript, or React, Alex effortlessly transforms complex ideas
              into seamless digital experiences.
            </p>
          </div>
          <div className="skills">
            <div className="skill">
              <h3>HTML & CSS</h3> <div className="dot" />
            </div>
            <div className="skill">
              <h3> React JS</h3> <div className="dot" />
            </div>
            <div className="skill">
              <h3>JavaScript</h3> <div className="dot" />
            </div>
            <div className="skill">
              <h3>Next JS</h3> <div className="dot" />
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="years">
          <h2> 1+</h2>
          <br />
          <h3>Years of experience</h3>
        </div>
        <hr />
        <div className="projects">
          <h2> 20+</h2>
          <br />
          <h3> projects</h3>
        </div>
        <hr />
        <div className="clients">
          <h2>5+</h2>
          <br />
          <h3>Happy clients</h3>
        </div>
      </div>
    </>
  );
}

export default About;
