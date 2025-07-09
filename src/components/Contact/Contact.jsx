import React from "react";
import "./Contact.css";
import { FaFacebook, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const socials = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    url: "https://www.facebook.com/pacanza.bernard",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/bernardpacanza4884/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://www.github.com/hyakumachi/",
  },
];

const Contact = () => (
  <div className="contact-wrapper">
    <h2 className="contact-title">Connect with me</h2>
    <p className="contact-sub">
      Feel free to reach out on any of the platforms below.
    </p>
    <a href="mailto:pacanza.berns4884@gmail.com" className="mail-card-link">
      <div className="mail-card-inner">
        <FaEnvelope className="mail-icon" />
        <div>
          <div className="mail-label">Mail me</div>
          <div className="mail-link">pacanza.berns4884@gmail.com</div>
        </div>
      </div>
    </a>
    <div className="contact-or">or</div>
    <div className="contact-icons-row">
      {socials.map(({ name, icon, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="contact-social-btn"
        >
          {icon}
        </a>
      ))}
    </div>
  </div>
);

export default Contact;