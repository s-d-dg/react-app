import classes from './book-store-footer.module.css';

interface BookStoreFooterProps {
    establishmentDate: string;
    website: string;
    countryFlagImg: string;
}

const BookStoreFooter = ({establishmentDate, website, countryFlagImg}: BookStoreFooterProps) => {
    return <div className={classes.footer}>
        <div>{establishmentDate} - {website}</div>
        <div>{countryFlagImg}</div>
    </div>;
};

export default BookStoreFooter;