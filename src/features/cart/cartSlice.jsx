import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../data/cartItems";

const initialState = {
    cartItems: cartItems,
    amount:4,
    total:0,
    isLoading:true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducer:{
        clearCart:(state =>{
            state.cartItems =[]
        })
    }
})
export const{clearCart} = cartSlice.actions
export default cartSlice.reducer