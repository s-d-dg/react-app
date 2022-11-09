import { openUriInNewTab } from "../../../../../shared/open-url/url-opener";
import { BookStoreFooterPropTypes } from "../mobile-book-store";
import classes from "./mobile-book-store-footer.module.css";

const MobileBookStoreFooter = ({
  establishmentDate,
  website,
  country,
}: BookStoreFooterPropTypes) => {
  const clickWebsiteHandler = () => {
    openUriInNewTab(website);
  };

  return (
    <div data-id="mobile-card-footer">
      <div className={classes.footer}>
        <div>{establishmentDate}</div>
        <img src={country} srcSet={country} width="28" height="21" alt="flag" />
      </div>
      <div className={classes.website} onClick={clickWebsiteHandler}>
        {website}
      </div>
    </div>
  );
};

export default MobileBookStoreFooter;
