import React from 'react'
import './Featured.css'
import proj1 from '/src/assets/ftproj1.png'
import proj2 from '/src/assets/ftproj2.png'


const projects = [
    {
        date: 'April 2025',
        name: 'La Salle Davao',
        description: 'I recreated the DLSU website as "De La Salle Davao" with my own design, using the original as a reference.',
        stack: ['React', 'CSS', 'JavaScript'],
        img: proj1,
        url: 'https://la-salle-davao.vercel.app'
    },
    {
        date: 'May 2025',
        name: 'User Management System',
        description: 'A simple user management system that displays user data with search and filter features, and shows full user details in a modal.',
        stack: ['Javascript'],
        img: proj2,
        url: 'https://github.com/hyakumachi/PacanzaUserSystem'
    },
    {
        date: 'June 2025',
        name: 'Campus Elect Backend',
        description: 'A backend system for a campus election.',
        stack: ['TypeScript', 'Supabase', 'Prisma', 'NestJS'],
        img: proj2,
        url: 'https://github.com/hyakumachi/PACANZA-campus-elect-backend'
    },
]

const Featured = () => {
    return (
      <div className='container'>
        <h2 className='title'>Featured Projects</h2>
        {projects.map((project, index) => (
          <a  href={project.url} className="featured-card" target="_blank" rel="noopener noreferrer" key={index}>
            <div className="event-info">
              <div className="event-date">{project.date}</div>
              <div className="event-name">{project.name}</div>
              <div className="event-desc">{project.description}</div>
              <div className="event-stack-row">
                {project.stack.map((tech, tIdx) => (
                  <div className="event-stack" key={tIdx}>{tech}</div>
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