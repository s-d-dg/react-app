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
            <tr className={classes['table-title']}>Best-selling books</tr>
            {data.bestSellers.map(book => (
                <tr className={classes.results}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                </tr>
            ))}
        </table>
    </div>;
}

export default BookStoreData;