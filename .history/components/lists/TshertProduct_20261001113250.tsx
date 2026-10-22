import { ProductType } from "../types";
import ProductCard from "./ProductCard";

const TshertProduct = async () => {
  const req = await fetch(
    `https://dummyjson.com/products/category/mens-shirts`,
  );
  const res: { products: ProductType[] } = await req.json();
  const data = res;
  console.log(res);

  const products: ProductType[] = data.products.map((p: string | number) => ({
    id: p.id,
    shortDescription: p.description,
    description: p.description,
    price: p.price,
    sizes: ["s", "m", "l", "xl"],
    colors: ["default"],
    images: { default: p.thumbnail },
  }));

  return (
    <div className="">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default TshertProduct;
