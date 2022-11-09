import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookStoreActions } from "../../store/bookStores";
import { fetchBookStores } from "../../store/bookStores/book-stores-actions";
import Loader from "../../ui/loader/loader";
import BookStoreList from "../book-store-list/book-store-list";
import classes from './content.module.css';

interface ContentPropTypes {
    className: string;
}

const Content = ({ className }: ContentPropTypes) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(bookStoreActions.loadBookStores());
        fetchBookStores()(dispatch);

    }, []);

    const { bookStores, isLoading, loadFailed } = useSelector((state: any) => state.bookStores);

    let content;
    if (isLoading) {
        content = <Loader />;
    }

    if (loadFailed) {
        content = <div id='main-error' className={classes.error}>Something went wrong...  &#59;&#40;</div>;
    }

    if (bookStores.length) {
        content = <BookStoreList bookStores={bookStores} />
    }

    return <div className={className}>{content}</div>
};

export default Content;