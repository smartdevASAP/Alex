import React from "react";
import "./Home.css";
import profile_img from "../../Assets/profile_img.svg";
function Home() {
  return (
    <>
      <div className="home" id="home">
        <div className="img-container">
          <img className="img" src={profile_img} alt="" />
        </div>
        <div className="description">
          <h1>
            <span className="main">I'm Alex Bennet, frontend</span> <br />{" "}
            developer based in USA.
          </h1>
          <p>
            I am a frontend developer from USA with 10 years of experience in
            multiple companies like microsoft and apple
          </p>
          <button className="connect">Connect with me</button>
          <button className="resume">My resume</button>
        </div>
      </div>
    </>
  );
}

export default Home;
