import React from 'react'
import './style/NavBar.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Hamburger from './Hamburger/Hamburger'

export default function NavBar() {
    return (
    <div className='nav-wrapper'>
      <div className='nav-cont'>
        <div>
          <NavLink className='my-name' to="/">TB.u,s.c.e,m.i</NavLink>
        </div>
          <div className='nav-links'>
            <NavLink className='text-links' to="/">Home</NavLink>
            <NavLink className='text-links' to="/simpleflex">Simple Flex</NavLink>
            <NavLink className='text-links' to="/simplegrid">Simple Grid</NavLink>
          </div>
          <Hamburger/>
        </div>
    </div>
  )
}
