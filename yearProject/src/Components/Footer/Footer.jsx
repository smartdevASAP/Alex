import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.svg";
function Footer() {
  return (
    <>
      <hr className="hr" />
      <div className="footer">
        <div className="first">
          <img src={logo} alt="" /> <br />
          <p>I'm a frontenf developer woth 1 year of experience</p>
        </div>
        <div className="second">
          <p>
            Crafted with ❤️ by Kelvin. Let's build something amazing together!
          </p>
        </div>
      </div>
      <br />
      <hr />
      <p className="copyright">
        &copy;All rights reserved.2024 KelvinCreations{" "}
      </p>
    </>
  );
}

export default Footer;
