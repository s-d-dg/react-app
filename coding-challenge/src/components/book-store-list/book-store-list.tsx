import { Fragment } from 'react';
import { BookStoreModel } from '../../store/bookStores/model';
import BookStore from './book-store/book-store';
import  classes  from './book-store-list.module.css';

interface BookStoreListProps {
    bookStores: BookStoreModel[]
};

const BookStoreList = ({ bookStores }: BookStoreListProps) => {
    const bookStoreCards = bookStores.map(bs => (<BookStore key={bs.id} bookStore={bs}/>));

    return <div className={classes['list-container']}>
        {bookStoreCards}
    </div>
};

export default BookStoreList;