import React, { Suspense } from "react";
import { Container } from "../Container/Container";
import { Pagination } from "./Pagination/Pagination";
import { PaginationBottom } from "./PaginationBottom/PaginationBottom";
import { ProductsShowed } from "../ProductsShowed/ProductsShowed";
import { RedeemService } from "../../services/index";
import { Filter, Sort } from "@/services/types";
import { ProductsList } from "./ProductsList/ProductsList";
import { HeaderSection } from "./HeaderSection/HeaderSection";
import { FiltersContainer } from "./FiltersContainer/FiltersContainer";
import { CategoryFilter } from "./CategoryFilter/CategoryFilter";
import { SortProducts } from "./SortProducts/SortProducts";

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
  return (
    <Container>
      <HeaderSection />

      <FiltersContainer>
        <FiltersContainer.Filters>
          <>
            <CategoryFilter />
            <SortProducts />
          </>
        </FiltersContainer.Filters>
        <FiltersContainer.Pagination>
          <Pagination currentPage={currentPage} totalPages={10} />
        </FiltersContainer.Pagination>
      </FiltersContainer>
      <Suspense
        key={currentPage + sortBy + filterBy}
        fallback={
          <div style={{ background: "red", height: "40px" }}>Loading...</div>
        }
      >
        <ProductsList
          currentPage={currentPage}
          filterBy={filterBy}
          sortBy={sortBy}
        />
      </Suspense>

      {/* <PaginationBottom>
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
      </PaginationBottom> */}
    </Container>
  );
};
