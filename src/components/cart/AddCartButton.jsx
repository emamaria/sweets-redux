import React from 'react'
import {useDispatch} from 'react-redux'
import {addCart} from '../../features/cart/cartSlice.js'


const AddCartButton = ({name, amount, totalPrice, price}) => {

  const dispatch = useDispatch()

  const AddItemToCart = () => {
  
    console.log(name, amount, totalPrice, price)
    dispatch(addCart({name, amount, totalPrice, price}))
  }
  return (
    <button onClick={AddItemToCart} className='addCartButton'> Add to cart
    </button>
  )
}

export default AddCartButton