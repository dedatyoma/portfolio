import { createSlice, createSelector } from '@reduxjs/toolkit';

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

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.items
);

export const selectTotalAmount = createSelector(
  [selectCart],
  cart => cart.totalAmount
);

export const selectTotalCartItems = createSelector(
  [selectCartItems],
  items => Object.values(items).reduce((total, quantity) => total + quantity, 0)
);

export default cartSlice.reducer; 