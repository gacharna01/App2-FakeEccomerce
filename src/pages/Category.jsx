import React from 'react'
import ItemListContainer from '../components/Items/ItemListContainer'
import { useParams } from 'react-router-dom'

const Category = () => {
   const params= useParams()
   console.log(params)
  return (
    <div>Category
      <ItemListContainer />
    </div>
  )
}

export default Category