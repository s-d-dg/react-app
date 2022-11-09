import { BookModel } from "../../../../../store/bookStores/model";
import classes from "./best-sellers-table.module.css";

interface BestSellersTableProps {
  bestSellers: BookModel[];
}

const BestSellersTable = ({ bestSellers }: BestSellersTableProps) => {
  const booksToDisplay = bestSellers.length ? (
    bestSellers.map((book) => (
      <tr data-id="book-details" key={book.id} className={classes.results}>
        <td>{book.title}</td>
        <td>{book.author}</td>
      </tr>
    ))
  ) : (
    <tr className={classes.results}>
      <td>No data available</td>
    </tr>
  );

  return (
    <>
      <div data-id="best-sellers-title" className={classes["table-title"]}>
        Best-selling books
      </div>
      <table>
        <tbody>{booksToDisplay}</tbody>
      </table>
    </>
  );
};

export default BestSellersTable;
