import ProductInteraction from "@/components/lists/ProductInteraction";
import { ProductType } from "@/components/types" ; 
import Image from "next/image";

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color?: string; size?: string }>;
}) => {
  const { id } = await params;
  const { size } = await searchParams;

  const res = dataStore as unknown as { products: ProductType[] };

  const product = res.products.find((p) => p.id.toString() === id);


  if (!product) {
    return <div className="p-8 text-center text-lg">Product not found</div>;
  }

  const selectedSize = size || product.sizes?.[0] || "S";

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-14 px-4 max-w-7xl mx-auto">
      {/* IMAGES */}
      <div className="w-full lg:w-5/12 relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
        {product.images && product.images.length > "0" && (
          <Image
            src={product.images[0]}
            alt={product.title || product.name || "Product Image"}
            fill
            className="object-contain"
            priority
          />
        )}
      </div>

      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.title || product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>

        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
        />

        <div className="flex gap-2 items-center mt-4">
          <Image
            src="/products/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/products/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/products/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>

        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black cursor-pointer">
            Terms & Conditions
          </span>{" "}
          and{" "}
          <span className="underline hover:text-black cursor-pointer">
            Privacy Policy
          </span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black cursor-pointer">
            Refund Policies
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default ProductPage;