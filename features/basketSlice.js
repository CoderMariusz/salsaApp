import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: []
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeToBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in basket!`
        );
      }
      state.items = newBasket;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeToBasket } = basketSlice.actions;

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export const selectBasket = (state) => state.basket.items;
export const selectBasketById = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export default basketSlice.reducer;
