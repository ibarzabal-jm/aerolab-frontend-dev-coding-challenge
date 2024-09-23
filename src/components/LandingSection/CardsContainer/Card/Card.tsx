import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";

interface CardProps {
  desktopImage: string;
  mobileImage: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Card: React.FC<CardProps> = ({
  desktopImage,
  mobileImage,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.imageContainer}>
          <picture>
            <source srcSet={mobileImage} media="(max-width: 1023px)" />
            <source srcSet={desktopImage} media="(min-width: 1024px)" />
            <Image
              fill
              src={mobileImage}
              alt={title + " image"}
              style={{ objectFit: "contain" }}
            />
          </picture>
        </div>
        <div className={styles.contentContainer}>
          <header className={styles.header}>
            <div className={styles.iconContainer}>
              <Icon className={styles.icon} />
            </div>
            <h3 className={`${styles.title} text-brand`}>{title}</h3>
          </header>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </article>
  );
};
