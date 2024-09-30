import React from "react";
import styles from "../ProductCard/ProductCard.module.css";
import skeletonStyles from "./ProductCardSkeleton.module.css";
import AeroPayIcon from "@/assets/icons/aeropay-3.svg";
import { SkeletonText } from "@/components/SkeletonText/SkeletonText";

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <div className={skeletonStyles.iconOverlay}></div>
          <AeroPayIcon className={skeletonStyles.icon} />
        </div>
        <div className={styles.description}>
          <SkeletonText width="80%" text="md" />
          <SkeletonText width="60%" text="sm" />
        </div>
      </div>
      <div className={skeletonStyles.buttonSkeleton}></div>
    </div>
  );
};
