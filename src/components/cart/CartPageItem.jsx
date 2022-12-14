import React from 'react'
import {useDispatch} from 'react-redux'
import { restFromTotal, addToTotal} from '../../features/cart/cartSlice'

const CartPageItem = ({price, totalPrice, name, amount}) => {

   
    const dispatch = useDispatch()

    const restAmountTotal = () => {
        dispatch(restFromTotal({price, totalPrice, name, amount}))
    }

    const addAmountTotal = () => {
        dispatch(addToTotal({price, totalPrice, name, amount}))
    }
  return (
    <div>
       
        <div>
          {name && <img src={`/assets/sweets/${name.split(" ").join("_")}.jpg`} alt={name}/>}
            <h1>{name}</h1>
        </div>
        <div>
        <h1>{totalPrice?.toFixed(2)}</h1>
        <h1>{price}</h1>
        <button onClick={restAmountTotal}>-</button>
        <p>{amount}</p>
         <button onClick={addAmountTotal}>+</button>
        </div>
    </div>
  )
}

export default CartPageItem