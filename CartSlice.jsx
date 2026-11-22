
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        plant => plant.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1
        });
      }
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        plant => plant.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(
        plant => plant.id === id
      );

      if (item) {
        if (quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            plant => plant.id !== id
          );
        } else {
          item.quantity = quantity;
        }
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
