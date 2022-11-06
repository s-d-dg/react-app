import { BookStoreContentPropTypes } from '../book-store';
import classes from './book-store-content.module.css';
import BookStoreData from './book-store-data/book-store-data';
import BookStoreImage from './book-store-image/book-store-image';

interface BookStoreContenteProps {
    bookStore: BookStoreContentPropTypes;
}

export type BookStoreDataPropTypes = Omit<BookStoreContentPropTypes, 'imgUrl'>;


const BookStoreContent = ({ bookStore }: BookStoreContenteProps) => {
    const bookStoreDataProps: BookStoreDataPropTypes = {...bookStore};
    return <div className={classes.content}>
        <BookStoreImage className={classes.image} imgUrl={bookStore.imgUrl} />
        <BookStoreData className={classes.data} data={bookStoreDataProps} />
    </div>
};

export default BookStoreContent;