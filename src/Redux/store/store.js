import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../slice/bookSlice";

const store = configureStore({
    reducer: {
        bookList: bookSlice
    }
})

export default store;