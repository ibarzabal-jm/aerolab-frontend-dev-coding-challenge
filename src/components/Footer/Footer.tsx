import Link from "next/link";
import styles from "./Footer.module.css";
import { GithubIcon } from "./GithubIcon";
import { Container } from "../Container/Container";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Link
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ibarzabal-jm/aerolab-frontend-dev-coding-challenge"
        >
          <GithubIcon className={styles.icon} />
          View this repository
        </Link>
      </Container>
    </footer>
  );
}
