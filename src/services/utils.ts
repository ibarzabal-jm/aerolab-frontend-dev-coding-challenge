import { Filter, Product, Sort } from "./types";

export const sortProducts = (products: Product[], sort: Sort) => {
  switch (sort) {
    case Sort.DESC:
      return products.sort((a, b) => b.name.localeCompare(a.name));
    case Sort.ASC:
      return products.sort((a, b) => a.name.localeCompare(b.name));
    case Sort.HIGHEST:
      return products.sort((a, b) => b.cost - a.cost);
    case Sort.LOWEST:
      return products.sort((a, b) => a.cost - b.cost);
  }
};

export const filterProducts = (products: Product[], filter: Filter) => {
  switch (filter) {
    case Filter.AUDIO:
      return products.filter((product) => product.category === "audio");
    case Filter.SMART_HOME:
      return products.filter((product) => product.category === "smart_home");
    case Filter.MONITORS_TV:
      return products.filter((product) => product.category === "monitors_tv");
    case Filter.GAMING:
      return products.filter((product) => product.category === "gaming");
    case Filter.ALL:
      return products;
    default:
      return products;
  }
};
