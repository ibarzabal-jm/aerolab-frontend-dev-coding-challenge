import { Product } from "@/services/types";
import { ProductCard } from "./ProductCard/ProductCard";
import styles from "./ProductsList.module.css";
import { RedeemService } from "@/services";

interface ProductsListProps {
  products: Product[];
}

export async function ProductsList({ products }: ProductsListProps) {
  const { points } = await RedeemService.getUser();

  return (
    <ul className={styles.productsList}>
      {products.map((product) => (
        <ProductCard key={product._id} userPoints={points} product={product} />
      ))}
    </ul>
  );
}
