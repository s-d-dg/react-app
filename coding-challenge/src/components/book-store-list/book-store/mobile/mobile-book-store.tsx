import { BookStoreModel } from "../../../../store/bookStores/model";
import { BookStoreProps } from "../book-store";
import MobileBookStoreBody from "./body/mobile-book-store-body";
import MobileBookStoreFooter from "./footer/mobile-book-store-footer";
import MobileHeader from "./header/mobile-book-store-header";

export type BookStoreHeaderPropTypes = Pick<BookStoreModel, 'id' | 'name' | 'rating'>;
export type BookStoreBodyPropTypes = Pick<BookStoreModel, 'imgUrl' | 'bestSellers'>;
export type BookStoreFooterPropTypes = Pick<BookStoreModel, 'establishmentDate' | 'website' | 'country'>;

const MobileBookStore = ({bookStore}: BookStoreProps) => {
    const headearProps: BookStoreHeaderPropTypes = {...bookStore};
    const bodyProps: BookStoreBodyPropTypes = {...bookStore};
    const footerProps: BookStoreFooterPropTypes = {...bookStore};


    return <>
        <MobileHeader {...headearProps} />
        <MobileBookStoreBody {...bodyProps} />
        <MobileBookStoreFooter {...footerProps} />
     
    </>
};

export default MobileBookStore;