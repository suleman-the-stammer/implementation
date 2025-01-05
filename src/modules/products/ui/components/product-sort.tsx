"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { useProductFilters } from "../../hooks/use-product-filters"

export const ProductSort = () => {
  const [filters, setFilters] = useProductFilters();

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        className={cn(
          "rounded-full bg-primary text-primary-foreground border-primary hover:bg-primary/90",
          filters.sort !== "curated" &&
            "bg-transparent text-muted-foreground border-transparent hover:bg-accent hover:text-accent-foreground"
        )}
        variant="secondary"
        onClick={() => setFilters({ sort: "curated" })}
      >
        Curated
      </Button>
      <Button
        size="sm"
        className={cn(
          "rounded-full bg-primary text-primary-foreground border-primary hover:bg-primary/90",
          filters.sort !== "trending" &&
            "bg-transparent text-muted-foreground border-transparent hover:bg-accent hover:text-accent-foreground"
        )}
        variant="secondary"
        onClick={() => setFilters({ sort: "trending" })}
      >
        Trending
      </Button>
      <Button
        size="sm"
        className={cn(
          "rounded-full bg-primary text-primary-foreground border-primary hover:bg-primary/90",
          filters.sort !== "hot_and_new" &&
            "bg-transparent text-muted-foreground border-transparent hover:bg-accent hover:text-accent-foreground"
        )}
        variant="secondary"
        onClick={() => setFilters({ sort: "hot_and_new" })}
      >
        Hot & New
      </Button>
    </div>
  );
};
