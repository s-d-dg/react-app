import { openUriInNewTab } from "../../../../../shared/open-url/url-opener";
import { BookStoreFooterPropTypes } from "../desktop-book-store";
import classes from "./desktop-book-store-footer.module.css";

const DesktopBookStoreFooter = ({
  establishmentDate,
  website,
  country,
}: BookStoreFooterPropTypes) => {
  const clickWebsiteHandler = () => {
    openUriInNewTab(website);
  };

  return (
    <div className={classes.footer}>
      <div data-id="desktop-card-footer">
        {establishmentDate} -{" "}
        <span className={classes.website} onClick={clickWebsiteHandler}>
          {website}
        </span>
      </div>
      <img src={country} srcSet={country} width="28" height="21" alt="flag" />
    </div>
  );
};

export default DesktopBookStoreFooter;
