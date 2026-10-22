import Link from "next/link";
import { ProductType } from "../types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import { categories } from "@/app/lib/categories";

const ProductList = async ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) => {
  const req = await fetch(`http://127.0.0.1:5500/data/dataStore.json`, {
    cache: "no-store",
  });
  if (!req.ok) {
    return <p className="text-red-500">Could not load products.</p>;
  }
  const { products }: { products: ProductType[] } = await req.json();


  const selected = categories.find((c) => c.slug === category);
  const filtered =
    !selected || selected.slug === "all"
      ? products
      : products.filter((p) => selected.dataCategories.includes(p.p));

  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 py-16">
          No products in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductList;