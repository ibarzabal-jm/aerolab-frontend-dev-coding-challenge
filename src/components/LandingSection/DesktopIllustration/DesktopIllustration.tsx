import React from "react";

import styles from "./DesktopIllustration.module.css";
import { HeroImage } from "../HeroImage/HeroImage";

export const DesktopIllustration = () => {
  return (
    <div className={styles.illustrationContainer}>
      <HeroImage className={styles.illustration} />
      <div className={styles.illustrationGradient}></div>
    </div>
  );
};
