
import BookStoreImage from '../../shared/image/book-store-image';
import { BookStoreContentPropTypes } from '../desktop-book-store';
import classes from './desktop-content.module.css';
import BookStoreData from './desktop-bs-data/book-store-data';


interface BookStoreContenteProps {
    bookStore: BookStoreContentPropTypes;
}

export type BookStoreDataPropTypes = Omit<BookStoreContentPropTypes, 'imgUrl'>;


const DesktopBookStoreContent = ({ bookStore }: BookStoreContenteProps) => {
    const bookStoreDataProps: BookStoreDataPropTypes = {...bookStore};
    return <div className={classes.content}>
        <BookStoreImage className={classes.image} imgUrl={bookStore.imgUrl} />
        <BookStoreData className={classes.data} data={bookStoreDataProps} />
    </div>
};

export default DesktopBookStoreContent;