import { createSlice } from "@reduxjs/toolkit";
import { BookStoreStateModel } from "./model";

const initialState: BookStoreStateModel = {
  bookStores: [],
  loadFailed: false,
  isLoading: false,
};

const bookStoresSlice = createSlice({
  name: "book-store",
  initialState,
  reducers: {
    loadBookStores(state) {
      state.isLoading = true;
    },
    loadBookStoresSuccess(state, data: any) {
      state.bookStores = [...data.payload];
      state.isLoading = false;
    },
    loadBookStoresFailure(state) {
      state.isLoading = false;
      state.loadFailed = true;
    },
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
});

export const bookStoreActions = bookStoresSlice.actions;

export default bookStoresSlice;
