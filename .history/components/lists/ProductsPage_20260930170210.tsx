import ProductCard from "@/components/lists/ProductCard";
import { ProductType } from "@/components/types";

const ProductsPage = async () => {
  const res = await fetch("https://dummyjson.com/products/category/mens-shirts");
  const data = await res.json();

  const products: ProductType[] = data.products.map((p: string|number) => ({
    id: p.id,
    name: p.title,
    shortDescription: p.description,
    description: p.description,
    price: p.price,
    sizes: ["s", "m", "l", "xl"],
    colors: ["default"],
    images: { default: p.thumbnail },
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;