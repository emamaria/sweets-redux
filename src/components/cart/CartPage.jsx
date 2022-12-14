import React from 'react'
import {useSelector} from 'react-redux'
import CartPageItem from './CartPageItem'

const CartPage = () => {
   const cartState = useSelector(state => state.cartTasks)

  console.log("cartSatte", cartState)
  return (
    <div className='cartPage_container'>
      { cartState.map((item, index) => {
        return <CartPageItem key={index} name={item.name} totalPrice={item.totalPrice} amount={item.amount} 
        price={item.price}/>
      } )}
    </div>
  )
}

export default CartPage