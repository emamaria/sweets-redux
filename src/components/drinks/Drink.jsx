import React, { useState } from 'react'

const Drink = ({name, quantity, price }) => {
  let unitPrice = price.toFixed(2)
  const [count, setCount] = useState({price: unitPrice, amount: 1, totalPrice(){ return (this.price*this.amount).toFixed(2)} });
  
    const restAmount = () => {
  
      if(count.amount > 1){
        setCount({...count, amount: count.amount - 1})
      }
     
    }
  
    const addAmount = () => { 
      setCount({...count, amount: count.amount + 1})
    }
  return (
    <div className='drink_container'>
        <img src={`/assets/drinks/${name.split(" ").join("_")}.jpg`} alt={name}/>
        <h3>{name[0].toUpperCase() + name.substring(1)}</h3>
        <div className="sweet_total_container">
        <p className='sweet_price'>{count.totalPrice()}€</p>
        <div className="sweet_amount" >
        <button onClick={restAmount}>-</button>
        <p>{count.amount}</p>
         <button onClick={addAmount}>+</button>
        </div>
       
        </div>
    </div>
  )
}

export default Drink