import Image from "next/image";

import styles from "./MobileIllustration.module.css";
import { HeroImage } from "../HeroImage/HeroImage";

export const MobileIllustration = () => {
  return (
    <div className={styles.mobileIllustration}>
      <HeroImage />
    </div>
  );
};
