import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="#" className="logo"><h1>StreetWear</h1></a>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Home</Link></li>
            <li><Link className="menu-link" to="/about">About</Link></li>
            <li><Link className="menu-link" to="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar