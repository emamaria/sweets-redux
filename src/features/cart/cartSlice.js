import {createSlice} from '@reduxjs/toolkit' 

export const cartSlice = createSlice({
    name: "cartTasks",
    initialState: [],
    reducers: {
      addCart: (state, action) => {
        state.push(action.payload)
      },
      updateCartAdd: (state, action) => {
        console.log(action.payload)
        let itemExist = state.find(item => item.name === action.payload.name)
        if(itemExist){
          itemExist.amount += action.payload.amount
          itemExist.totalPrice += action.payload.totalPrice
        }
      }, 
     restFromTotal: (state, action) =>  {
      console.log("state", state)
         
        let itemExist = state.find(item => item.name === action.payload.name)
        console.log("payload name", action.payload.name)
        console.log("restitem", itemExist)
        if(itemExist && itemExist.amount > 0){
          console.log("restitem", itemExist)
          itemExist.amount -= 1
          itemExist.totalPrice -= action.payload.price
          if(itemExist.amount === 0){
            console.log("index", state.indexOf(itemExist.name))
            if(state.indexOf(itemExist.name) >= 0){
              state.splice(state.indexOf(itemExist.name), 1)
            }
           
          }
        }
      },
      addToTotal: (state, action) =>  {
       
        let itemExist =  state.find(item => item.name === action.payload.name)
     
        if(itemExist){
          itemExist.amount += 1
          itemExist.totalPrice += action.payload.price
        }
      }
      
    }
})
   export const  {addCart, updateCartAdd, restFromTotal, addToTotal} =  cartSlice.actions


export default cartSlice.reducer