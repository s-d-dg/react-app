import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './App.module.css';
import BookStoreList from './components/book-store-list/book-store-list';
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
    if(bookStores.length > 0) {
      setIsLoading(false);
    }
  }, [bookStores]);

  return (
    <div className={classes.layout}>
      <div className={classes.title}><h1>BEST BOOK STORES !</h1></div>
      {isLoading ? <Loader /> :<BookStoreList bookStores={bookStores} />}
    </div>
  );
}

export default App;
