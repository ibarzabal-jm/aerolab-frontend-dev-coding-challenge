import React from "react";
import { Container } from "../Container/Container";
import styles from "./LandingSection.module.css";
import { LandingTitle } from "./LandingTitle/LandingTitle";
import { DesktopIllustration } from "./DesktopIllustration/DesktopIllustration";
import { ViewProductsButton } from "./ViewProductsButton/ViewProductsButton";
import { ExploreTheText } from "./ExploreTheText/ExploreTheText";

export const LandingSection = () => {
  return (
    <div className={styles.landingSection}>
      <Container>
        <div className={styles.landingContent}>
          <div className={styles.landingText}>
            <ExploreTheText />
            <LandingTitle />
            <p className={styles.landingDescription}>
              Here you&apos;ll be able to exchange all of your hard-earned
              Aeropoints and exchange them for cool tech.
            </p>
            <ViewProductsButton />
          </div>

          <DesktopIllustration />
        </div>
      </Container>

      <Container className={styles.sectionGradient}>hola</Container>
    </div>
  );
};
