import React from 'react'
import './Navbar.css'
import logo from '../img/1.png'

const Navbar = () => {
  return (
    <header className="header">

    <a href="/" className='logo'>
        <img src={logo} alt=''/>
    </a>

    <nav className='navbar'>
        <a href="/">Inicio</a>
        <a href="/">Servicios</a>
        <a href="/">Nosotr@s</a>
        <a href="/">Login</a>
    </nav>
    </header>
  )
}

export default Navbar;