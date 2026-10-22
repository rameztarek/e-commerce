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
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Size</span>
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <span
              className={`rounded border px-3 py-1 ${selectedSize === size ? "border-black" : "border-gray-300"}`}
              key={size}
            >
              {size.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color</span>
        <div className="flex gap-2">
          {product.colors.map((color) => (
            <span
              aria-label={color}
              className={`h-5 w-5 rounded-full border ${selectedColor === color ? "border-black" : "border-gray-300"}`}
              key={color}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInteraction;