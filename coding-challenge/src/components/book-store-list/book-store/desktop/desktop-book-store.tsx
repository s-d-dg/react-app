import { BookStoreModel } from "../../../../store/bookStores/model";
import { BookStoreProps } from "../book-store";
import DesktopBookStoreContent from "./body/desktop-book-store-body";
import DesktopBookStoreFooter from "./footer/desktop-book-store-footer";

export type BookStoreContentPropTypes = Omit<
  BookStoreModel,
  "establishmentDate" | "website" | "countryFlagImg"
>;
export type BookStoreFooterPropTypes = Pick<
  BookStoreModel,
  "establishmentDate" | "website" | "country"
>;

const DesktopBookStore = ({ bookStore }: BookStoreProps) => {
  const contentProps: BookStoreContentPropTypes = { ...bookStore };
  const footerProps: BookStoreFooterPropTypes = { ...bookStore };
  return (
    <>
      <DesktopBookStoreContent {...contentProps} />
      <DesktopBookStoreFooter {...footerProps} />
    </>
  );
};

export default DesktopBookStore;
