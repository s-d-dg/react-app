import BookStoreImage from "../../shared/image/book-store-image";
import BestSellersTable from "../../shared/table/best-sellers-table";
import { BookStoreBodyPropTypes } from "../mobile-book-store";
import classes from './mobile-book-store-body.module.css';

const MobileBookStoreBody = ({ imgUrl, bestSellers }: BookStoreBodyPropTypes) => {

    return <div>
        <BookStoreImage className={classes.image} imgUrl={imgUrl} />
        <BestSellersTable bestSellers={bestSellers} />
    </div>
};

export default MobileBookStoreBody;