import React, { useState } from 'react'

const Counter = () => {
    const [Count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (Count > 1){
        setCount(count - 1)
        }
    }
  return (
    <div>
        <button onClick={increment}>Agregar</button>
        <span>{ count }</span>
        <button onClick={decrement}>Restar</button>
    </div>
  )
}

export default Counter