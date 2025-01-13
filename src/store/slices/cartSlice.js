import { createSlice } from "@reduxjs/toolkit";

//using amount to store total amount of the cart
const initialState = {
  cartArray: [],
  amount: 0,
  totalItemsInCart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    //this will add book to the cart
    //if it exists, it will show an alert
    addBookToCart: (state, action) => {
      const book = action.payload;

      const exists = state.cartArray.some((item) => item.id === book.id);

      if (!exists) {
        state.cartArray.push({
          ...book,
        });
      }

      state.totalItemsInCart = state.cartArray.length;
    },

    //this will remove item from the cart
    deleteItemFromCart: (state, action) => {
      const bookId = action.payload;

      state.cartArray = state.cartArray.filter(
        (book) => book.id !== bookId
      );

      state.totalItemsInCart = state.cartArray.length;
    },
  },
});

export const {
  addBookToCart,
  addAllItemsToCart,
  deleteItemFromCart,
  totalAmount,
  minusOne,
  plusOne,
} = cartSlice.actions;

export default cartSlice.reducer;
