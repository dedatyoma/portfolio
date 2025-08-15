import './Main.css'
import Select from 'react-select'
import linkedIn from '../../assets/linkedIn.svg'
import flagUK from '../../assets/Flag_of_the_UK.svg'
import flagUA from '../../assets/Flag_of_UA.svg'
import flagES from '../../assets/Flag_of_Spain.svg'
import myPhoto from '../../assets/IMG_1307.jpg'
import clickUp from '../../assets/ClickUp.svg'
import dropbox from '../../assets/Dropbox.svg'
import paychex from '../../assets/PAYCHEX.svg'
import elastic from '../../assets/elastic.svg'
import stripe from '../../assets/stripe.svg'
import github from '../../assets/github-icon.svg'


function Main (){
  const companies = [
    { logo: clickUp },
    { logo: dropbox },
    { logo: paychex },
    { logo: elastic },
    { logo: stripe },
  ];
  const options = [
  { value: 'english', img: flagUK },
  { value: 'ukrainian', img: flagUA },
  { value: 'spanish', img: flagES }
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
          <li className='header-menu-item'>Home</li>
          <li className='header-menu-item'>Case Studies</li>
          <li className='header-menu-item'>Get In Touch</li>
        </ul>
        <ul className='header-links'>
          <button className='button-link' 
            onClick={() => window.open(`https://www.linkedin.com/in/artem-burdykin-8b50a2290`, '_blank')}
          ><img src={linkedIn} className='links' alt="" /></button>
         <Select 
            className='select-language'
            options={options} 
            formatOptionLabel={(option) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img 
                  src={option.img} 
                  alt={`${option.value} flag`} 
                  style={{ width: '20px', height: '15px' }}
                />
                <span>{option.value}</span>
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
          Artem Burdykin
        </h1>
        <p className='me-par'>
        I am a graduate of two courses provided by the Ukrainian IT School Hillel. I have a solid foundation in HTML, CSS/SCSS, JavaScript (ES6+), React, and related libraries. Over the past year, I’ve gained hands-on experience in developing web products.
        </p>
        <button className='me-button'>Let's get started &gt; </button>
      </div>
      <img src={myPhoto} className='myPhoto' alt="" />
      </main>
      <div className='worked'>
          <h2>Worked with</h2>
          <ul>
            {renderCompanies(companies)}
          </ul>
      </div>
    </>
  )
}

export default Main