import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-container">
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <h1
            className="navbar-title"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            @narddev
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
