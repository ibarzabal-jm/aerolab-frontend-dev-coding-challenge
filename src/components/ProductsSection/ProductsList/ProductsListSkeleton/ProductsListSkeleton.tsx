import styles from "../ProductsList.module.css";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

interface ProductsListSkeletonProps {
  count?: number;
}

export const ProductsListSkeleton: React.FC<ProductsListSkeletonProps> = ({
  count = 16,
}) => {
  return (
    <ul className={styles.productsList}>
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </ul>
  );
};
