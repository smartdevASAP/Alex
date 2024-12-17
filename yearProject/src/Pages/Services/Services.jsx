import React from "react";
import "./services.css";
import arrow_icon from "../../Assets/arrow_icon.svg";
import nav_underline from "../../Assets/nav_underline.svg";
import Services_Data from "../../Assets/services_data";
function Services() {
  return (
    <>
      <div className="services" id="services">
        <h1 className="serv">
          My services <img className="image" src={nav_underline} alt="" />
        </h1>
        <div className="data">
          {Services_Data.map((item, index) => {
            return (
              <div className="card" key={index}>
                <h4>{item.s_no}</h4>
                <h1>{item.s_name}</h1>
                <h6>{item.s_desc}</h6>
                <p className="arrow">
                  read more <img src={arrow_icon} alt="" />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
