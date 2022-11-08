import { createSlice } from '@reduxjs/toolkit';
import { BookStoreStateModel } from './model';

const initialState: BookStoreStateModel = { bookStores: [] };

const bookStoresSlice = createSlice({
    name: 'book-store',
    initialState,
    reducers: {
      loadBookStoresSuccess(state, data: any) {
        state.bookStores = [...data.payload];
      },
      updateBookStoreRating(state, action) {
        const { bookStoreId, updatedRating} = action.payload;

        const bookStoreIndex = state.bookStores.findIndex(bs => bs.id === bookStoreId);
        state.bookStores[bookStoreIndex] = {
          ...state.bookStores[bookStoreIndex],
          rating: updatedRating
        };
      }
    }
});

export const bookStoreActions = bookStoresSlice.actions;

export default bookStoresSlice;