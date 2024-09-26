import { Product } from "@/services/types";
import { ProductCard } from "./ProductCard/ProductCard";
import styles from "./ProductsList.module.css";
import { RedeemService } from "@/services";
import { getUserData } from "@/lib/getUserData";

interface ProductsListProps {
  products: Product[];
}

export async function ProductsList({ products }: ProductsListProps) {
  const { points } = await getUserData();

  return (
    <ul className={styles.productsList}>
      {products.map((product) => (
        <ProductCard key={product._id} userPoints={points} product={product} />
      ))}
    </ul>
  );
}
