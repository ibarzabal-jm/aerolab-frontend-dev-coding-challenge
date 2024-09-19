import React from "react";
import { Container } from "../Container/Container";
import styles from "./LandingSection.module.css";
import { LandingText } from "./LandingText/LandingText";
import { DesktopIllustration } from "./DesktopIllustration/DesktopIllustration";

export const LandingSection = () => {
  return (
    <div className={styles.landingSection}>
      <Container>
        <div className={styles.landingContent}>
          <LandingText />
          <DesktopIllustration />
        </div>
      </Container>

      <Container className={styles.sectionGradient}>hola</Container>
    </div>
  );
};
