"use client";

import { RadioButton } from "@/components/RadioButton/RadioButton";
import { Sort } from "@/services/types";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./SortProducts.module.css";
import { useRouter } from "next/navigation";

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

interface SortProductsPorps {
  currentSort: Sort;
}

export const SortProducts = ({ currentSort }: SortProductsPorps) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", event.target.value);
    params.set("page", "1");
    router.push(path + "?" + params.toString(), {
      scroll: false,
    });
  };

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Sort by:</h5>
      {SortOptions.map((option) => (
        <RadioButton
          key={option.value}
          checked={currentSort === option.value}
          value={option.value}
          size="md"
          name={option.value}
          onChange={onChange}
          label={option.label}
        />
      ))}
    </div>
  );
};
