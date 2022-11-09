import { BookStoreModel } from '../../../../store/bookStores/model';
import BookStoreContent from './book-store-content';
import BookStoreFooter from './book-store-footer/book-store-footer';

interface BookStoreProps {
    bookStore: BookStoreModel
}

export type BookStoreContentPropTypes = Omit<BookStoreModel, 'establishmentDate' | 'website' | 'countryFlagImg'>;

const BookStore = ({bookStore}: BookStoreProps) => {

    const contentProps: BookStoreContentPropTypes = {...bookStore};
    return <>
        <BookStoreContent bookStore={contentProps}/>
        <BookStoreFooter 
        establishmentDate={bookStore.establishmentDate}
        website={bookStore.website}
        countryFlagImg={bookStore.country}
        />
    </>
};

export default BookStore;