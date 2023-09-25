import React from 'react'
import { Link } from 'react-router-dom'
import CartWidge from './CartWidge'


const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="#" className="logo"><h1>StreetWear</h1></a>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Home</Link></li>
            <li><Link className="menu-link" to="/category">Category</Link></li>
            <li><Link className="menu-link" to="/category/jewelery">Jewelery</Link></li>
            <li><Link className="menu-link" to="/category/mensclothing">Men's clothing</Link></li>
            <li><Link className="menu-link" to="/category/electronics">Electronics</Link></li>


            
            {/* <li><Link className="menu-link" to="/contact">Contact</Link></li> */}
        </ul>
        <CartWidge />  
    </nav>
  )
}

export default Navbar