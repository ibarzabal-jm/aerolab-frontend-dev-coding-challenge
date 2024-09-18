import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/ibarzabal-jm/aerolab-frontend-dev-coding-challenge"
      >
        View this repository
      </Link>
    </footer>
  );
}
