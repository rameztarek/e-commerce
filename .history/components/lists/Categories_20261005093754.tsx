"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const categories = [
  { label: "All", value: "all" },
  { label: "T-Shirts", value: "mens-shirts" },
  { label: "Dresses", value: "womens-dresses" },

];

const Categories = () => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  return (
    <div className="flex items-center gap-4 overflow-x-auto text-sm mb-6">
      {categories.map((cat) => (
        <Link
          key={cat.value}
          href={cat.value === "all" ? "/products" : `/products?category=${cat.value}`}
          className={`px-3 py-1 rounded-full whitespace-nowrap ${
            activeCategory === cat.value
              ? "bg-gray-800 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {cat.label}
        </Link>
      ))}
    </div>
  );
};

export default Categories;