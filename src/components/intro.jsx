import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheets/intro.css'


const Intro = () => {
  return (
    <div className='introContainer'>
      <h1>Welcome to Car Search</h1> 
      <h4>Click <NavLink to='/page/1' className='pageLink'>here </NavLink>to Search Cars</h4>
    </div>
  )
}
export default Intro
