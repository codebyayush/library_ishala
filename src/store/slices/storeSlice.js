import { createSlice } from "@reduxjs/toolkit";
import { bookdata } from "../../utils/bookdata";

const initialState = {
  storeArr: bookdata,
  filteredArr: [],
};

const storeSlice = createSlice({
  name: "store",
  initialState: initialState,
  reducers: {
    //this will add all the items on the initial render of the productList
    addBook: (state, action) => {
      const newProduct = action.payload;

      state.storeArr = [...state.storeArr, newProduct];

    },

    //this will filter the books based on the search query
    filterBySearch: (state, action) => {
      const query = action.payload;

      if(query === "") {  
        state.storeArr = bookdata;
        return;
      }

      state.storeArr = state.storeArr.filter((book) =>
        book.title.trim().toLowerCase().includes(query.trim().toLowerCase())
      );
    },

    // this will filter the book based on the genre selected
    filterByGenre: (state, action) => {
      const genre = action.payload;

      if(genre === "") {  
        state.storeArr = bookdata;
        return;
      }

      // genre is an array of genre so I looped through the 
      // genre array and checked if the genre exists in the book
      state.storeArr = bookdata.filter((book) => 
          book.genre.filter((existingGenre) => existingGenre.trim().toLocaleLowerCase() == genre.trim().toLocaleLowerCase()).length > 0
      )
    },
  },
});

export const { addBook, filterBySearch, filterByGenre } = storeSlice.actions;

export default storeSlice.reducer;
