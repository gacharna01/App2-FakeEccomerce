import React from 'react'
import ItemListContainer from '../components/Items/ItemListContainer'
import { useParams } from 'react-router-dom'

const Home = () => {
   const params= useParams()
   console.log(params)
  return (
    <div>Home
      <ItemListContainer />
    </div>
  )
}

export default Home