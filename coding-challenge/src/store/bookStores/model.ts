export interface BookModel {
  id: string;
  title: string;
  author: string;
  copiesSold: number;
}

export interface BookStoreModel {
  id: string;
  name: string;
  imgUrl: string;
  establishmentDate: string;
  website: string;
  rating: number;
  country: string;
  bestSellers: BookModel[];
}

export interface BookStoreStateModel {
  bookStores: BookStoreModel[];
}
