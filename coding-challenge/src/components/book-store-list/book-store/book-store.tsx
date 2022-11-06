import { BookStoreModel } from '../../../store/bookStores/model';
import Card from '../../../ui/card/card';
import BookStoreContent from './book-store-content/book-store-content';
import BookStoreFooter from './book-store-footer/book-store-footer';

interface BookStoreProps {
    bookStore: BookStoreModel
}

export type BookStoreContentPropTypes = Omit<BookStoreModel, 'establishmentDate' | 'website' | 'countryFlagImg'>;

const BookStore = ({bookStore}: BookStoreProps) => {

    const contentProps: BookStoreContentPropTypes = {...bookStore};
    return <Card>
        <BookStoreContent bookStore={contentProps}/>
        <BookStoreFooter 
        establishmentDate={bookStore.establishmentDate}
        website={bookStore.website}
        countryFlagImg={bookStore.countryFlagImg}
        />
    </Card>
};

export default BookStore;