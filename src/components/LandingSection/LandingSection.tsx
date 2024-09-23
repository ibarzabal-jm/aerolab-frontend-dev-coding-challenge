import React from "react";
import { Container } from "../Container/Container";
import styles from "./LandingSection.module.css";
import { LandingText } from "./LandingText/LandingText";
import { DesktopIllustration } from "./DesktopIllustration/DesktopIllustration";
import { CardsContainer } from "./CardsContainer/CardsContainer";
import { MobileIllustration } from "./MobileIllustration/MobileIllustration";

export const LandingSection = () => {
  return (
    <div className={styles.landingBackground}>
      <Container innerClassName={styles.landingContent}>
        <LandingText />
        <DesktopIllustration />
      </Container>

      <Container
        className={styles.sectionGradient}
        innerClassName={styles.sectionGradientContent}
      >
        <MobileIllustration />
        <CardsContainer />
      </Container>
    </div>
  );
};
