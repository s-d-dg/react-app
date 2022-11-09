import classes from "./desktop-book-store-details.module.css";
import { useDispatch } from "react-redux";
import StarRating from "../../../shared/rating/star-rating";
import { updateBookStoreRating } from "../../../../../../store/bookStores/book-stores-actions";
import BestSellersTable from "../../../shared/table/best-sellers-table";
import { BookModel } from "../../../../../../store/bookStores/model";

interface BookStoreDetailsPropTypes {
  id: string;
  name: string;
  rating: number;
  bestSellers: BookModel[];
  className: string;
}

const BookStoreDetails = ({
  id,
  name,
  rating,
  bestSellers,
  className,
}: BookStoreDetailsPropTypes) => {
  const dispatch = useDispatch();

  const handleChangeRating = (id: string, updatedRating: number) => {
    updateBookStoreRating(id, updatedRating)(dispatch);
  };

  return (
    <div className={className}>
      <div className={classes.header}>
        <span className={classes.name}>{name}</span>
        <div className={classes.rating}>
          <StarRating
            rating={rating}
            changeRating={handleChangeRating.bind(null, id)}
          />
        </div>
      </div>

      <BestSellersTable bestSellers={bestSellers} />
    </div>
  );
};

export default BookStoreDetails;
