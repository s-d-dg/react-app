import classes from './book-store-data.module.css';
import BookStoreDataProps, { BookStoreDataPropTypes } from '../book-store-content';

interface BookStoreDataProps {
    data: BookStoreDataPropTypes;
    className: string;
}

const BookStoreData = ({ data, className }: BookStoreDataProps) => {
    // const bestSellers = data.bestSellers.map(book => (<div key={book.id}>{book.title} | {book.author}</div>));

    return <div className={`${className} ${classes.data}`}>
        <div className={classes.header}>
            <span className={classes.name}>{data.name}</span>
            <div className={classes.rating}>with rating {data.rating}</div>
        </div>

        <table>
            <thead>
                <tr className={classes['table-title']}>
                    <td>Best-selling books</td></tr>
            </thead>
            <tbody>
                {data.bestSellers.map(book => (
                    <tr key={book.id} className={classes.results}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>;
}

export default BookStoreData;