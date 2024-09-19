import React from "react";
import Image from "next/image";
import styles from "./DesktopIllustration.module.css";

export const DesktopIllustration = () => {
  return (
    <div className={styles.illustrationContainer}>
      <Image
        src="/hero-desktop.png"
        alt="Illustration"
        width={897}
        height={795}
        className={styles.illustration}
      />
      <div className={styles.illustrationGradient}></div>
    </div>
  );
};
