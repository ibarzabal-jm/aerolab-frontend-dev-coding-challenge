import { Container } from "@/components/Container/Container";
import { LandingSection } from "@/components/LandingSection/LandingSection";
import { Pagination } from "@/components/ProductsSection/Pagination/Pagination";
import { PaginationBottom } from "@/components/ProductsSection/PaginationBottom/PaginationBottom";
import { ProductsList } from "@/components/ProductsList/ProductsList";
import { ProductsSection } from "@/components/ProductsSection/ProductsSection";
import { ProductsShowed } from "@/components/ProductsShowed/ProductsShowed";
import { RedeemService } from "@/services";
import { Filter, Sort } from "@/services/types";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    page?: string;
    sortBy?: string;
    filter?: string;
  };
}) {
  const currentPage = Number(searchParams?.page ?? 1);

  const sortBy = Object.values(Sort).includes(searchParams!.sortBy as Sort)
    ? (searchParams.sortBy as Sort)
    : Sort.ASC;

  const filterBy = Object.values(Filter).includes(
    searchParams!.filter as Filter
  )
    ? (searchParams.filter as Filter)
    : Filter.ALL;

  return (
    <>
      {/* <LandingSection /> */}

      <ProductsSection
        currentPage={currentPage}
        sortBy={sortBy}
        filterBy={filterBy}
      />
    </>
  );
}
