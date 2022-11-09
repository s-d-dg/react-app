import BookStoreImage from "../../shared/image/book-store-image";
import { BookStoreContentPropTypes } from "../desktop-book-store";
import classes from "./desktop-book-store-body.module.css";
import BookStoreDetails from "./details/desktop-book-store-details";

const DesktopBookStoreContent = (props: BookStoreContentPropTypes) => {
  return (
    <div className={classes.content}>
      <BookStoreImage className={classes.image} imgUrl={props.imgUrl} />
      <BookStoreDetails className={classes.data} {...props} />
    </div>
  );
};

export default DesktopBookStoreContent;
