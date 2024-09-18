import React from "react";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import { Product } from "@/services/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.img.url}
          alt={product.name}
          width={product.img.hdUrl ? 280 : 140}
          height={product.img.hdUrl ? 204 : 102}
        />
      </div>
      <div className={styles.description}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>
      </div>
    </div>
  );
};
