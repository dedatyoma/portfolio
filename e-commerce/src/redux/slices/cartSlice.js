import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || {},
  totalAmount: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      state.items[itemId] = (state.items[itemId] || 0) + 1;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      if (state.items[itemId] > 0) {
        state.items[itemId] -= 1;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = {};
      localStorage.removeItem('cartItems');
    },
    updateTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    }
  },
});

export const { addToCart, removeFromCart, clearCart, updateTotalAmount } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectTotalAmount = (state) => state.cart.totalAmount;

export default cartSlice.reducer; 