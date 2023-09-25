import React from 'react'
import Navbar from './components/NavBar/Navbar'
import "./main.css"
import ItemListContainer from './components/Items/ItemListContainer'
import ItemDetailContainer from './components/Details/ItemDetailContainer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
         <Route path='/contact' element={<Contact />} />
         <Route path='/detalle:id/' element={<Detalle />}/>
      </Routes>
      
      
      
      
      
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  )
}

export default App

