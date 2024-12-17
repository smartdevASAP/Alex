import React from "react";
import "./Contact.css";
import mail_icon from "../../Assets/mail_icon.svg";
import call_icon from "../../Assets/call_icon.svg";
import location_icon from "../../Assets/location_icon.svg";
import nav_underline from "../../Assets/nav_underline.svg";
function Contact() {
  return (
    <>
      <h1 className="h1">
        Get touch in touch <img src={nav_underline} alt="" />
      </h1>
      <div className="contact" id="contact">
        <div className="left-side">
          <div className="header">
            <h1>Let's talk</h1>
          </div>
          <div className="information">
            <p>
              I'm currently available to take new projects,so feel free to send
              me a message abour anything you want ,e to work on. You cancontact
              me any time.
            </p>
          </div>
          <div className="contacts">
            <div className="detail">
              <img src={mail_icon} alt="" /> Alex@gmail.com
            </div>
            <div className="detail">
              <img src={call_icon} alt="" /> +(234) 045 941
            </div>
            <div className="detail">
              <img src={location_icon} alt="" /> Maldives
            </div>
          </div>
        </div>
        <div className="right-side">
          <section className="inputs">
            <label htmlFor="name">Your name</label> <br />
            <input type="text" id="name" placeholder="kelvin" /> <br />
            <label htmlFor="email">Your Email</label> <br />
            <input type="text" id="email" placeholder="kelvin@gmail.com" />{" "}
            <br />
            <label htmlFor="message">Write your message</label> <br />
            <input
              className="message"
              type="text"
              id="message"
              placeholder="write a message"
            />
          </section>
        </div>
      </div>
      <button className="submit">submit</button>
    </>
  );
}

export default Contact;
