import React from 'react'
import { useParams } from 'react-router-dom'

const Detalle = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <div>Detalle</div>
  )
}

export default Detalle