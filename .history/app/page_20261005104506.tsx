import ProductList from "@/components/lists/ProductList";
import Image from "next/image";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <section className="">
      <div className="relative aspect-3/1 mt-12">
        <Image src="/products/featured.png" alt="" fill />
      </div>
      <ProductList category={category || "all"} params="homepage" />
    </section>
  );
};

export default Home;
