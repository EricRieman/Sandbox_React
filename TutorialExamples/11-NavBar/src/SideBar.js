import React from 'react'
import {Link} from 'react-router-dom'

import {links} from './data'

const SideBar = () => {
  return (
    <>
      <h4>sidebar</h4>
      <div className='links-container show-container'>
        <ul className='links'>
          {links.map((link)=>{
            return <li key={link.id}><Link to={link.url}>{link.text}</Link></li>
          })}
        </ul>
      </div>
    </>
  )
}

export default SideBar
