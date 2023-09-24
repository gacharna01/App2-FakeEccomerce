import React from 'react'
import Navbar from './components/NavBar/Navbar'
import "./main.css"
import ItemListContainer from './components/Items/ItemListContainer'
import ItemDetailContainer from './components/Details/ItemDetailContainer'

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer /> 
      <ItemDetailContainer />
    </>
  )
}

export default App

