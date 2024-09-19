import React from "react";
import styles from "./LandingText.module.css";
import { ExploreTheText } from "./ExploreTheText/ExploreTheText";
import { LandingTitle } from "./LandingTitle/LandingTitle";
import { DescriptionText } from "./DescriptionText/DescriptionText";
import { ViewProductsButton } from "./ViewProductsButton/ViewProductsButton";

export const LandingText = () => {
  return (
    <div className={styles.landingText}>
      <ExploreTheText />
      <LandingTitle />
      <DescriptionText />
      <ViewProductsButton />
    </div>
  );
};
