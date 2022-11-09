import { openUriInNewTab } from '../../../../../shared/open-url/url-openet';
import classes from './book-store-footer.module.css';

interface BookStoreFooterProps {
    establishmentDate: string;
    website: string;
    countryFlagImg: string;
}

const BookStoreFooter = ({ establishmentDate, website, countryFlagImg }: BookStoreFooterProps) => {

    const clickWebsiteHandler = () => {
        openUriInNewTab(website);
    };

    return <div className={classes.footer}>
        <div>{establishmentDate} - <span className={classes.website} onClick={clickWebsiteHandler}>{website}</span></div>
        <img
            src={countryFlagImg}
            srcSet={countryFlagImg}
            width="28"
            height="21"
            alt="flag" />
    </div>;
};

export default BookStoreFooter;