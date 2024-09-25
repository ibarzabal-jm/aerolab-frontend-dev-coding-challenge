import { LandingSection } from "@/components/LandingSection/LandingSection";
import { ProductsSection } from "@/components/ProductsSection/ProductsSection";
import { Filter, Sort } from "@/services/types";

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
      <LandingSection />

      <ProductsSection
        currentPage={currentPage}
        sortBy={sortBy}
        filterBy={filterBy}
      />
    </>
  );
}
