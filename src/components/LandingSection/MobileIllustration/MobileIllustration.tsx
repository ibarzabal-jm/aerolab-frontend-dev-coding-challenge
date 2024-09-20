import Image from "next/image";

import styles from "./MobileIllustration.module.css";

export const MobileIllustration = () => {
  return (
    <div className={styles.mobileIllustration}>
      <Image
        src="/hero-responsive.png"
        alt="Illustration"
        width={580}
        height={518}
      />
    </div>
  );
};
