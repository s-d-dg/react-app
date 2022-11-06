import classes from './book-store-data.module.css';
import BookStoreDataProps, { BookStoreDataPropTypes } from '../book-store-content';

interface BookStoreDataProps {
    data: BookStoreDataPropTypes
}

const BookStoreData = ({data}: BookStoreDataProps) => {
    const bestSellers = data.bestSellers.map(book => (<div key={book.id}>{book.title} | {book.author}</div>));

    return <div className={classes.data}>
        <div>{data.name} with rating {data.rating}</div>
        <div>Best-selling books</div>
        {bestSellers}
    </div>;
}

export default BookStoreData;