import React from 'react'
import './Projects.css'
import ecommerce from '../../assets/ecommerce.png'
import saltai from '../../assets/salt-ai.png'
import dashboard from '../../assets/dashboard.png'

function Projects () {
  const projects = [
    {
      label:'E-commerce Webiste',
      par:'I developed a dynamic and responsive e-commerce web application that allows users to browse products, add items to a cart, and complete purchases. It includes features such as product filtering, pagination, and a persistent shopping cart powered by Redux Toolkit. The design is clean and user-friendly, ensuring a smooth shopping experience across devices.',
      img: ecommerce, 
      URL:`https://github.com/dedatyoma/portfolio/tree/master/e-commerce`
    },
    {
      label:'Parallax Website',
      par:'This project is a visually engaging multi-section website built with parallax scrolling effects. It creates a storytelling experience as the user scrolls, with layered backgrounds moving at different speeds. I focused on performance optimization, responsive layout, and subtle animations to deliver an immersive UI with smooth transitions.',
      URL:`https://github.com/dedatyoma/test-work/tree/main/parallax`, 
      img: saltai
    },
    {
      label:'Dashboard Page',
      par:'I designed and built a modern admin dashboard that displays key metrics using charts, tables, and status cards. The interface is fully responsive and interactive, offering real-time data visualization. I implemented modular components and followed clean architecture practices to make the dashboard scalable and maintainable.',
      URL: `https://github.com/dedatyoma/portfolio/tree/master/test-task`, 
      img: dashboard
    },
  ]

 function renderProjects (list) {
    return list.map((project, idx) => (
      <div className='project-case' key={idx}>
        {idx % 2 === 0 ? (
          <>
            <div className='project-desc'>
              <h1>{project.label}</h1>
              <p className='project-par'>{project.par}</p>
              <button className='project-but' onClick={() => window.open(project.URL, '_blank')}>View project here &gt;</button>
            </div>
            <img className='project-img' src={`${project.img}`} alt="" />
          </>
        ) : (
          <>
          <img className='project-img' src={`${project.img}`} alt="" />
          <div className='project-desc-right'>
            <h1>{project.label}</h1>
            <p className='project-par'>{project.par}</p>
            <button className='project-but'  onClick={() => window.open(project.URL, '_blank')}>View project here &gt;</button>
        </div>
          </>
        )}
      </div>
    ))
  }
  return (
    <>
      <main className='studies'> 
        <h1>My Projects</h1>
        <p>I'd like to present a few projects I worked hard on and that reflect my capabilities. </p>
        <div className='work'>
          {renderProjects(projects)}
        </div>
      </main>
    </>
  )
}
export default Projects
