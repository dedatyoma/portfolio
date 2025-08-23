import './Home.css'
import Select from 'react-select'
import linkedIn from '../../assets/LinkedIn.svg'
import flagUK from '../../assets/Flag_of_the_UK.svg'
import flagUA from '../../assets/Flag_of_UA.svg'
import flagES from '../../assets/Flag_of_Spain.svg'
import myPhoto from '../../assets/IMG_1307.jpg'
import clickUp from '../../assets/clickup.svg'
import dropbox from '../../assets/dropbox.svg'
import paychex from '../../assets/paychex.svg'
import elastic from '../../assets/elastic.svg'
import stripe from '../../assets/stripe.svg'
import github from '../../assets/github-icon.svg'
import { useTranslation } from 'react-i18next'
import '../../hooks/langConfig.js'


function Main (){
  const {t, i18n} = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  
  const companies = [
    { logo: clickUp },
    { logo: dropbox },
    { logo: paychex },
    { logo: elastic },
    { logo: stripe },
  ];
  const options = [
  { label: 'English', img: flagUK, value: 'en' },
  { label: 'Українська', img: flagUA, value: 'ua' },
  { label: 'Español', img: flagES, value : 'es' },
]
  function renderCompanies (list) {
    return list.map((company, idx) =>(
      <button className="company-card" key={idx}>
        <img src={`${company.logo}`} />
      </button>
    ))
  }
  return (
    <>
      <header>
        <ul className='header-main'>
          <li className='header-menu-item'>{t("home")}</li>
          <li className='header-menu-item'>{t("caseStudies")}</li>
          <li className='header-menu-item'>{t("getInTouch")}</li>
        </ul>
        <ul className='header-links'>
          <button className='button-link' 
            onClick={() => window.open(`https://www.linkedin.com/in/artem-burdykin-8b50a2290`, '_blank')}
          ><img src={linkedIn} className='links' alt="" /></button>
         <Select 
            className='select-language'
            options={options} 
            onChange={(option) => changeLanguage(option.value)}
            formatOptionLabel={(option) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img 
                  src={option.img} 
                  style={{ width: '20px', height: '15px', marginTop: '-0.5px'}}
                />
                <span>{option.label}</span>
              </div>
            )}
            placeholder="Select language"
            isSearchable={false}
          />
          <button className='button-link' 
            onClick={() => window.open(`https://github.com/dedatyoma/portfolio`, '_blank')}
          ><img src={github} className='git' alt="" /></button>
        </ul>
      </header>
      <main className='me'>
      <div className='me-text'>
        <h1>
          {t("name")}
        </h1>
        <p className='me-par'>
        {t("mePar")}
        </p>
        <button className='me-button'>{t("letGetStarted")} &gt; </button>
      </div>
      <img src={myPhoto} className='myPhoto' alt="" />
      </main>
      <div className='worked'>
          <h2>{t("workedWith")}</h2>
          <ul>
            {renderCompanies(companies)}
          </ul>
      </div>
    </>
  )
}

export default Main