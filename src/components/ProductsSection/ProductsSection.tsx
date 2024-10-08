import React, { Suspense } from "react";
import { Container } from "../Container/Container";
import { Pagination } from "./Pagination/Pagination";
import { PaginationBottom } from "./PaginationBottom/PaginationBottom";
import { ProductsShowed } from "./ProductsShowed/ProductsShowed";
import { RedeemService } from "../../services/index";
import { Filter, Sort } from "@/services/types";
import { ProductsList } from "./ProductsList/ProductsList";
import { HeaderSection } from "./HeaderSection/HeaderSection";
import { FiltersContainer } from "./FiltersContainer/FiltersContainer";
import { CategoryFilter } from "./CategoryFilter/CategoryFilter";
import { SortProducts } from "./SortProducts/SortProducts";
import { DesktopDivider } from "./DesktopDivider/DesktopDivider";

import styles from "./ProductsSection.module.css";
import { ProductsListSkeleton } from "./ProductsList/ProductsListSkeleton/ProductsListSkeleton";

interface ProductsSectionProps {
  currentPage: number;
  sortBy: Sort;
  filterBy: Filter;
}

export const ProductsSection = async ({
  currentPage,
  filterBy,
  sortBy,
}: ProductsSectionProps) => {
  const { products, totalPages, total } = await RedeemService.getProducts({
    page: currentPage,
    filterBy,
    sortBy,
  });

  return (
    <Container id="products" className={styles.section}>
      <HeaderSection />

      <FiltersContainer>
        <FiltersContainer.Filters>
          <>
            <CategoryFilter currentFilter={filterBy} />
            <DesktopDivider />
            <SortProducts currentSort={sortBy} />
          </>
        </FiltersContainer.Filters>
        <FiltersContainer.Pagination>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </FiltersContainer.Pagination>
      </FiltersContainer>
      <Suspense
        key={currentPage + sortBy + filterBy}
        fallback={<ProductsListSkeleton />}
      >
        <ProductsList products={products} />
      </Suspense>

      <PaginationBottom>
        <PaginationBottom.Pagination>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </PaginationBottom.Pagination>
        <PaginationBottom.Information>
          <ProductsShowed
            currentPage={currentPage}
            pageSize={products.length}
            totalProducts={total}
          />
        </PaginationBottom.Information>
      </PaginationBottom>
    </Container>
  );
};
