import { ProductType } from "../types";
import ProductCard from "./ProductCard";

const TshertProduct = async () => {
  const req = await fetch(`https://dummyjson.com/products/category/mens-shirts`);
  const res: ProductType[] = await req.json();
  const data = 
  console.log(res);

      const products: ProductType[] = res.products.map((p: string | number) => ({
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
    <div className="">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default TshertProduct;
