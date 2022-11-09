import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './App.module.css';
import BookStoreList from './components/book-store-list/book-store-list';
import Header from './components/header/header';
import { fetchBookStores } from './store/bookStores/book-stores-actions';
import Loader from './ui/loader/loader';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchBookStores()(dispatch);
  }, []);

  const bookStores = useSelector((state: any) => state.bookStores.bookStores);

  useEffect(() => {
    if (bookStores.length > 0) {
      setIsLoading(false);
    }
  }, [bookStores]);

  return (
    <>
      <Header />
      <div className={classes.layout}>
        {isLoading ? <Loader /> : <BookStoreList bookStores={bookStores} />}
      </div>
    </>
  );
}

export default App;
