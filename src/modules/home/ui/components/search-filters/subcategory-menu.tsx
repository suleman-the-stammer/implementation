import Link from "next/link";

import { Category } from "@/payload-types";

import { CategoriesGetManyOutput } from "@/modules/categories/types";

interface Props {
  category: CategoriesGetManyOutput[1]
  isOpen: boolean;
}

export const SubcategoryMenu = ({
  category,
  isOpen,
}: Props) => {
  if (!isOpen || !category.subcategories || category.subcategories.length === 0) {
    return null;
  }

  return (
    <div
      className="absolute z-100"
      style={{
        top: "100%",
        left: 0,
      }}
    >
      {/* Invisible bridge to maintain hover */}
      <div className="h-3 w-60" />
      <div className="w-60 bg-popover text-popover-foreground rounded-xl overflow-hidden border border-border card-soft animate-fade-in-up">
        <div>
          {category.subcategories?.map((subcategory: Category) => (
            <Link
              key={subcategory.slug}
              href={`/${category.slug}/${subcategory.slug}`}
              className="w-full text-left p-4 hover:bg-accent hover:text-accent-foreground flex justify-between items-center font-medium transition-colors"
            >
              {subcategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
