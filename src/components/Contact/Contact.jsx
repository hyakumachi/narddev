import React from 'react'
import './Contact.css'
import { FaGithub } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";

const Contact = () => {
  return (
    <div  className='container'>
        <div className="contact-container">
            <button className='github-btn'><FaGithub className='icon'size={20}/>Github</button>
            <button className='resume-btn' ><MdCloudDownload className='icon' size={20}/>Resume</button>
        </div>
    </div>
  )
}

export default Contact