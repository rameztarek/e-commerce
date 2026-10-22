// app/products/page.tsx
import ProductList from "@/components/lists/ProductList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) => {
  const { category } = await searchParams;

  return (
    <div className="mt-12">
      <ProductList category={category || "all"} params="products" />
    </div>
  );
};

export default ProductsPage;