import { createSlice } from "@reduxjs/toolkit";

const cardshow=createSlice({
    name:'toggle',
    initialState:{
        cartvisible:false
    },
    reducers:{
        toggle(state){
            state.cartvisible=!state.cartvisible
        }
    }
    
})
export const cartaction=cardshow.actions
export default cardshow;