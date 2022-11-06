import classes from './book-store-image.module.css';

interface BookStoreImageProps {
    imgUrl: string;
}

const BookStoreImage = ({ imgUrl }: BookStoreImageProps) => {
    return <span className={classes.image}>
        {imgUrl}
    </span>;
};

export default BookStoreImage;