import {createSlice} from '@reduxjs/toolkit' 

export const cartSlice = createSlice({
    name: "cartTasks",
    initialState: ["helado"],
    reducers: {
      addCart: (state, action) => {
        state.push(action.payload)
      },
      
    }
})
   export const  {addCart} =  cartSlice.actions


export default cartSlice.reducer