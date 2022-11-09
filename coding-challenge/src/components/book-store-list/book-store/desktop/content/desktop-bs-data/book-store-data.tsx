import classes from './book-store-data.module.css';
import BookStoreDataProps, { BookStoreDataPropTypes } from '../desktop-content';
import { useDispatch } from 'react-redux';
import StarRating from '../../../shared/rating/star-rating';
import { updateBookStoreRating } from '../../../../../../store/bookStores/book-stores-actions';
import BestSellersTable from '../../../shared/table/best-sellers-table';

interface BookStoreDataProps {
    data: BookStoreDataPropTypes;
    className: string;
}

const BookStoreData = ({ data, className }: BookStoreDataProps) => {
    const dispatch = useDispatch();

    const handleChangeRating = (id: string, updatedRating: number) => {
        updateBookStoreRating(id, updatedRating)(dispatch);
    }

    return <div className={`${className} ${classes.data}`}>
        <div className={classes.header}>
            <span className={classes.name}>{data.name}</span>
            <div className={classes.rating}>
                <StarRating rating={data.rating} changeRating={handleChangeRating.bind(null, data.id)} />
            </div>
        </div>

        <BestSellersTable bestSellers={data.bestSellers}/>
    </div>;
}

export default BookStoreData;