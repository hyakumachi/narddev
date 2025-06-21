import React from 'react'
import './Info.css'
import { FaGithub } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";

const Info = () => {
  return (
    <div  className='container'>
        <div className="contact-container">
            <button className='github-btn' 
              onClick={() => window.open("https://github.com/hyakumachi", "_blank", "noopener,noreferrer")}><FaGithub className='icon'size={16}/>Github</button>
            <button className='resume-btn' 
            onClick={() => window.open("/src/assets/resume.pdf", "_blank", "noopener,noreferrer")}><MdCloudDownload className='icon' size={20}/>Resume</button>
        </div>
    </div>
  )
}

export default Info