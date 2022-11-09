import { BookStoreModel } from '../../../../store/bookStores/model';
import { BookStoreProps } from '../book-store';
import DesktopBookStoreContent from './content/desktop-content';
import DesktopBookStoreFooter from './footer/book-store-footer';


export type BookStoreContentPropTypes = Omit<BookStoreModel, 'establishmentDate' | 'website' | 'countryFlagImg'>;

const DesktopBookStore = ({bookStore}: BookStoreProps) => {

    const contentProps: BookStoreContentPropTypes = {...bookStore};
    return <>
        <DesktopBookStoreContent bookStore={contentProps}/>
        <DesktopBookStoreFooter 
        establishmentDate={bookStore.establishmentDate}
        website={bookStore.website}
        countryFlagImg={bookStore.country}
        />
    </>
};

export default DesktopBookStore;