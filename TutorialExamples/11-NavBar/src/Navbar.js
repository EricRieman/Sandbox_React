import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

import { links, socials } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  // the logic in this hook ensures the heght of the links container
  // is the same height as all the links, so it dynamically changes
  // if more links are added/removed.
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    if( showLinks )
      linksContainerRef.current.style.height = `${linksHeight}px`
    else
      linksContainerRef.current.style.height = '0px'

  }, [showLinks])
 
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo'/>
          <button className='nav-toggle' onClick={()=>{setShowLinks(!showLinks)}}>
            <FaBars />
          </button>
        </div>

        <div className='links-container' ref={linksContainerRef} >
          <ul className='links' ref={linksRef}>
            {links.map((link)=>{
              return <li key={link.id}><Link to={link.url}>{link.text}</Link></li>
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          {socials.map((social)=>{
            return <li key={social.id}><a href={social.url}>{social.icon}</a> </li>
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
