import { createSlice } from '@reduxjs/toolkit';
import { BookStoreStateModel } from './model';
import { fetchBookStores } from './book-stores-actions';
import { BookStoreModel } from './model';

const DUMMY_BOOK_STORES: BookStoreModel[] = [
    {
      id: '1',
      name: 'MicroBooks',
      imgUrl: 'https://i.pinimg.com/736x/51/a2/47/51a247e0d1785b89b70a17a1c8f31ac5--melbourne-australia-second-hand.jpg',
      establishmentDate: '1995-02-09T00:00:00+0000',
      website: 'https://www.micro-books-store.com',
      rating: 6,
      countryFlagImg: 'USA',
      bestSellers: [
        { id: 'a', title: 'aaa', author: 'aaaa' },
        { id: 'a1', title: 'aaa1', author: 'aaaa1' }
      ]
    },
    {
      id: '2',
      name: 'book store name',
      imgUrl: 'https://i.ytimg.com/vi/g-5A1EJ4KMg/maxresdefault.jpg',
      establishmentDate: '2011-01-17T00:00:00+0000',
      website: 'https://www.squirro.com',
      rating: 10,
      countryFlagImg: 'Switzerland',
      bestSellers: [
        { id: 'b', title: 'bbb', author: 'bbbb' }
      ]
    },
    {
      id: '3',
      name: 'book store name',
      imgUrl: 'https://www.crypto-news-flash.com/wp-content/uploads/2020/11/Bitcoin-Store.png',
      establishmentDate: '1971-10-10T00:00:00+0000',
      website: 'https://www.crypto-book-store.com',
      rating: 5,
      countryFlagImg: 'Poland',
      bestSellers: [
        { id: 'c', title: 'ccc', author: 'cccc' },
        { id: 'c1', title: 'ccc1', author: 'cccc1' }
      ]
    }
  ];

const initialState: BookStoreStateModel = { bookStores: [] };

const bookStoresSlice = createSlice({
    name: 'book-store',
    initialState,
    reducers: {
      loadBookStoresSuccess(state, data: any) {
        state.bookStores = [...DUMMY_BOOK_STORES];
      }
    }
});



export const bookStoreActions = bookStoresSlice.actions;

export default bookStoresSlice;