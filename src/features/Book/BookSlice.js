import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBook } from "./BookApi";

const initialState = {
    book: [],
    isLoading: false,
    isError: false,
    error: ''
};

export const fetchBook = createAsyncThunk('book/fetchBook', async () => {
    const book = await getBook();
    return book
});

const bookSlice = createSlice({
    name: 'book',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBook.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchBook.fulfilled, (state, action) => {
                state.isLoading = false;
                state.book = action.payload;
            })
            .addCase(fetchBook.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.book = []
                state.error = action.error?.message;
            })
    }
});

export default bookSlice.reducer