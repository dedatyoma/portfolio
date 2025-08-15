import React from 'react'
import './Footer.css'
import heart from '../../assets/heart.png'

const Footer = () => {
  return (
    <>
      <footer>
        <p>Made with passion </p>
        <img src={heart} alt="" className='heart' />
      </footer>
    </>
  )
}

export default Footer