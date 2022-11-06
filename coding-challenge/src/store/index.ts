import { configureStore } from '@reduxjs/toolkit';
import bookStoresSlice from './bookStores/index';


const store = configureStore({
    reducer: {
      bookStores: bookStoresSlice.reducer
    }
  });
  
export default store;