import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookStoresThunk } from "../../store/bookStores";
import Loader from "../../ui/loader/loader";
import BookStoreList from "../book-store-list/book-store-list";
import classes from "./content.module.css";
import { ThunkDispatch } from "@reduxjs/toolkit";

interface ContentPropTypes {
  className: string;
}

const Content = ({ className }: ContentPropTypes) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  
  useEffect(() => {
    dispatch(fetchBookStoresThunk());
  }, []);

  const { bookStores, isLoading, loadFailed } = useSelector(
    (state: any) => state.bookStores
  );

  let content;
  if (isLoading) {
    content = <Loader />;
  }

  if (loadFailed) {
    content = (
      <div id="main-error" className={classes.error}>
        Something went wrong... &#59;&#40;
      </div>
    );
  }

  if (bookStores.length) {
    content = <BookStoreList bookStores={bookStores} />;
  }

  return <div className={className}>{content}</div>;
};

export default Content;
