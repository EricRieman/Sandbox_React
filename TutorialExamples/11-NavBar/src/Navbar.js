import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

import { links, socials } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect

    //5:10

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

        <div className={'links-container'} ref={linksContainerRef} >
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
