import React from 'react'
import {useDispatch} from 'react-redux'
import { restFromTotal, addToTotal} from '../../features/cart/cartSlice'

const CartPageItem = ({price, totalPrice, name, amount, category}) => {

   
    const dispatch = useDispatch()

    const restAmountTotal = () => {
        dispatch(restFromTotal({price, totalPrice, name, amount}))
    }

    const addAmountTotal = () => {
        dispatch(addToTotal({price, totalPrice, name, amount}))
    }
  return (
    <div className="cartItem_container">
       <div className='img_container'>
       {name && <img src={`/assets/${category}/${name.split(" ").join("_")}.jpg`} alt={name}/>}
       </div>
        <div className="cartDetail_container">
            <h1>{name}</h1>
            <h1>Price: {price}</h1>
            <h1>Quantity: {amount}</h1>
            <h1>Total price: {totalPrice?.toFixed(2)}</h1>
            <div className="counter_container">
            <button onClick={restAmountTotal}>-</button>
            <p>{amount}</p>
            <button onClick={addAmountTotal}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartPageItem