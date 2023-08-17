import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/Books/BookkSlice';
import bookReducer from '../features/Book/BookSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    book: bookReducer,
    filter : filterReducer
  },
});
