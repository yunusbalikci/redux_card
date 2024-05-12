import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../CourseItems";

const initialState = {
    cartItems: courseItems,
    quantity: 2,
    total:0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    clearCart:(state) => {
      state.cartItems = [];
    },
    removeItem:(state,action) => {
        const itemId = action.payload;
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseQuantity:(state,action) => {
      const cartItem =  state.cartItems.find((item) => 
            item.id === action.payload
        )
        cartItem.quantity = cartItem.quantity + 1
    },
    decreaseQuantity:(state,action) => {
      const cartItem =  state.cartItems.find((item) => 
            item.id === action.payload
        )
        if (cartItem.quantity > 1) {
          cartItem.quantity = cartItem.quantity - 1
        }
        else {
          cartItem.quantity = 1
        }
    },
    calculateTotal:(state) => {
      let total = 0
      let quantity = 0
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity
        quantity += item.quantity
      })
      state.total = total
      state.quantity = quantity
    }
  }
});

// console.log(cartSlice);

export const { clearCart , increaseQuantity , removeItem , decreaseQuantity, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
