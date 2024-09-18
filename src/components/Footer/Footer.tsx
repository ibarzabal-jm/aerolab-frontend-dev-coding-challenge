import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link target="_blank" className="text-1" href="https://www.redee.me">
        View this repository
      </Link>
    </footer>
  );
}
