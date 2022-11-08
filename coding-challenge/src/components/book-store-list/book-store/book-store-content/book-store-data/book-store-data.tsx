import classes from './book-store-data.module.css';
import BookStoreDataProps, { BookStoreDataPropTypes } from '../book-store-content';

interface BookStoreDataProps {
    data: BookStoreDataPropTypes;
    className: string;
}

const BookStoreData = ({ data, className }: BookStoreDataProps) => {
    const bestSellers = data.bestSellers.length ?  data.bestSellers.map(book => (
        <tr key={book.id} className={classes.results}>
            <td>{book.title}</td>
            <td>{book.author}</td>
        </tr>
    )) : <tr className={classes.results}><td >No data available</td></tr>;

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
                {bestSellers}
            </tbody>
        </table>
    </div>;
}

export default BookStoreData;