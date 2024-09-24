import { Filter } from "@/services/types";
import React from "react";

export const CategoryFilter = () => {
  return (
    <select>
      {Object.values(Filter).map((filter) => (
        <option key={filter} value={filter}>
          {filter}
        </option>
      ))}
    </select>
  );
};
