import {createSlice} from '@reduxjs/toolkit' 

export const cartSlice = createSlice({
    name: "cartTasks",
    initialState: [],
    reducers: {
      addCart: (state, action) => {
        state.push(action.payload)
      },
      updateCart: (state, action) => {
        console.log(action.payload)
        let itemExist = state.find(item => item.name === action.payload.name)
        if(itemExist){
          itemExist.amount += action.payload.amount
          itemExist.totalPrice += action.payload.totalPrice
        }
      }
      
    }
})
   export const  {addCart, updateCart} =  cartSlice.actions


export default cartSlice.reducer