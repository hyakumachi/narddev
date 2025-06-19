import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='navbar-container'>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <h1 className='navbar-title'>@narddev</h1>
          <div className="hamburger-menu">
          <FiMenu size={28}/>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar