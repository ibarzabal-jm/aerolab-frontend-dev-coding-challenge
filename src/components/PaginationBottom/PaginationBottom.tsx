import React, { PropsWithChildren } from "react";
import styles from "./PaginationBottom.module.css";

interface PaginationBottomComponent {
  Pagination: React.FC<PropsWithChildren>;
  Information: React.FC<PropsWithChildren>;
}

export const PaginationBottom: React.FC<PropsWithChildren> &
  PaginationBottomComponent = ({ children }) => {
  return <div className={styles.paginationContainer}>{children}</div>;
};

PaginationBottom.Pagination = ({ children }: PropsWithChildren) => {
  return <div className={styles.pagination}>{children}</div>;
};

PaginationBottom.Information = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

PaginationBottom.Pagination.displayName = "PaginationBottom.Pagination";
PaginationBottom.Information.displayName = "PaginationBottom.Information";
