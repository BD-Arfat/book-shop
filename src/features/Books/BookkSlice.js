import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBooks } from "./BooksApi";

const initialState = {
    books: [],
    isLoading: false,
    isError: false,
    error: ''
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    const books = await getBooks();
    return books
});

const booksSlice = createSlice({
    name: 'books',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })
    }
});

export default booksSlice.reducer