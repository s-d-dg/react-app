import { normalizeResponse } from "./book-store-response-normalizer";
import { bookStoreActions } from "./index";

export const fetchBookStores = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:3000/stores?include=books,countries,authors"
      );

      if (!response.ok) {
        throw new Error("Cound not fetch book stores !");
      }

      const jsonResponse = await response.json();

      const data = jsonResponse.data;
      const included = jsonResponse.included;

      return normalizeResponse(data, included);
    };

    try {
      const bookStoresData = await fetchData();
      dispatch(bookStoreActions.loadBookStoresSuccess(bookStoresData));
    } catch (error) {
      console.log(error);
      dispatch(bookStoreActions.loadBookStoresFailure());
    }
  };
};

export const updateBookStoreRating = (
  bookStoreId: string,
  updatedRating: number
) => {
  return async (dispatch: any) => {
    const update = async () => {
      const response = await fetch(
        `http://localhost:3000/stores/${bookStoreId}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            data: {
              type: "stores",
              id: bookStoreId,
              attributes: {
                rating: updatedRating,
              },
            },
          }),
          headers: {
            "Content-type": "application/vnd.api+json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Patch request error !");
      }

      const jsonResponse = await response.json();

      return jsonResponse;
    };

    try {
      const response = await update();
      const updatedBookStore = response.data;

      if (
        updatedBookStore.id === bookStoreId &&
        updatedBookStore.attributes.rating === updatedRating
      ) {
        dispatch(
          bookStoreActions.updateBookStoreRating({ bookStoreId, updatedRating })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};
