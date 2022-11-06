export interface BookModel {
    id: string;
    title: string;
    author: string;
  };
  
  export interface BookStoreModel {
    id: string;
    name: string;
    imgUrl: string;
    establishmentDate: string;
    website: string;
    rating: number
    countryFlagImg: string;
    bestSellers: BookModel[]
  };

  export interface BookStoreStateModel {
    bookStores: BookStoreModel[];
  }