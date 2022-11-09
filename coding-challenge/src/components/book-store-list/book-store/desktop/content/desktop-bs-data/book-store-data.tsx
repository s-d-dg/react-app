import classes from './book-store-data.module.css';
import BookStoreDataProps, { BookStoreDataPropTypes } from '../desktop-content';
import StarRating from '../../../shared/rating/star-rating';
import { updateBookStoreRating } from '../../../../../../store/bookStores/book-stores-actions';
import { useDispatch } from 'react-redux';

interface BookStoreDataProps {
    data: BookStoreDataPropTypes;
    className: string;
}

const BookStoreData = ({ data, className }: BookStoreDataProps) => {
    const dispatch = useDispatch();

    const handleChangeRating = (id: string, updatedRating: number) => {
        updateBookStoreRating(id, updatedRating)(dispatch);
    }

    const bestSellers = data.bestSellers.length ? data.bestSellers.map(book => (
        <tr key={book.id} className={classes.results}>
            <td>{book.title}</td>
            <td>{book.author}</td>
        </tr>
    )) : <tr className={classes.results}><td >No data available</td></tr>;

    return <div className={`${className} ${classes.data}`}>
        <div className={classes.header}>
            <span className={classes.name}>{data.name}</span>
            <div className={classes.rating}>
                <StarRating rating={data.rating} changeRating={handleChangeRating.bind(null, data.id)} />
            </div>
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