import { Fragment } from 'react';
import { BookStoreModel } from '../../store/bookStores/model';
import BookStore from './book-store/book-store';

interface BookStoreListProps {
    bookStores: BookStoreModel[]
};

const BookStoreList = ({ bookStores }: BookStoreListProps) => {
    const bookStoreCards = bookStores.map(bs => (<BookStore key={bs.id} bookStore={bs}/>));

    return <Fragment>
        {bookStoreCards}
    </Fragment>
};

export default BookStoreList;