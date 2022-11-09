import useViewport from "../../../shared/hooks/use-viewport";
import { BookStoreModel } from "../../../store/bookStores/model";
import Card from "../../../ui/card/card";
import DesktopBookStore from "./desktop/desktop-book-store";

export interface BookStoreProps {
    bookStore: BookStoreModel
}

const BookStore = ({ bookStore }: BookStoreProps) => {
    const { width } = useViewport();
    const breakpoint = 760;

    return <Card>
        {width < breakpoint ? <div /> : <DesktopBookStore bookStore={bookStore} />}
    </Card>;
}

export default BookStore;