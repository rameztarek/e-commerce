import ProductInteraction from "@/components/lists/ProductInteraction";
import { ProductType } from "@/components/types";
import Image from "next/image";


const ProductPage = async ({
  params,
  searchParams,
product
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
  product:ProductType
}) => {
  const { id } = await params;
  const { size } = await searchParams;

const req = await fetch(`http://127.0.0.1:5500/data/dataStore.json`, {
    cache: "no-store",
  });
  if (!req.ok) {
    return <div className="p-8 text-red-500">Failed to load data</div>;
  }
  const res: { product: ProductType[] } = await req.json();

  if (!product) {
    return <div>Product not found</div>;
  }
  const product = res.products.find((p) => p.id.toString() === id);

  const selectedSize = size || product.sizes[0];

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-14">
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
        />
        <div className="flex gap-2 items-center">
          <Image src="/products/klarna.png" alt="payment" width={50} height={25} className="rounded-md" />
          <Image src="/products/stripe.png" alt="payment" width={50} height={25} className="rounded-md" />
          <Image src="/products/cards.png" alt="payment" width={50} height={25}  className="rounded-md"/>
        </div>
        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;