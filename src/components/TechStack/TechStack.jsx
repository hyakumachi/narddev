import React from "react";
import "./TechStack.css";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const stack = [
  {
    name: "React",
    icon: <FaReact />,
    className: "react-icon",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    className: "typescript-icon",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    className: "tailwind-icon",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    className: "mysql-icon",
  },
  {
    name: "NestJS",
    icon: <SiNestjs />,
    className: "nestjs-icon",
  },
];

const TechStack = () => {
  return (
    <div className="container">
      <h2 className="title">Tech Stack</h2>
      <p className="desc">
        A selection of modern tools that I use to build scalable, high-quality
        web applications.
      </p>
      <div className="stack-icons">
        {stack.map((tech, index) => (
          <div className={`tech-card ${tech.className}`} key={index}>
            <div className="tech-icon">{tech.icon}</div>
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
