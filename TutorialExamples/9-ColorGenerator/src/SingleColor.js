import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

//3:40

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert]= useState(false)
  const bcg = rgb.join(',')

  const hex=rgbToHex(...rgb)

  return (
  <article className={`color`} style={{backgroundColor:`rgb(${bcg})`}}>
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hex}</p>
  </article>
  )
}

export default SingleColor
