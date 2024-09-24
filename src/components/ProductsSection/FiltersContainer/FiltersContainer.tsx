import React, { PropsWithChildren } from "react";

import styles from "./FiltersContainers.module.css";

interface FiltersContainerComponent {
  Pagination: React.FC<PropsWithChildren>;
  Filters: React.FC<PropsWithChildren>;
}

export const FiltersContainer: React.FC<PropsWithChildren> &
  FiltersContainerComponent = ({ children }) => {
  return <div className={styles.filtersContainer}>{children}</div>;
};

FiltersContainer.Pagination = ({ children }: PropsWithChildren) => {
  return <div className={styles.pagination}>{children}</div>;
};

FiltersContainer.Filters = ({ children }: PropsWithChildren) => {
  return <div className={styles.filters}>{children}</div>;
};

FiltersContainer.Pagination.displayName = "FiltersContainer.Pagination";
FiltersContainer.Filters.displayName = "FiltersContainer.Information";
