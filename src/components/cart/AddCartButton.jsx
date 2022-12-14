import React from 'react'
import {useDispatch} from 'react-redux'
import {addCart, updateCart} from '../../features/cart/cartSlice.js'
import {useSelector} from 'react-redux'

const AddCartButton = ({name, amount, totalPrice, price}) => {
 const cartState = useSelector(state => state.cartTasks)

  
  const dispatch = useDispatch()

  
  
  const AddItemToCart = () => {
    const itemExist = cartState.find(item => item.name === name)

    // console.log("itemexiste", itemExist,name)
   //pongo ? para casos de undefied no de error .En caso de que exista
    if(itemExist?.name === name){
      dispatch(updateCart({name, amount, totalPrice, price}))
    }else{
     
      // console.log(name, amount, totalPrice, price)
      dispatch(addCart({name, amount, totalPrice, price}))
     
    }
     
  
  }

 
  return (
    
    <button onClick={AddItemToCart} className='addCartButton'> Add to cart
    </button>
  
  )
}

export default AddCartButton