import React from "react";
import "./Featured.css";
import proj1 from "/src/assets/ftproj1.png";
import proj2 from "/src/assets/ftproj2.png";
import proj3 from "/src/assets/ftproj3.png";


const projects = [
  {
    date: "April 2025",
    name: "La Salle Davao",
    description:
      'I recreated the DLSU website as "De La Salle Davao" with my own design, using the original as a reference.',
    stack: ["React", "CSS", "JavaScript", "Vercel"],
    img: proj1,
    url: "https://la-salle-davao.vercel.app",
  },
  {
    date: "May 2025",
    name: "User Management System",
    description:
      "A simple user management system that displays user data with search and filter features, and shows full user details in a modal.",
    stack: ["HTML", "CSS", "Javascript"],
    img: proj2,
    url: "https://github.com/hyakumachi/PacanzaUserSystem",
  },
  {
    date: "April 2025",
    name: "Landing Page",
    description: "A landing page exercise from The Odin Project.",
    stack: ["HTML", "CSS", "Github Pages"],
    img: proj3,
    url: "https://hyakumachi.github.io/odin-landing_page/",
  },
];

const Featured = () => {
  return (
    <div className="container">
      <h2 className="title">Featured Projects</h2>
      <p className="desc">
        Showcasing web projects that highlight my skills in design, development,
        and problem-solving using various technologies.
      </p>
      {projects.map((project, index) => (
        <a
          href={project.url}
          className="featured-card"
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <div className="event-info">
            <div className="event-date">{project.date}</div>
            <div className="event-name">{project.name}</div>
            <div className="event-desc">{project.description}</div>
            <div className="event-stack-row">
              {project.stack.map((tech, tIdx) => (
                <div className="event-stack" key={tIdx}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className="event-pic">
            <img src={project.img} alt={project.name} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Featured;
