"use client";

import { RadioButton } from "@/components/RadioButton/RadioButton";
import { Sort } from "@/services/types";
import Link from "next/link";
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

export const SortProducts = () => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const actualChecked = searchParams.get("sortBy") ?? Sort.ASC;

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
          checked={actualChecked === option.value}
          value={option.value}
          size="md"
          name={option.value}
          onChange={onChange}
        >
          {option.label}
        </RadioButton>
      ))}
    </div>
  );
};
