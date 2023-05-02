import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BookStoreStateModel } from "./model";
import { fetchData } from "./book-stores-actions";

const initialState: BookStoreStateModel = {
  bookStores: [],
  loadFailed: false,
  isLoading: false,
};

export const fetchBookStoresThunk = createAsyncThunk('book-store/fetch', async () => {
  try {
    const bookStoresData = await fetchData();
    return Promise.resolve(bookStoresData);
  } catch (error) {
    console.log(error);
    return Promise.reject();
}
});

const bookStoresSlice = createSlice({
  name: "book-store",
  initialState,
  reducers: {
    updateBookStoreRating(state, data) {
      const { bookStoreId, updatedRating } = data.payload;

      const bookStoreIndex = state.bookStores?.findIndex(
        (bs) => bs.id === bookStoreId
      );
      state.bookStores[bookStoreIndex] = {
        ...state.bookStores[bookStoreIndex],
        rating: updatedRating,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBookStoresThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchBookStoresThunk.fulfilled, (state, action) => {
        state.bookStores = [...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchBookStoresThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.loadFailed = true;
      })
  },
});

export const bookStoreActions = bookStoresSlice.actions;

export default bookStoresSlice;
