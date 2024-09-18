import React from "react";
import { Container } from "../Container/Container";
import styles from "./LandingSection.module.css";
import Image from "next/image";

export const LandingSection = () => {
  return (
    <Container className={styles.landingSection}>
      <div className={styles.landingContent}>
        <div>
          <h4 className={styles.landingSpan}>Explore the</h4>
          <h1 className={styles.landingTitle}>
            <span className="text-brand">Tech </span>
            <span>Zone</span>
          </h1>
          <p className={styles.landingDescription}>
            Here you’ll be able to exchange all of your hard-earned Aeropoints
            and exchange them for cool tech.
          </p>
          <button>View products</button>
        </div>

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
      </div>
    </Container>
  );
};
