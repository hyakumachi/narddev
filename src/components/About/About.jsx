import React from "react";
import "./About.css";
import pfp from "/src/assets/pfp.jpg";
import { FaLinkedinIn, FaFacebookF, FaFileDownload } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const socials = [
  {
    icon: <FiGithub size={16} />,
    url: "https://github.com/hyakumachi",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn size={16} />,
    url: "https://www.linkedin.com/in/bernardpacanza4884/",
    label: "LinkedIn",
  },
  {
    icon: <SiGmail size={16} />,
    url: "mailto:pacanza.berns4884@gmail.com",
    label: "Email",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/pacanza.bernard",
  },
];

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

      <div className="about-links">
        <button
          className="resume-btn"
          aria-label="Download Resume"
          onClick={() =>
            window.open(
              "resume.pdf",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          <FaFileDownload />
          Resume
        </button>

        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="about-description">
        <h2>
          <span className="intro intro-bold">
            Hello! 👋 — I'm a developer based in the Philippines with a strong
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
