import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/Books/BookkSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
