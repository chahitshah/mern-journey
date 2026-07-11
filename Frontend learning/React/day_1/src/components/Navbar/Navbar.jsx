import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="section">
        

        <div className="menu">
          <h3 className="logo">Horizon Courts</h3>
          <h4 className='About'>About Us</h4>
          <h4>Services</h4>
          <h4>Coaches</h4>
          <h4>Events</h4>
          <h4>Contacts</h4>
          <button className='btn'>Book now</button>
        </div>

        
      </div>
    </nav>
  )
}

export default Navbar