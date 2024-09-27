import Image from "next/image";
import styles from "./ProductCard.module.css";
import { Product } from "@/services/types";
import { BuyButton } from "./BuyButton/BuyButton";

interface ProductCardProps {
  product: Product;
  userPoints: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  userPoints,
}) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <picture>
            <source media="(min-width: 1240px)" srcSet={product.img.hdUrl} />
            <Image
              src={product.img.url}
              alt={product.name}
              width={280}
              height={204}
              sizes="(min-width: 1240px) 280px, 100vw"
            />
          </picture>
        </div>
        <div className={styles.description}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.category}>{product.category}</p>
        </div>
      </div>
      <BuyButton
        productCost={product.cost}
        productId={product._id}
        userPoints={userPoints}
        productName={product.name}
      />
    </div>
  );
};
