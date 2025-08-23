import React from 'react'
import './Projects.css'
import ecommerce from '../../assets/ecommerce.png'
import saltai from '../../assets/salt-ai.png'
import dashboard from '../../assets/dashboard.png'
import { useTranslation } from 'react-i18next'
import '../../hooks/langConfig.js'

function Projects () {
  const {t} = useTranslation()
 
  const projects = [
    {
      label: 'ecommerceLabel',
      par: 'ecommerceDescription',
      img: ecommerce, 
      URL: `https://github.com/dedatyoma/portfolio/tree/master/e-commerce`
    },
    {
      label: 'parallaxLabel',
      par: 'parallaxDescription',
      URL: `https://github.com/dedatyoma/test-work/tree/main/parallax`, 
      img: saltai
    },
    {
      label: 'dashboardLabel',
      par: 'dashboardDescription',
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
              <h1>{t(project.label)}</h1>
              <p className='project-par'>{t(project.par)}</p>
              <button className='project-but' onClick={() => window.open(project.URL, '_blank')}>{t("view")} &gt;</button>
            </div>
            <img className='project-img' src={`${project.img}`} alt="" />
          </>
        ) : (
          <>
          <img className='project-img' src={`${project.img}`} alt="" />
          <div className='project-desc-right'>
            <h1>{t(project.label)}</h1>
            <p className='project-par'>{t(project.par)}</p>
            <button className='project-but'  onClick={() => window.open(project.URL, '_blank')}>{t("view")} &gt;</button>
        </div>
          </>
        )}
      </div>
    ))
  }
  return (
    <>
      <main className='studies'> 
        <h1>{t("myProjects")}</h1>
        <p>{t("presentProjects")} </p>
        <div className='work'>
          {renderProjects(projects)}
        </div>
      </main>
    </>
  )
}
export default Projects
