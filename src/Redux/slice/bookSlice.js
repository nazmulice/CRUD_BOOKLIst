import { createSlice } from "@reduxjs/toolkit";

const inititialBook = {
    books: [
        { id: 1, title: "Programming with C",author:"Blagurosamy" },
        { id: 2, title: "Compact IT", author:"Ashek Mahmud" },
    ]
};

export const bookSlice = createSlice({
  name: "books",
  initialState: inititialBook,
  reducers: {
    showBook: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
    //   const id = action.payload;
    //   state.books = state.books.filter((book) => book.id !== id);
        state.books.splice(action.payload, 1);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
  },
});

export const { showBook, addBook, deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;