import { Filter, Product, Sort } from "@/services/types";
import { ProductCard } from "./ProductCard/ProductCard";
import styles from "./ProductsList.module.css";
import { RedeemService } from "@/services";
import { Suspense } from "react";

interface ProductsListProps {
  currentPage: number;
  sortBy: Sort;
  filterBy: Filter;
}

export async function ProductsList({
  currentPage,
  sortBy,
  filterBy,
}: ProductsListProps) {
  const { products } = await RedeemService.getProducts({
    page: currentPage,
    sortBy,
    filterBy,
  });

  console.log(products);
  return (
    <ul className={styles.productsList}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ul>
  );
}
