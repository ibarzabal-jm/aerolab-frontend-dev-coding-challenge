import React from "react";
import styles from "./ProductsShowed.module.css";

interface ProductsShowedProps {
  currentPage: number;
  pageSize: number;
  totalProducts: number;
}

export const ProductsShowed = ({
  currentPage,
  pageSize,
  totalProducts,
}: ProductsShowedProps) => {
  return (
    <p className={styles.productsShowed}>
      <span className="text-brand">
        {Math.min(currentPage * pageSize, totalProducts)} of {totalProducts}
      </span>{" "}
      products
    </p>
  );
};
