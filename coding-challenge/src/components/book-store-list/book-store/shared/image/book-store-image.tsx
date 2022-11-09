import classes from "./book-store-image.module.css";

interface BookStoreImageProps {
  imgUrl: string;
  className: string;
}

const BookStoreImage = ({ imgUrl, className }: BookStoreImageProps) => {
  return (
    <div className={`${className} ${classes["image-container"]}`}>
      <img className={classes.image} src={imgUrl} alt="book-store-image" />
    </div>
  );
};

export default BookStoreImage;
