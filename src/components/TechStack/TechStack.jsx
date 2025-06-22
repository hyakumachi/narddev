import React from "react";
import "./TechStack.css";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";

const TechStack = () => {
  return (
    <div className="container">
      <h2 className="title">Tech Stack</h2>
      <div className="stack-icons">
        <SiTypescript />
        <SiTailwindcss />
        <FaReact />
        <SiMysql />
        <SiNestjs />
        <SiPrisma />
        <RiSupabaseFill />
        <FaGitAlt />
      </div>
    </div>
  );
};

export default TechStack;
