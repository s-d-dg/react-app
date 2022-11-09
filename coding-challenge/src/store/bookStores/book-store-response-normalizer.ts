import { DD_MM_YYYY } from "../../shared/date-formatting/date-formats";
import { formatDateFromISO8601toGivenFormat } from "../../shared/date-formatting/date-formatter";
import { BookStoreModel, BookModel } from "./model";

export function normalizeResponse(
  data: any[],
  included: any[]
): BookStoreModel[] {
  const relatedBooks = included.filter((el) => el.type === "books");
  const relatedCountries = included.filter((el) => el.type === "countries");
  const relatedAuthors = included.filter((el) => el.type === "authors");
  const BOOK_DISPLAY_MAX_VALUE = 2;

  const bookStores = data.map((el) => ({
    id: el.id,
    name: el.attributes.name,
    imgUrl: el.attributes.storeImage,
    establishmentDate: formatDateFromISO8601toGivenFormat(
      el.attributes.establishmentDate,
      DD_MM_YYYY
    ),
    website: el.attributes.website,
    rating: el.attributes.rating,
    country: mapToCountryCode(
      el.relationships.countries.data.id,
      relatedCountries
    ),
    bestSellers: mapToBooksWithAuthors(
      el.relationships.books?.data,
      relatedBooks,
      relatedAuthors
    )
      .sort((a, b) => b.copiesSold - a.copiesSold)
      .splice(0, BOOK_DISPLAY_MAX_VALUE),
  }));
  return [...bookStores];
}

/**
 * creates url for flags provider using country code
 * @param id
 * @param allCountries
 * @returns url
 */
function mapToCountryCode(id: string, allCountries: any[]): string {
  const code = (
    allCountries.find((country) => country.id === id)?.attributes.code as string
  ).toLowerCase();

  return `https://flagcdn.com/16x12/${code}.png`;
}

function mapToBooksWithAuthors(
  books: any[],
  allBooks: any[],
  allAuthors: any[]
): BookModel[] {
  if (!books) {
    return [];
  }

  const mappedBooks = books.map((book) => {
    const mappedBook = getBook(book.id, allBooks);

    if (!mappedBook) {
      return {
        id: book.id,
        title: "",
        author: "",
        copiesSold: 0,
      };
    }

    return {
      id: book.id,
      title: mappedBook.title,
      author: getAuthor(mappedBook.authorId, allAuthors),
      copiesSold: mappedBook.copiesSold,
    };
  });
  return [...mappedBooks];
}

function getBook(id: string, allBooks: any[]): any {
  const foundBook = allBooks.find((book) => book.id === id);

  if (!foundBook) {
    return null;
  }

  return {
    title: foundBook?.attributes.name,
    copiesSold: foundBook?.attributes.copiesSold,
    authorId: foundBook.relationships.author.data.id,
  };
}

function getAuthor(id: string, allAuthors: any[]): string {
  return allAuthors.find((author) => author.id === id)?.attributes.fullName;
}
