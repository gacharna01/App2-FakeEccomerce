import React, { useEffect } from 'react'


const ItemDetail = ({ item }) => {
    
  return (
    <div>
        <h5>{item.title}</h5>
        <img src={item.image}/>
        <p>
            Description: {item.description}
        </p>
        <p>
            Price: {item.price}
        </p>
        <p>
            Category: {item.category}
        </p>
    </div>
  )
}

export default ItemDetail