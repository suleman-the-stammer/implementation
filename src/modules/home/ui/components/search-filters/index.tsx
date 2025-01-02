"use client";

import { useParams } from "next/navigation";
import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

import { useProductFilters } from "@/modules/products/hooks/use-product-filters";

import { Categories } from "./categories";
import { SearchInput } from "./search-input";
import { BreadcrumbNavigation } from "./breadcrumb-navigation";
import { DEFAULT_BG_COLOR } from "../../../constants";
import { DEMO_CATEGORIES } from "../../../demo-data";

export const SearchFilters = () => {
  const trpc = useTRPC();
  const { data: categoriesData } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

  // Fall back to demo categories when the database has not been seeded yet.
  const data = categoriesData.length > 0 ? categoriesData : DEMO_CATEGORIES;

    const [filters, setFilters] = useProductFilters();

  const params = useParams();
  const categoryParam = params.category as string | undefined;
  const activeCategory = categoryParam || "all";

  const activeCategoryData = data.find((category) => category.slug === activeCategory);

  const activeCategoryColor = activeCategoryData?.color || DEFAULT_BG_COLOR;
  const activeCategoryName = activeCategoryData?.name || null;

  const activeSubcategory = params.subcategory as string | undefined;
  const activeSubcategoryName = 
    activeCategoryData?.subcategories?.find(
      (subcategory) => subcategory.slug === activeSubcategory
    )?.name || null;

  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full" style={{
      backgroundColor: activeCategoryColor,
    }}>
      <SearchInput
        defaultValue={filters.search} 
        onChange={(value) => setFilters({
          search: value
        })}
      />
      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
      <BreadcrumbNavigation
        activeCategory={activeCategory}
        activeCategoryName={activeCategoryName}
        activeSubcategoryName={activeSubcategoryName}
      />
    </div>
  );
};

export const SearchFiltersSkeleton = () => {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full" style={{
      backgroundColor: "#F5F5F5",
    }}>
      <SearchInput disabled />
      <div className="hidden lg:block">
        <div className="h-11" />
      </div>
    </div>
  );
};
