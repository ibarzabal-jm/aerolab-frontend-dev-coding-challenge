"use client";

import { Dropdown } from "@/components/Dropdown/Dropdown";
import { Filter } from "@/services/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import styles from "./CategoryFilter.module.css";

interface CategoryFilter {
  currentFilter: Filter;
}

export const CategoryFilter = ({ currentFilter }: CategoryFilter) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const filterOptions = Object.values(Filter).map((filter) => ({
    value: filter,
    label: filter,
  }));

  const handleFilterChange = (option: Filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("filter", option as Filter);
    params.set("page", "1");
    router.push(path + "?" + params.toString(), {
      scroll: false,
    });
  };

  return (
    <div className={styles.category}>
      <h5 className={styles.title}>Filter by:</h5>

      <Dropdown<Filter>
        options={filterOptions}
        defaultValue={currentFilter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
