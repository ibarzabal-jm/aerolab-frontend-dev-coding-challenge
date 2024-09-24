import { Product } from "@/services/types";
import { ProductCard } from "./ProductCard/ProductCard";
import styles from "./ProductsList.module.css";

interface ProductsListProps {
  products: Product[];
}

export async function ProductsList({ products }: ProductsListProps) {
  return (
    <ul className={styles.productsList}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ul>
  );
}
