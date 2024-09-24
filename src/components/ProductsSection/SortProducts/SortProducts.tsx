"use client";

import { RadioButton } from "@/components/RadioButton/RadioButton";
import { Sort } from "@/services/types";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./SortProducts.module.css";

const SortOptions = [
  {
    label: "Newest",
    value: Sort.ASC,
  },
  {
    label: "Lowest Price",
    value: Sort.LOWEST,
  },
  {
    label: "Highest Price",
    value: Sort.HIGHEST,
  },
];

export const SortProducts = () => {
  const path = usePathname();
  const searchParams = useSearchParams();

  const actualChecked = searchParams.get("sortBy") ?? Sort.ASC;

  const createSortUrl = (value: Sort) => {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", value);
    params.set("page", "1");
    return `${path}?${params.toString()}`;
  };

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Sort By:</h5>
      {SortOptions.map((option) => (
        <Link
          key={option.value}
          href={createSortUrl(option.value)}
          className="flex items-center gap-2"
        >
          <RadioButton
            checked={actualChecked === option.value}
            value={option.value}
            size="md"
            name={option.value}
          >
            {option.label}
          </RadioButton>
        </Link>
      ))}
    </div>
  );
};
