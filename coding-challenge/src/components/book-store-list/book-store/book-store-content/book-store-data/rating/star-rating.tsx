
import { useRef, useState } from 'react';
import classes from './start-rating.module.css';

interface StartRatingProps {
    rating: number;
    changeRating: (rating: number) => void;
};

const StarRating = ({ rating, changeRating }: StartRatingProps) => {

    const [ratingValue, setRatingValue] = useState(rating);
    const [hover, setHover] = useState(rating);

    const setRatingHandler = (index: number) => {
        setRatingValue(index);
        changeRating(index);
    };

    return (
      <div className={classes['star-rating']}>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || ratingValue) ? classes.on : classes.off}
              onClick={() => setRatingHandler(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(ratingValue)}
            >
              <span className={classes.star}>&#9733;</span>
            </button>
          );
        })}
      </div>
    );
};

export default StarRating;