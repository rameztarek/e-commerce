"use client";

import { useRouter } from "next/navigation";
import { ProductType } from "../types";
import { usePathname, useSearchParams } from "next/navigation";

const ProductInteraction = ({
  product,
  selectedColor,
  selectedSize,
}: {
  product: ProductType;
  selectedColor: string;
  selectedSize: string;
}) => {
  const router = useRouter();
  const pathmame = usePathname();
  const searcherParams = useSearchParams();
  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searcherParams.toString());
    params.set(type, value);
    router.push(`${pathmame}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* SIZE */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              onClick={() => handleTypeChange("size", size)}
              className={`curser-pointer border  p-0.5 ${selectedSize === size ? "border-gray-600" : "border-gray-200"}`}
              key={size}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center cursor-pointer  ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* COLOR */}
      <div className="flex flex-col gap-2 text-sm">
        <span>Color</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              onClick={() => handleTypeChange("color", color)}
              className={`curser-pointer border  p-0.5 ${selectedColor === color ? "border-gray-300" : "border-white"}`}
              key={color}
            >
              <div className={`w-6 h-6`} style={{backgroundColor : color}}>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* QUANTITY */}
      <div className="flex flex-col gap-2 text-sm">
        <span>Quantity</span>
        <div className="flex items-center gap-2">
          <button className="cursor-pointer border border-gray-300 p-1">
          
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInteraction;
