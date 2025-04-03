import React from 'react'
import man_banner from '../../assets/man_banner.png'
import woman_banner from '../../assets/woman_banner.png'
import kid_banner from '../../assets/kid_banner.png'
import { CountdownTimer } from '../CountdownTimer/CountdownTimer'
import './Banner.css'

export const Banner = ({bannerType = 'men'}) => {
  const bannerImage = bannerType === 'women' ? woman_banner : bannerType === 'kid' ? kid_banner : man_banner;

  return (
    <div className="banner">
      <div className='banner-left'>
        <h1 className='discount'>
          Flat 50% off
        </h1>
        <CountdownTimer duration={44400000}/>
        <button className='explore'>
          Explore More
        </button>
      </div>
      <div className='banner-right'>
        <img className='img-banner' src={bannerImage} alt={`${bannerType}'s Collection`} />
      </div>
    </div>
  )
}
