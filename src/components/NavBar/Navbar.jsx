import React from 'react'


const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="#" className="logo"><h1>StreetWear</h1></a>
        <ul className="menu">
            <li><a className="menu-link" href="#">Inicio</a></li>
            <li><a className="menu-link" href="#">Acerda de Nosotros</a></li>
            <li><a className="menu-link" href="#">Productos</a></li>
            <li><a className="menu-link" href="#">Contacto</a></li>
        </ul>
    </nav>
  )
}

export default Navbar