import React from 'react'
import { NavLink } from 'react-router-dom'

const CartLink = () => {
  return (
    <div className='cart_link'>
    <NavLink className="cart__navlink" to="/cart">Cart</NavLink>
   </div>
  )
}

export default CartLink