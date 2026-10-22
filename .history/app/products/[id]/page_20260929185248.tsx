import ProductInteraction from "@/components/lists/ProductInteraction";
import { ProductType } from "@/components/types";
import Image from "next/image";

const product: ProductType = [{
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  }];
const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { size, color } = await searchParams;

  const selectedSize = size;
  const selectedColor = color;
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-14">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-2/3">
        <Image
          src={`/products/${selectedColor}.jpg`}
          alt="Color"
          fill
          className="object-contain rounded-md  "
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
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
