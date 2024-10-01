import React, { PropsWithChildren } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  id?: string;
  className?: string;
  innerClassName?: string;
}

export const Container = ({
  children,
  id,
  className = "",
  innerClassName = "",
}: PropsWithChildren<ContainerProps>) => {
  return (
    <section id={id} className={`${className} ${styles.container}`}>
      <div className={`${innerClassName} ${styles.inner}`}>{children}</div>
    </section>
  );
};
