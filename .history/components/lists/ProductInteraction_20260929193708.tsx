"use client";

import { ProductType } from "../types";

const ProductInteraction = ({
  product,
  selectedColor,
  selectedSize,
}: {
  product: ProductType;
  selectedColor: string;
  selectedSize: string;
}) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* SIZE */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500" >
          Size
        </span>
        <div className="flex items-center gap-2 p-[2px]">
          {product.sizes.map((size) => (
            <div className={`curser-pointer border-1 ${selectedSize === size ? "border-gray-600" : "border-gray-200"}`} key={size}>
              <div className={`w-6 h-6  ${selectedSize === size ? "bg-black"}`}>{size}</div>
            </div>
          ))}
        </div>
      </div>
      {/* COLOR */}
      <div className="flex flex-col gap-2 text-sm"></div>
      {/* QUANTITY */}
      <div className="flex flex-col gap-2 text-sm"></div>
    </div>
  );
};

export default ProductInteraction;
