import classes from './book-store-content.module.css';
import BookStoreData from './book-store-data/book-store-data';
import BookStoreImage from './book-store-image/book-store-image';

const BookStoreContent = (props: any) => {
    return <div className={classes.content}>
        <BookStoreImage imgUrl={props.imgUrl}/>
        <BookStoreData {...props} />
    </div>
};

export default BookStoreContent;