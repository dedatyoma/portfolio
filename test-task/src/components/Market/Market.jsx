import React from 'react'
import './Market.css'
import {Box} from '@mui/material'

const Market = () => {

  const markInt = [
    {
      "caption" : "Rate hardering in Cyber market - + 15% YoY",
      "color" : "red"
    },
    {
      "caption": "New capacity entering Marine market",
      "color": "yellow"
    },
    {
      "caption": "Environmental regulatory changes in CA",
      "color" : "blue"
    }
  ]
  return (
    <Box className="market">
      <h1 className='market-caption'>Market Intelligence</h1>
      <div className="item-container">
      {markInt.map((item, index) => (
          <div key={index} className={`market-item ${item.color}`}>
            <div className='market-item-color' style={{backgroundColor: item.color}}></div>
            <div className='market-item-caption'>{item.caption}</div>
          </div>
        ))}
      </div>
    </Box>
  )
}
export default Market
