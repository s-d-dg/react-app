import Card from '../../../ui/card/card';
import BookStoreContent from './book-store-content/book-store-content';
import BookStoreFooter from './book-store-footer/book-store-footer';

const BookStore = (props: any) => {
    return <Card>
        <BookStoreContent />
        <BookStoreFooter />
    </Card>
};

export default BookStore;