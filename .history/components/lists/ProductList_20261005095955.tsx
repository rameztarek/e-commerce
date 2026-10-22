import Link from "next/link";
import { ProductType } from "../types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import rawData from "@/data/dataStore.json";

// ...existing code...
const ProductList = async ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) => {
  const allProducts: ProductType[] = (rawData.products ?? []).map((p) => {
    const defaultImage =
      typeof p.images?.[0] === "string" && p.images[0].trim() !== ""
        ? p.images[0]
        : "/images/placeholder.png";

    return {
      id: p.id,
      title: p.title,
      name: p.title,
      shortDescription: p.description,
      description: p.description,
      price: p.price,
      quantity: p.stock ?? 0,
      sizes: (p.sizes ?? []).map((s: string) => s.toLowerCase()),
      colors: ["default"],
      images: { default: defaultImage },
      category: p.category ?? "uncategorized",
    };
  });

  const filteredProducts =
    category && category !== "all"
      ? allProducts.filter((p) => p.category === category)
      : allProducts;

  const displayedProducts =
    params === "homepage" ? filteredProducts.slice(0, 4) : filteredProducts;

  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {params === "homepage" && (
        <Link
          href={category !== "all" ? `/products?category=${category}` : "/products"}
          className="flex justify-end mt-4 underline text-sm text-gray-500"
        >
          View all products
        </Link>
      )}
    </div>
  );
};

export default ProductList;
// ...existing code...