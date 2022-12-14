import React from 'react'
import {useSelector} from 'react-redux'

const CartPage = () => {
   const cartState = useSelector(state => state.cartTasks)

  console.log(cartState)
  return (
    <div className='cartPage_container'>cartPage</div>
  )
}

export default CartPage