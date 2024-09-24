export interface User {
  id: string;
  name: string;
  points: number;
  redeemHistory: [];
  createDate: string;
}

export enum Sort {
  DESC = "desc",
  ASC = "asc",
  HIGHEST = "highest",
  LOWEST = "lowest",
}

export enum Filter {
  ALL = "All",
  GAMING = "Gaming",
  AUDIO = "Audio",
  SMART_HOME = "Smart Home",
  MONITORS_TV = "Monitors & TV",
}

export enum PossibleAmountOfPoints {
  ONE_THOUSAND = "1000",
  FIVE_THOUSAND = "5000",
  SEVEN_THOUSAND_FIVE_HUNDRED = "7500",
}

export interface GetPageFilters {
  page?: number;
  limit?: number;
  sortBy?: Sort;
  filterBy?: Filter;
}

export interface AddPointsResponse {
  message: string;
  newPoints: number;
}

export interface RedeemHistory {
  productId: string;
  createDate: string;
  _id: string;
}

export interface RedeemProductResponse {
  message: string;
}

export interface Product {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  };
}

export interface ProductList {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
}
