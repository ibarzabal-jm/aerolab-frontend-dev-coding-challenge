import { Suspense } from "react";
import AeroCoins from "./AeroCoins/AeroCoins";
import styles from "./Header.module.css";
import { Container } from "../Container/Container";
import AerolabIconDesktop from "@/assets/icons/aerolab-logo-1.svg";
import AerolabIconMobile from "@/assets/icons/aerolab-logo-2.svg";
import { AeroCoinsButtonSkeleton } from "./AeroCoins/AeroCoinsButton/AeroCoinsButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container innerClassName={styles.headerContent}>
        <Link href="/" aria-label="aerolab">
          <AerolabIconDesktop className={styles.desktop} />
          <AerolabIconMobile className={styles.mobile} />
        </Link>

        <div className={styles.points}>
          <Suspense fallback={<AeroCoinsButtonSkeleton />}>
            <AeroCoins />
          </Suspense>
        </div>
      </Container>
    </header>
  );
}
