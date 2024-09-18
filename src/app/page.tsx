import { Container } from "@/components/Container/Container";
import { LandingSection } from "@/components/LandingSection/LandingSection";
import { Pagination } from "@/components/Pagination/Pagination";
import { PaginationBottom } from "@/components/PaginationBottom/PaginationBottom";
import { ProductsList } from "@/components/ProductsList/ProductsList";
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
  const sortBy = searchParams?.sortBy as Sort;
  const filterBy = searchParams?.filter as Filter;

  const { products, total, totalPages } = await RedeemService.getProducts({
    page: currentPage,
    sortBy,
    filterBy,
  });

  return (
    <>
      <LandingSection />
      <Container>
        <Suspense
          key={currentPage + sortBy + filterBy}
          fallback={<div>Loading...</div>}
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
    </>
  );
}
