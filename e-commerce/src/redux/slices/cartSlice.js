import { createSlice, createSelector } from '@reduxjs/toolkit';
import all_product from '../../assets/all_product';

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
  }
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

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  items => Object.values(items).reduce((total, quantity) => total + quantity, 0)
);

export const selectCalculatedTotalAmount = createSelector(
  [selectCartItems],
  (items) => {
    let totalAmount = 0;
    for (const item in items) {
      if (items[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * items[item];
      }
    }
    return totalAmount;
  }
)
export default cartSlice.reducer; 