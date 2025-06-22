import React from "react";
import "./About.css";
import pfp from "/src/assets/pfp.jpg";

const About = () => {
  return (
    <div className="container about-outer">
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-name">Bernard Pacanza</h1>
          <p className="about-role">Information Technology Student</p>
        </div>
        <div className="about-img">
          <img src={pfp} alt="Profile" className="profile-img" />
        </div>
      </div>
      <div className="about-description">
        <h2>
          <span className="intro intro-bold">
            Hello!👋 — I'm a developer based in the Philippines with a strong
            interest in web and mobile technologies.
          </span>
          <span className="intro intro-normal">
            {" "}
            I'm currently focused on full stack development and database
            administration, with the goal of building scalable and reliable
            software solutions.
          </span>
        </h2>
      </div>
    </div>
  );
};

export default About;
