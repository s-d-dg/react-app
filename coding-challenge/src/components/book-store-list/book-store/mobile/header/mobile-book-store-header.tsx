import { useDispatch } from "react-redux";
import { updateBookStoreRating } from "../../../../../store/bookStores/book-stores-actions";
import StarRating from "../../shared/rating/star-rating";
import { BookStoreHeaderPropTypes } from "../mobile-book-store";
import classes from './mobile-book-store-header.module.css';

const MobileHeader = ({ id, name, rating }: BookStoreHeaderPropTypes) => {
    const dispatch = useDispatch();

    const handleChangeRating = (id: string, updatedRating: number) => {
        updateBookStoreRating(id, updatedRating)(dispatch);
    }
    return <div className={classes.header}>
        <div>{name}</div>
        <StarRating rating={rating} changeRating={handleChangeRating.bind(null, id)} />
    </div>
}

export default MobileHeader;