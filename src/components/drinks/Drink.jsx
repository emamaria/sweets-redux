import React from 'react'

const Drink = ({name, quantity, price }) => {
  return (
    <div className='drink_container'>
        <img src={`/assets/drinks/${name.split(" ").join("_")}.jpg`} alt={name}/>
        <h3>{name[0].toUpperCase() + name.substring(1)}</h3>
        <p>1 {quantity}</p>
        <p>Price: {price.toFixed(2)}€</p>
    </div>
  )
}

export default Drink