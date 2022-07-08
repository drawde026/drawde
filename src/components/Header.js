import React from 'react'
import "../components/Header.css"
import {Link} from 'react-router-dom'

const Header = () => {

  return (
    <div className='Header'>
        <div className='leftSides'>
    <Link to="/"> Home</Link>
    <Link to="ShopNow"> Shop Now</Link>
    <Link to="Aboutus"> About Us</Link>
    <Link to="Contacts"> Contacts</Link>
    </div>
    </div>
  )
}

export default Header
