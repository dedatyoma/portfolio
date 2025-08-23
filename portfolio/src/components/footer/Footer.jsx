import React from 'react'
import './Footer.css'
import heart from '../../assets/heart.png'
import { useTranslation } from 'react-i18next'
import '../../hooks/langConfig.js'

const Footer = () => {
   const {t} = useTranslation()
  return (
    <>
      <footer>
        <p>{t("madeWithPassion")}</p>
        <img src={heart} alt="" className='heart' />
      </footer>
    </>
  )
}

export default Footer