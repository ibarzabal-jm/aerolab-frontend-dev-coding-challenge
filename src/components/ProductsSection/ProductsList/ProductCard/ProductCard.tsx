import Image, { getImageProps } from "next/image";
import styles from "./ProductCard.module.css";
import { Product } from "@/services/types";
import { BuyButton } from "./BuyButton/BuyButton";

import { getImage } from "@/lib/getImage";

interface ProductCardProps {
  product: Product;
  userPoints: number;
}

export const ProductCard: React.FC<ProductCardProps> = async ({
  product,
  userPoints,
}) => {
  const { base64 } = await getImage(product.img.hdUrl);

  const common = {
    alt: product.name,
    width: 280,
    height: 204,
    blurDataURL: base64,
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    placeholder: "blur",
    src: product.img.hdUrl,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    placeholder: "blur",
    src: product.img.url,
  });

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <picture>
            <source media="(min-width: 1024px)" srcSet={desktop} />
            <source media="(min-width: 500px)" srcSet={mobile} />
            <img {...rest} />
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
