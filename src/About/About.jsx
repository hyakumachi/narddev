import React from 'react'
import '../About/About.css'
import pfp from '../assets/pfp.jpg'

const About = () => {
  return (
    <div className="about-container">
        <img src={pfp} alt="profile-pic" />
        <div className="about-text">
        <h5>Bernard Louie S. Pacanza</h5>
        <p>Information Technology Student</p>
        </div>
    </div>
  )
}

export default About