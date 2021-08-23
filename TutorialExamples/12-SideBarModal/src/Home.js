import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Home = () => {
  const {setShowModal, setShowSideBar} = useGlobalContext()

  return <main>
    <button className= 'sidebar-toggle' onClick={()=>{setShowSideBar(true)}}>
      <FaBars />
    </button>
    <button className='btn' onClick={()=>{setShowModal(true)}}>
      show modal
    </button>
  </main>
}

export default Home
