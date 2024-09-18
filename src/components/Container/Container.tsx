import React, { PropsWithChildren } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  id?: string;
}

export const Container = ({
  children,
  id,
}: PropsWithChildren<ContainerProps>) => {
  return (
    <section id={id} className={styles.container}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
};
