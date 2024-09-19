import React from "react";
import styles from "./LandingTitle.module.css";

export const LandingTitle = () => {
  return (
    <h1 className={styles.landingTitle}>
      <span className="text-brand">Tech </span>
      <span>Zone</span>
    </h1>
  );
};
