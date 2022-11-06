import React, { useEffect, useState } from 'react';
import classes from './App.module.css';
import BookStoreList from './components/book-store-list/book-store-list';
import Loader from './ui/loader/loader';

export interface BookModel {
  id: string;
  title: string;
  author: string;
};

export interface BookStoreModel {
  id: string;
  name: string;
  imgUrl: string;
  establishmentDate: string;
  website: string;
  rating: number
  countryFlagImg: string;
  bestSellers: BookModel[]
};

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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading])

  return (
    <div className={classes.layout}>
      <div className={classes.title}><h1>BEST SELLERS !</h1></div>
      {isLoading ? <Loader /> :<BookStoreList bookStores={DUMMY_BOOK_STORES} />}
    </div>
  );
}

export default App;
