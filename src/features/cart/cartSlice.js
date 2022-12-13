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



export default cartSlice.reducer