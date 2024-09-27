"use client";

import { usePathname, useSearchParams } from "next/navigation";
import styles from "./Pagination.module.css";
import { PaginationArrow } from "./PaginationArrow/PaginationArrow";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const path = usePathname();
  const searchParams = useSearchParams();

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${path}?${params.toString()}`;
  };

  return (
    <div className={styles.pagination}>
      <PaginationArrow
        direction="left"
        href={createPageUrl(currentPage - 1)}
        isDisabled={currentPage === 1}
      />
      <p className={styles.pageInfo + " text-brand"}>
        <span className={styles.span}>Page </span>
        {currentPage} of {totalPages}
      </p>
      <PaginationArrow
        direction="right"
        href={createPageUrl(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      />
    </div>
  );
};
