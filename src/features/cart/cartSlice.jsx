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
    reducers:{
        clearCart:(state) =>{
            state.cartItems =[]
        },
        removeItem:(state,action)=>{
            const itemId = action.payload
            state.cartItems = state.cartItems.filter(item=> item.id !== itemId)
        },
        increaseItem:(state,{payload})=>{
            const cartItems = state.cartItems.find(item=> item.id === payload.id)
            cartItems.amount = cartItems.amount + 1
        },
        decreaseItem:(state,{payload})=>{
            const cartItems = state.cartItems.find(item=> item.id === payload.id)
            cartItems.amount = cartItems.amount - 1
        },
        totalAmount:(state)=>{
            let amount = 0
            let total = 0
            state.cartItems.forEach(item=>{
                amount += item.amount
                total+= item.price * item.amount
            })
            state.amount = amount
            state.total = total
            console.log(amount)
            console.log(total)
        }
    }
})

export const{ clearCart,removeItem, increaseItem, decreaseItem,totalAmount } = cartSlice.actions
export default cartSlice.reducer