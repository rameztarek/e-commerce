import Link from "next/link";
import { ProductType } from "../types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

// TEMPORARY


const ProductList = async ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) => {
  const req = await fetch(`https://dummyjson.com/products/category/mens-shirts`)
  const res: { products: ProductType[] } = await req.json();
  const data = res;
  console.log(data);
  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        
      </div>
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
