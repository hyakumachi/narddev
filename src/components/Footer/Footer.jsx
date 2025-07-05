import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <hr />
      <footer>
        <p>&copy; {year} Bernard Louie S. Pacanza. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
