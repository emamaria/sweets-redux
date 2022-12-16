import React from 'react'
import {useSelector} from 'react-redux'
import CartPageItem from './CartPageItem'

const CartPage = () => {
   const cartState = useSelector(state => state.cartTasks)

  console.log("cartSatte", cartState)
  const initialValue = 0;
  let TotalPurchase = cartState.reduce( (acc, cur) => acc + cur.totalPrice, initialValue)
  let TotalItems = cartState.reduce( (acc, cur) => acc + cur.amount, initialValue)
  return (
    <div className='cartPage_container'>
      { cartState.map((item, index) => {
        return <CartPageItem key={index} name={item.name} totalPrice={item.totalPrice} amount={item.amount} 
        price={item.price} category={item.category}/>
      } )}
      { (TotalItems>0)&&<h1 className="totalItems">Total Items:{TotalItems}</h1>}
     { (TotalPurchase>0)&&<h1 className="totalPurchase">Total purchase:{TotalPurchase.toFixed(2)}€</h1>}
    </div>
  )
}

export default CartPage