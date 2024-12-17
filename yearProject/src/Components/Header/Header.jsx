import React, { useState } from "react";
import Home from "../../Pages/Home/Home";
import { Link } from "react-router-dom";
import "./Header.css";
import menu_open from "../../Assets/menu_open.svg";
function Header() {
  const [selectedMenu, setselectedMenu] = useState("home");

  return (
    <>
      <div className="Header-container">
        <div className="left">
          <svg
            width="109"
            height="57"
            viewBox="0 0 109 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68 42.39C68 41.3438 68.9096 40.53 69.9493 40.6459L101.251 44.136C105.227 44.5794 108.591 41.226 108.161 37.2483C107.713 33.1161 103.434 30.5622 99.5844 32.1306L70.4171 44.0151C69.2629 44.4854 68 43.6363 68 42.39Z"
              fill="url(#paint0_linear_2205_14)"
            />
            <path
              d="M0.9 45L13.635 13.365H18.63L31.32 45H24.795L14.985 19.035H17.235L7.29 45H0.9ZM7.65 39.105V33.975H24.66V39.105H7.65ZM34.778 45V12.465H40.673V45H34.778ZM56.2911 45.45C54.0111 45.45 51.9861 44.97 50.2161 44.01C48.4461 43.02 47.0361 41.67 45.9861 39.96C44.9661 38.25 44.4561 36.3 44.4561 34.11C44.4561 31.95 44.9511 30.03 45.9411 28.35C46.9611 26.64 48.3411 25.29 50.0811 24.3C51.8211 23.28 53.7561 22.77 55.8861 22.77C57.9861 22.77 59.8311 23.25 61.4211 24.21C63.0411 25.14 64.3011 26.43 65.2011 28.08C66.1311 29.7 66.5961 31.545 66.5961 33.615C66.5961 34.005 66.5661 34.41 66.5061 34.83C66.4761 35.22 66.4011 35.67 66.2811 36.18L48.0111 36.225V31.815L63.5361 31.77L61.1511 33.615C61.0911 32.325 60.8511 31.245 60.4311 30.375C60.0411 29.505 59.4561 28.845 58.6761 28.395C57.9261 27.915 56.9961 27.675 55.8861 27.675C54.7161 27.675 53.6961 27.945 52.8261 28.485C51.9561 28.995 51.2811 29.73 50.8011 30.69C50.3511 31.62 50.1261 32.73 50.1261 34.02C50.1261 35.34 50.3661 36.495 50.8461 37.485C51.3561 38.445 52.0761 39.195 53.0061 39.735C53.9361 40.245 55.0161 40.5 56.2461 40.5C57.3561 40.5 58.3611 40.32 59.2611 39.96C60.1611 39.57 60.9411 39 61.6011 38.25L65.0661 41.715C64.0161 42.945 62.7261 43.875 61.1961 44.505C59.6961 45.135 58.0611 45.45 56.2911 45.45ZM91.3918 45L82.3018 30.915H81.4018L69.0718 13.365H76.3168L85.3618 26.64H86.2618L98.5468 45H91.3918ZM68.5318 45L80.3668 28.08L84.8668 31.095L75.4618 45H68.5318ZM86.5768 29.97L82.0768 26.955L91.0768 13.365H98.0068L86.5768 29.97Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2205_14"
                x1="219.1"
                y1="39.9983"
                x2="202.599"
                y2="91.4037"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DF8908" />
                <stop offset="1" stop-color="#B415FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="middle-section">
          <ul className="mid">
            <a
              href="#home"
              className={selectedMenu === "home" ? "Active" : ""}
              onClick={() => setselectedMenu("home")}
            >
              Home
            </a>
            <a
              href="#about"
              className={selectedMenu === "about" ? "Active" : ""}
              onClick={() => setselectedMenu("about")}
            >
              About me
            </a>
            <a
              href="#services"
              className={selectedMenu === "services" ? "Active" : ""}
              onClick={() => setselectedMenu("services")}
            >
              Services
            </a>
            <a
              href="#projects"
              className={selectedMenu === "work" ? "Active" : ""}
              onClick={() => setselectedMenu("work")}
            >
              My work
            </a>
            <a
              href="#contact"
              className={selectedMenu === "testimonials" ? "Active" : ""}
              onClick={() => setselectedMenu("testimonials")}
            >
              Contacts
            </a>
          </ul>
        </div>
        <div className="right-section">
          <div className="button-container">
            <button>Connect with me</button>
            <img className="menu" src={menu_open} alt="" />
          </div>
        </div>
      </div>
      <Home />
    </>
  );
}

export default Header;
