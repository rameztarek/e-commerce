import ProductInteraction from "@/components/lists/ProductInteraction";
import { products } from "@/components/lists/ProductList";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color?: string; size?: string }>;
}) => {
  const [{ id }, query] = await Promise.all([params, searchParams]);
  const product = products.find((item) => String(item.id) === id);

  if (!product) notFound();

  const selectedSize = product.sizes.includes(query.size ?? "")
    ? query.size!
    : product.sizes[0];
  const selectedColor = product.colors.includes(query.color ?? "")
    ? query.color!
    : product.colors[0];
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-14">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-2/3">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md  "
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction product={product} selectedSize={selectedSize} selectedColor={selectedColor} />
        <div>
          <Image
            src="/products/klarna.png"
            alt="payment"
            width={50}
            height={25}
          />
          <Image
            src="/products/stripe.png"
            alt="payment"
            width={50}
            height={25}
          />
          <Image
            src="/products/cards.png"
            alt="payment"
            width={50}
            height={25}
          />
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
