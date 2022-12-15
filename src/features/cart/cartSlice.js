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
        if(itemExist.name === action.payload.name && itemExist.amount > 0){
          console.log("restitem", itemExist)
          itemExist.amount -= 1
          itemExist.totalPrice -= action.payload.price

             console.log("cantidaditem", itemExist.amount)
          if(itemExist.amount === 0){
            //sale como que el item no existe
                  console.log("cantiaditem2", itemExist.amount )
          //  return  state.filter(item => item.name !== itemExist.name)
            console.log("index", state.indexOf(itemExist.name))
            //buscar el indice de ese objeto en el array y pasarlo al splice
              state.splice(state.indexOf(itemExist.name), 1)
            
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