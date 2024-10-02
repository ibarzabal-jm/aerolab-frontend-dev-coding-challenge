import { Product } from "@/services/types";
import { ProductCard } from "./ProductCard/ProductCard";
import styles from "./ProductsList.module.css";
import { getUserData } from "@/lib/getUserData";

interface ProductsListProps {
  products: Product[];
}

export async function ProductsList({ products }: ProductsListProps) {
  const { points } = await getUserData();

  return (
    <div className={styles.productsList}>
      {products.map((product) => (
        <ProductCard key={product._id} userPoints={points} product={product} />
      ))}
    </div>
  );
}
