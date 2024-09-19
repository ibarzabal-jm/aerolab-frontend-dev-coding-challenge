import React from "react";
import styles from "./ViewProductsButton.module.css";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import Link from "next/link";

export const ViewProductsButton = () => {
  return (
    <Link href="#products" className={styles.button}>
      <span className={styles.text}>VIEW ALL PRODUCTS</span>
      <ArrowDownIcon aria-hidden="true" className={styles.icon} />
    </Link>
  );
};
