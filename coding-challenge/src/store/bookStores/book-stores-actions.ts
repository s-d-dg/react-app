import { bookStoreActions } from './index';


export const fetchBookStores = () => {
    return async (dispatch: any) => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/stores');

            if(!response.ok) {
                throw new Error('Cound not fetch book stores !');
            }

            const jsonResponse = await response.json();
            const data = jsonResponse.data;
            return data;
        } 

        try {
            const bookStoresData = await fetchData();
            dispatch(bookStoreActions.loadBookStoresSuccess(bookStoresData));
            console.log(bookStoresData);
        } catch  (error) {
            console.log(error);
        }
    }
}