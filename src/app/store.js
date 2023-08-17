import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/Books/BookkSlice';
import bookReducer from '../features/Book/BookSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    book: bookReducer,
  },
});
