import React from "react";
import "./Contact.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socials = [
  {
    name: "Facebook",
    img: <FaFacebookF />,
    url: "https://www.facebook.com/pacanza.bernard",
  },
  {
    name: "LinkedIn",
    img: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/bernardpacanza4884/",
  },
  {
    name: "Gmail",
    img: <SiGmail />,
    url: "mailto:pacanza.berns4884@gmail.com",
  },
];

const Contact = () => {
  return (
    <div className="container">
      <h1 className="title">Connect with me</h1>
      <div className="socials">
        {socials.map((social, index) => (
          <a
            href={social.url}
            className="contact-icons"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            key={index}
          >
            {social.img}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
