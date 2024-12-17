import React from "react";
import "./Projects.css";
import arrow_icon from "../../Assets/arrow_icon.svg";
import mywork from "../../Assets/mywork_data";
import nav_underline from "../../Assets/nav_underline.svg";
function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>
        My latest work <img src={nav_underline} alt="" />
      </h1>
      <div className="all">
        {mywork.map((item, index) => {
          return (
            <div className="container" key={index}>
              <img src={item.w_img} alt="" />
              <h3>{item.w_name}</h3>
              <p>{item.w_no}</p>
            </div>
          );
        })}
      </div>
      <div className="show-more">
        <button>
          Show More <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Projects;
